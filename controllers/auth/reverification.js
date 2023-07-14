const User = require("../../models/user");
const { HttpError, Email } = require("../../utils");

const reverification = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw HttpError(400, "Missing required field email");
  }

  const user = await User.findOne({ email });

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  try {
    await new Email(user).send("Verification");
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({ message: "Verification email sent" });
};

module.exports = reverification;
