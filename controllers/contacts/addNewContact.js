const Contact = require("../../models/contact");

const addNewContact = async (req, res) => {
  const { _id: owner } = req.user;
  const data = await Contact.create({ ...req.body, owner });
  res.status(201).json(data);
};

module.exports = addNewContact;
