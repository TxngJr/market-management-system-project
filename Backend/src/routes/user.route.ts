import { Router } from "express";
import userController from "../controllers/user.controller";
import userValidations from "../validations/user.validations";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();
// router.get(
//   "/get-party",
//   authMiddleware.authenticateToken,
//   userController.getParty
// );
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/self", authMiddleware.authenticateToken, userController.self);

export default router;
