import { Request, Response } from "express";
import { users } from "../utils/data.utils";




export const getAllUsers = (req: Request, res: Response): void => {
    res.status(200).json(users);
};
export const createUser = (req: Request, res: Response): void => {
    const { name, email } = req.body;
    if (!name) {
        res.status(400).send("Name is required");
        return;
    } if (!email) {
        res.status(400).send("Email is required");
        return;
    }

    const newUser = { id: users.length + 1, name, email, isActive: false };
    users.push(newUser);
    res.status(201).send(newUser);
};
export const updateUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { name, email, isActive } = req.body;
    const user = users.find(t => t.id === parseInt(id));
    if (!user) {
        res.status(404).send("user not found");
        return;
    }
    if (name) user.name = name;
    if (email) user.email = email;
    if (typeof isActive === 'boolean') user.isActive = isActive;
    res.status(200).send(user);
};

export const deleteUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    const index = users.findIndex(t => t.id === parseInt(id));
    if (index === -1) {
        res.status(404).send("User not found");
        return;
    }
    const deletedUser = users.splice(index, 1);
    res.status(200).send(deletedUser);
};
