const path = require("path");
const Jimp = require("jimp");
const User = require("../../models/user");
const { HttpError } = require("../../utils");

const avatarsDir = path.join(__dirname, "../", "../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);

  Jimp.read(tempUpload)
    .then((image) => image.resize(250, 250).write(resultUpload))
    .catch((err) => {
      throw new HttpError(400, err.message);
    });

  const avatarUrl = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarUrl });

  res.status(200).json({ avatarUrl });
};

module.exports = updateAvatar;
