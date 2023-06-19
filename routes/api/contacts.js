const { Router } = require("express");
const {
  getAllContacts,
  getContactById,
  addNewContact,
  deleteContactById,
  updateContactById,
} = require("../../controllers/contacts");

const validateBody = require("../../middlewares/validateBody");
const validationSchema = require("../../utils/validationSchema");

const router = Router();

router.get("/", getAllContacts);

router.get("/:contactId", getContactById);

router.post("/", validateBody(validationSchema), addNewContact);

router.delete("/:contactId", deleteContactById);

router.put("/:contactId", validateBody(validationSchema), updateContactById);

module.exports = router;
