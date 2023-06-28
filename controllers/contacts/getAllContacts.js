const Contact = require("../../models/contact");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page, limit, favorite } = req.query;

  const options = favorite ? { owner, favorite } : { owner };

  const contactsQuery = Contact.find(options);

  const paginationPage = +page || 1;
  const paginationLimit = +limit || 20;
  const skip = (paginationPage - 1) * paginationLimit;

  contactsQuery.skip(skip).limit(paginationLimit);

  const data = await contactsQuery;
  const total = await Contact.count(options);

  res.status(200).json({ data, total });
};

module.exports = getAllContacts;
