import { Router } from "express";
import { getUserDashboard } from "../controllers/dashboardController";

const router = Router();

router.get('/dashboard/:userId', getUserDashboard);

export default router;
