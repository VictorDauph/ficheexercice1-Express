import { Router } from "express";
import { createUser, deleteUser, getAllUsers, updateUser } from "../controllers/userController";

const router = Router();

router.get('/users', getAllUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;


