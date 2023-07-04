const signup = require("./signup");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const subscription = require("./subscription");
const updateAvatar = require("./updaveAvatar");
const { ctrlWrapper } = require("../../utils");

module.exports = {
  signup: ctrlWrapper(signup),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateSubscription: ctrlWrapper(subscription),
  updateAvatar: ctrlWrapper(updateAvatar),
};
