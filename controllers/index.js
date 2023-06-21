const getAllContacts = require("./contacts/getAllContacts");
const getContactById = require("./contacts/getContactById");
const addNewContact = require("./contacts/addNewContact");
const deleteContactById = require("./contacts/deleteContactById");
const updateContactById = require("./contacts/updateContactById");
const updateFavorite = require("./contacts/updateFavorite");

module.exports = {
  getAllContacts,
  getContactById,
  addNewContact,
  deleteContactById,
  updateContactById,
  updateFavorite,
};
