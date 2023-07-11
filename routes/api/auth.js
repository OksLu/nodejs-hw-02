const { Router } = require("express");
const { auth, user } = require("../../controllers");
const validateBody = require("../../middlewares/validateBody");
const {
  authValidationSchema,
  subscriptionValidationSchema,
} = require("../../utils");
const { authMiddleware, upload } = require("../../middlewares");

const router = Router();

router.post("/register", validateBody(authValidationSchema), auth.signup);
router.get("/verify/:verificationCode", auth.verification);
router.post("/verify", auth.reverification);
router.post("/login", validateBody(authValidationSchema), auth.login);
router.post("/logout", authMiddleware, auth.logout);
router.get("/current", authMiddleware, user.getCurrent);
router.patch(
  "/subscription",
  authMiddleware,
  validateBody(subscriptionValidationSchema),
  user.subscription
);
router.patch(
  "/avatars",
  authMiddleware,
  upload.single("avatar"),
  user.updateAvatar
);

module.exports = router;
