import { Router } from "express";
import storeController from "../controllers/store.controller";
import authMiddleware from "../middlewares/auth.middleware";
import accessPermissionMiddleware from "../middlewares/accessPermission.middleware";
const router = Router();
router.post(
  "/create-store",
  authMiddleware.authenticateToken,
  storeController.createStoreAndUser
);

router.get(
  "/get-stores",
  authMiddleware.authenticateToken,
  storeController.getStore
);

router.get(
  "/store-area-has",
  authMiddleware.authenticateToken,
  storeController.getAreaStoreHas
);
router.put(
  "/update-store",
  authMiddleware.authenticateToken,
  // accessPermissionMiddleware.accessPermission,
  storeController.updateStore
);

router.delete(
  "/delete-store",
  authMiddleware.authenticateToken,
  // accessPermissionMiddleware.accessPermission,
  storeController.deleteStore
);

export default router;
