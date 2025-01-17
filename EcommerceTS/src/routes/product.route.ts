import { Router } from "express";
import productController from "../controller/productController";

const router = Router();

router.get("/", productController.getAllProducts);
router.post("/", productController.createProduct);
router.get("/:id", productController.getProductById as any);
router.put("/:id", productController.updateProduct as any);
router.delete("/:id", productController.deleteProduct as any);

export default router;
