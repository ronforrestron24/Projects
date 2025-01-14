import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userController = {
  // CREATE - Register new user
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send({ message: "User already exists" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      await newUser.save();
      res.status(201).send({ message: "User created successfully" });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).send({ message: "Server Error" });
    }
  },

  // READ - Get all users (admin only)
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().select("-password");
      res.status(200).send(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).send({ message: "Server Error" });
    }
  },

  // READ - Get single user
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select("-password");
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      res.status(200).send(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).send({ message: "Server Error" });
    }
  },

  // UPDATE - Update user
  updateUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const updateData = {};

      if (name) updateData.name = name;
      if (email) updateData.email = email;
      if (password) {
        updateData.password = await bcrypt.hash(password, 10);
      }

      const user = await User.findByIdAndUpdate(req.params.id, updateData, {
        new: true,
      }).select("-password");

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      res.status(200).send(user);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).send({ message: "Server Error" });
    }
  },

  // DELETE - Delete user
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      res.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).send({ message: "Server Error" });
    }
  },

  // LOGIN - User login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({ message: "Invalid credentials" });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send({ message: "Invalid credentials" });
      }

      // Generate JWT
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      res.status(200).send({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).send({ message: "Server Error" });
    }
  },

  // LOGOUT - User logout
  logout: async (req, res) => {
    try {
      // Note: In JWT, logout is typically handled client-side
      // by removing the token. This is just a server acknowledgment.
      res.status(200).send({ message: "Logged out successfully" });
    } catch (error) {
      console.error("Logout error:", error);
      res.status(500).send({ message: "Server Error" });
    }
  },
};

export default userController;
