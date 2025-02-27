import Product from "../models/product.model.js";
const productController = {
  // Create a new product
  createProduct: async (req, res) => {
    try {
      const { name, description, price, category, stock } = req.body;

      const newProduct = new Product({
        name,
        description,
        price,
        category,
        stock,
      });

      await newProduct.save();

      res.status(201).send({
        message: "Product created successfully",
        product: newProduct,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  // Get all products
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  // Get a single product by ID
  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).send({ message: "Product not found" });
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  // Update a product
  updateProduct: async (req, res) => {
    try {
      const { name, description, price, category, stock } = req.body;

      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          name,
          description,
          price,
          category,
          stock,
        },
        { new: true }
      );

      if (!updatedProduct) {
        return res.status(404).send({ message: "Product not found" });
      }

      res.status(200).send({
        message: "Product updated successfully",
        product: updatedProduct,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  // Delete a product
  deleteProduct: async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);

      if (!deletedProduct) {
        return res.status(404).send({ message: "Product not found" });
      }

      res.status(200).send({
        message: "Product deleted successfully",
        product: deletedProduct,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};

export default productController;
