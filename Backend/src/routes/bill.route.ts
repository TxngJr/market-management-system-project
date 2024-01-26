import { Router } from "express";
import billController from "../controllers/bill.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();
router.get(
  "/",
  // authMiddleware.authenticateToken ,
  billController.getBills
);
router.get(
  "/owner",
  // authMiddleware.authenticateToken ,
  billController.getBillsByOwner
);
router.put(
  "/:id",
  // authMiddleware.authenticateToken ,
  billController.updateBill
);

export default router;