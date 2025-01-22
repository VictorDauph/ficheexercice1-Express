import { Router } from "express";
   import { getAllUsers } from "../controllers/userController";

   const router = Router();

   router.get('/users', getAllUsers);

   export default router;
   import { createUser } from "../controllers/userController";
   router.post('/users', createUser);
   import { updateUser } from "../controllers/userController";
   router.put('/users/:id', updateUser);
   import { deleteUser } from "../controllers/userController";
   router.delete('/users/:id', deleteUser);
