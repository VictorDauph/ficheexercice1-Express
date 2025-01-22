import { Request, Response } from "express";

 export let todos = [
    { id: 1, task: "Garer ma 4ème bugatti chiron ", completed: false, userId: 1 },
    { id: 2, task: "Coder avec les pieds", completed: true, userId: 2 },
    { id: 3, task: "Regarder des tuto sur l'evasion fiscal (juste pour savoir)", completed: false, userId: 1 },
    { id: 4, task: "Manger du vin", completed: true, userId: 3 },
    { id: 5, task: "Boire un kebab", completed: false, userId: 4 },
   ];

   export const getAllTodos = (req: Request, res: Response): void => {
       res.status(200).json(todos);
   };
   export const createTodo = (req: Request, res: Response): void => {
    const { task, userId } = req.body;
    if (!task) {
        res.status(400).send("Task is required");
        return;
    }

    const newTodo = { id: todos.length + 1, task, completed: false, userId };
    todos.push(newTodo);
    res.status(201).send(newTodo);
};
export const updateTodo = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { task, completed, userId } = req.body;
const todo = todos.find(t => t.id === parseInt(id));
    if (!todo) {
        res.status(404).send("Todo not found");
        return;
    }
if (task) todo.task = task;
    if (typeof completed === 'boolean') todo.completed = completed;
        if (userId) todo.userId = userId;
res.status(200).send(todo);
};
export const deleteTodo = (req: Request, res: Response): void => {
    const { id } = req.params;
const index = todos.findIndex(t => t.id === parseInt(id));
    if (index === -1) {
        res.status(404).send("Todo not found");
        return;
    }
const deletedTodo = todos.splice(index, 1);
    res.status(200).send(deletedTodo);
};
