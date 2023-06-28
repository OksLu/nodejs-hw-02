const { Router } = require("express");
const { contacts } = require("../../controllers");

const {
  validateBody,
  authMiddleware,
  isValidId,
} = require("../../middlewares/");
const { validationSchema, favoriteValidationSchema } = require("../../utils");

const router = Router();

router.get("/", authMiddleware, contacts.getAllContacts);

router.get("/:contactId", authMiddleware, contacts.getContactById);

router.post(
  "/",
  authMiddleware,
  validateBody(validationSchema),
  contacts.addNewContact
);

router.delete(
  "/:contactId",
  authMiddleware,
  isValidId,
  contacts.deleteContactById
);

router.put(
  "/:contactId",
  authMiddleware,
  isValidId,
  validateBody(validationSchema),
  contacts.updateContactById
);

router.patch(
  "/:contactId/favorite",
  authMiddleware,
  validateBody(favoriteValidationSchema),
  contacts.updateFavorite
);

module.exports = router;
