const { Router } = require("express");
const {
  getAllContacts,
  getContactById,
  addNewContact,
  deleteContactById,
  updateContactById,
  updateFavorite,
} = require("../../controllers");

const validateBody = require("../../middlewares/validateBody");
const {
  validationSchema,
  favoriteValidationSchema,
} = require("../../utils/validationSchema");

const router = Router();

router.get("/", getAllContacts);

router.get("/:contactId", getContactById);

router.post("/", validateBody(validationSchema), addNewContact);

router.delete("/:contactId", deleteContactById);

router.put("/:contactId", validateBody(validationSchema), updateContactById);

router.patch(
  "/:contactId/favorite",
  validateBody(favoriteValidationSchema),
  updateFavorite
);

module.exports = router;
