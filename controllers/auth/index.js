const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const verification = require("./verification");
const reverification = require("./reverification");
const { ctrlWrapper } = require("../../utils");

module.exports = {
  signup: ctrlWrapper(signup),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  verification: ctrlWrapper(verification),
  reverification: ctrlWrapper(reverification),
};
