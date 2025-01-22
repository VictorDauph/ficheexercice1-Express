import { Request, Response } from "express";
import { todos, users } from "../utils/data.utils";

export const getUserDashboard = (req: Request, res: Response): void => {
    const { userId } = req.params;

    const user = users.find(u => u.id === parseInt(userId));
    if (!user) {
        res.status(404).send("User not found");
        return;
    }

    const userTodos = todos.filter(todo => todo.userId === user.id);
    res.status(200).json({ user, todos: userTodos });
};
