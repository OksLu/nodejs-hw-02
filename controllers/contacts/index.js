const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const addNewContact = require("./addNewContact");
const deleteContactById = require("./deleteContactById");
const updateContactById = require("./updateContactById");
const updateFavorite = require("./updateFavorite");
const { ctrlWrapper } = require("../../utils");

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  addNewContact: ctrlWrapper(addNewContact),
  deleteContactById: ctrlWrapper(deleteContactById),
  updateContactById: ctrlWrapper(updateContactById),
  updateFavorite: ctrlWrapper(updateFavorite),
};
