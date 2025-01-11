import Order from "../models/order.model.js";

const orderController = {
  createOrder: async (req, res) => {
    try {
      const { user, items, totalPrice } = req.body;

      const newOrder = new Order({
        user,
        items,
        totalPrice,
        status: "Pending",
      });

      await newOrder.save();

      res
        .status(201)
        .send({ message: "order placed successfully", order: newOrder });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};
