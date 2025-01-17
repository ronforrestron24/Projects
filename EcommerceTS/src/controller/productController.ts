import { Request, Response } from "express";
import Product from "../models/product.model";

interface ProductParams {
  id: string;
}

const productController = {
  getAllProducts: async (req: Request, res: Response) => {
    try {
      const products = await Product.find();
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send({ message: "Failed to connect to server", error });
    }
  },
  createProduct: async (req: Request, res: Response) => {
    try {
      const {
        name,
        price,
        description,
      }: { name: string; price: number; description: string } = req.body;

      const newProduct = new Product({
        name,
        price,
        description,
      });

      await newProduct.save();
      res
        .status(201)
        .send({ message: "Product successfully created", product: newProduct });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Failed to connect to server", error });
    }
  },
  getProductById: async (req: Request<ProductParams>, res: Response) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).send({ message: "Product not found" });
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send({ message: "Failed to connect to server", error });
    }
  },
  updateProduct: async (req: Request<ProductParams>, res: Response) => {
    try {
      const {
        name,
        price,
        description,
      }: { name: string; price: number; description: string } = req.body;

      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { name, price, description },
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
      res.status(500).send({ message: "Failed to connect to server", error });
    }
  },
  deleteProduct: async (req: Request<ProductParams>, res: Response) => {
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
      res.status(500).send({ message: "Failed to connect to server", error });
    }
  },
};

export default productController;
