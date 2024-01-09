import { Router } from "express";
import userController from "../controllers/user.controller";
import accessPermissionMiddleware from "../middlewares/accessPermission.middleware";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/self", authMiddleware.authenticateToken, userController.self);
router.put(
  "/self",
  authMiddleware.authenticateToken,
  userController.updateSelf
);
router.get(
  "/get-users-by-land",
  authMiddleware.authenticateToken,
  userController.getUsersByLand
);
router.put(
  "/update-user-by-owner-of-land",
  authMiddleware.authenticateToken,
  accessPermissionMiddleware.accessPermission,
  userController.updateUserByOwnerOfLand
);

export default router;
