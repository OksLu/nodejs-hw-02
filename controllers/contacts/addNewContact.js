const Contact = require("../../models/contact");

const addNewContact = async (req, res) => {
  const data = await Contact.create(req.body);
  res.status(201).json(data);
};

module.exports = addNewContact;
