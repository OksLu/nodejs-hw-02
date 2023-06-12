const {
  listContacts,
  getById,
  removeContact,
  addContact,
  updateContact,
} = require("../models/contacts");
const HttpError = require("../utils/HttpError");

const getAllContacts = async (req, res, next) => {
  try {
    const data = await listContacts();

    if (!data) {
      throw HttpError(500, "Server error");
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const data = await getById(contactId);

    if (!data) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const addNewContact = async (req, res, next) => {
  try {
    const data = await addContact(req.body);

    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

const deleteContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await removeContact(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json({ message: "Successfully deleted" });
  } catch (err) {
    next(err);
  }
};

const updateContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const data = await updateContact(contactId, req.body);

    if (!data) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllContacts,
  getContactById,
  addNewContact,
  deleteContactById,
  updateContactById,
};
