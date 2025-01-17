import User from "../models/user.models";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
}

const userController = {
  createUser: async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;
  },
};

export default userController;
