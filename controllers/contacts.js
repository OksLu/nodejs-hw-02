const Contact = require("../models/contact");
const HttpError = require("../utils/HttpError");

const getAllContacts = async (req, res) => {
  const data = await Contact.find();

  res.status(200).json(data);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findById(contactId);

  if (!data) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(data);
};

const addNewContact = async (req, res) => {
  const data = await Contact.create(req.body);
  res.status(201).json(data);
};

const deleteContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({ message: "Successfully deleted" });
};

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!data) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(data);
};

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!req.body) {
    return res.status(400).json({ message: "missing field favorite" });
  }
  if (!data) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(data);
};

module.exports = {
  getAllContacts,
  getContactById,
  addNewContact,
  deleteContactById,
  updateContactById,
  updateFavorite,
};
