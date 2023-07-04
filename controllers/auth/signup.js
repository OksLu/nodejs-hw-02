const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const User = require("../../models/user");
const { HttpError } = require("../../utils");

const signup = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw new HttpError(409, `User with email ${email} already exist`);
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarUrl = gravatar.url(email, { d: "robohash" });

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarUrl,
  });

  res.status(201).json({
    email: newUser.email,
  });
};

module.exports = signup;
