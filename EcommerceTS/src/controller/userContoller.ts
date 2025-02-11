import User from "../models/user.models";
import { Request, Response } from "express";

interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
}

const userController = {
  createUser: async (req: Request, res: Response) => {
    try {
      const { name, email, password, role } = req.body;

      const user = await User.create({ name, email, password, role });

      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error });
    }
  },
};

export default userController;
