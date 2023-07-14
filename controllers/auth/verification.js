const User = require("../../models/user");
const { HttpError } = require("../../utils");

const verification = async (req, res) => {
  const { verificationCode } = req.params;

  const user = await User.findOne({ verificationCode });
  console.log(user);
  if (!user) {
    throw HttpError(401, "User not found");
  }

    await User.findByIdAndUpdate(user._id, {
      verify: true,
      verificationCode: "",
    });

    res.status(200).json({ message: "Verification successful" });
};

module.exports = verification;
