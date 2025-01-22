import { Router } from "express";
import { deleteTodo } from "../controllers/todoController";
import { createTodo } from "../controllers/todoController";
import { updateTodo } from "../controllers/todoController";
import { getAllTodos } from "../controllers/todoController";

   const router = Router();

   router.get('/todos', getAllTodos);
   router.post('/todos', createTodo);
   router.put('/todos/:id', updateTodo);
   router.delete('/todos/:id', deleteTodo);
   
   export default router;
