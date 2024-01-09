import { Router } from "express";
import storeController from "../controllers/store.controller";
import authMiddleware from "../middlewares/auth.middleware";
import accessPermissionMiddleware from "../middlewares/accessPermission.middleware";
const router = Router();
router.post(
  "/create-store",
  authMiddleware.authenticateToken,
  storeController.createStoreAndUserOfStore
);

router.get(
  "/get-stores-by-land",
  authMiddleware.authenticateToken,
  storeController.getStoreByLand
);

router.get(
  "/store-area-has",
  authMiddleware.authenticateToken,
  storeController.getAreaStoreHas
);
router.put(
  "/update-store",
  authMiddleware.authenticateToken,
  accessPermissionMiddleware.accessPermission,
  storeController.updateStoreByOwnerOfLand
);

router.delete(
  "/delete-store",
  authMiddleware.authenticateToken,
  accessPermissionMiddleware.accessPermission,
  storeController.deleteStoreByOwnerOfLand
);

export default router;
