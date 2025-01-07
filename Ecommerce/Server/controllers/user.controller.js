import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userController = {
  register: async (req, res) => {
    const { name, email, password } = req.body; //extract data from body

    try {
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res.status(400).send({ message: "User already exists!" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, SECRET_KEY, {
        expiresIn: "1h",
      });

      res.status(201).send({ message: "User registered successfully", token });
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  },

  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
    } catch (error) {
      return res.status(500).send({ message: "Server Error" });
    }
  },
};

export default userController;
