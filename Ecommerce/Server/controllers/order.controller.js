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
  getOrders: async (req, res) => {
    try {
      const orders = await Order.find().populate("user");
      res.status(200).send(orders);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  getOrderById: async (req, res) => {
    try {
      const order = await Order.findById(req.params.id).populate("user");
      if (!order) {
        return res.status(404).send({ message: "Order not found" });
      }
      res.status(200).send(order);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  updateOrder: async (req, res) => {
    try {
      const { items, totalPrice, status } = req.body;

      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          items,
          totalPrice,
          status,
        },
        { new: true }
      );

      if (!updatedOrder) {
        return res.status(404).send({ message: "Order not found" });
      }

      res.status(200).send({
        message: "Order updated successfully",
        order: updatedOrder,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  deleteOrder: async (req, res) => {
    try {
      const deletedOrder = await Order.findByIdAndDelete(req.params.id);

      if (!deletedOrder) {
        return res.status(404).send({ message: "Order not found" });
      }

      res.status(200).send({
        message: "Order deleted successfully",
        order: deletedOrder,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};

export default orderController;
