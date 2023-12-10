import { Router } from "express";
import storeController from "../controllers/store.controller";
// import userValidations from "../validations/user.validations";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();
router.get(
  "/store-party",
  authMiddleware.authenticateToken,
  storeController.getStoreParty
);
router.post(
  "/create-store-party",
  authMiddleware.authenticateToken,
  storeController.createStore
);

export default router;