const { Router } = require("express");
const { user } = require("../../controllers");
const validateBody = require("../../middlewares/validateBody");
const {
  authValidationSchema,
  subscriptionValidationSchema,
} = require("../../utils");
const authMiddleware = require("../../middlewares/authMiddleware");
const auth = require("../../controllers/auth");

const router = Router();

router.post("/register", validateBody(authValidationSchema), user.signup);
router.post("/login", validateBody(authValidationSchema), user.login);
router.post("/logout", authMiddleware, user.logout);
router.get("/current", authMiddleware, auth.getCurrent);
router.patch(
  "/subscription",
  authMiddleware,
  validateBody(subscriptionValidationSchema),
  user.updateSubscription
);

module.exports = router;
