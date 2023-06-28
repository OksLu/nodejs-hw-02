const Contact = require("../../models/contact");
const HttpError = require("../../utils/HttpError");

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({ message: "Successfully deleted" });
};

module.exports = deleteContactById;
