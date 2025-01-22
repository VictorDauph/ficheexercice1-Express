import { Router } from "express";
import { getAllDashboard, getUserDashboard } from "../controllers/dashboardController";

const router = Router();

router.get('/dashboard/', getAllDashboard);
router.get('/dashboard/:userId', getUserDashboard);

export default router;
