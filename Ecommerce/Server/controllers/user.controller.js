import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY; // Use environment variable

const userController = {
  register: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send({ message: "User already exists!" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });

      res.status(201).send({ message: "User registered successfully", token });
    } catch (error) {
      console.error("Error during registration", error);
      res.status(500).send({ message: "Server Error" });
    }
  },

  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res.status(400).send({ message: "User not found!" });
      }

      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordCorrect) {
        return res.status(400).send({ message: "Invalid credentials!" });
      }

      const token = jwt.sign({ id: existingUser._id }, SECRET_KEY, {
        expiresIn: "1h",
      });

      res.status(200).send({ message: "Login successful", token });
    } catch (error) {
      return res.status(500).send({ message: "Server Error" });
    }
  },
};

export default userController;
