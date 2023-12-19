import { Router } from "express";
import storeController from "../controllers/store.controller";
// import userValidations from "../validations/user.validations";
import authMiddleware from "../middlewares/auth.middleware";
import storeMiddleware from "../middlewares/store.middleware";

const router = Router();
router.get(
  "/store-party",
  authMiddleware.authenticateToken,
  storeController.getStoreParty
);
router.get(
  "/store-area-party",
  authMiddleware.authenticateToken,
  storeController.getAreaStoreParty
);
router.post(
  "/create-store-party",
  authMiddleware.authenticateToken,
  storeController.createStore
);
router.put(
  "/update-store-party",
  authMiddleware.authenticateToken,
  storeMiddleware.checkAccessPermissionStore,
  storeController.updateStore
);
router.delete(
  "/delete-store-party",
  authMiddleware.authenticateToken,
  storeMiddleware.checkAccessPermissionStore,
  storeController.deleteStore
);

export default router;
