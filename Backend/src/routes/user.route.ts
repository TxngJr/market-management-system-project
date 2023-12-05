import { Router } from "express";
import userController from "../controllers/user.controller";
import userValidations from "../validations/user.validations";
import { authenticateToken } from "../middlewares/auth.middleware";

const router = Router();
router.get("/self", authenticateToken,userController.profile);
router.post(
  "/register",
  userValidations.usernameCheck,
  userValidations.passwordCheck,
  userController.register
);
router.post(
  "/login",
  userValidations.usernameCheck,
  userValidations.passwordCheck,
  userController.login
);

export default router;
