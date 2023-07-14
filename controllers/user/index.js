const getCurrent = require("./getCurrent");
const subscription = require("./subscription");
const updateAvatar = require("./updaveAvatar");
const { ctrlWrapper } = require("../../utils");

module.exports = {
  getCurrent: ctrlWrapper(getCurrent),
  subscription: ctrlWrapper(subscription),
  updateAvatar: ctrlWrapper(updateAvatar),
};
