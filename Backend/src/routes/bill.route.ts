import { Router } from "express";
import billController from "../controllers/bill.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();
router.get("/get-by-land", authMiddleware.authenticateToken ,billController.getBillsByLand);

export default router;
