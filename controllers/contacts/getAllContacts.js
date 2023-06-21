const Contact = require("../../models/contact");

const getAllContacts = async (req, res) => {
  const data = await Contact.find();

  res.status(200).json(data);
};

module.exports = getAllContacts;
