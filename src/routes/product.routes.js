import express from "express";
import validate from "../middlewares/validate.js";
import { createProductSchema } from "../validators/product.schema.js";
import { mongoIdSchema } from "../validators/common.schema.js";

import {
  getProducts,
  createProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

/* GET all products */
router.get("/", getProducts);

/* CREATE product (BODY validation – Day-4) */
router.post(
  "/",
  validate(createProductSchema),   // defaults to body
  createProduct
);

/* DELETE product (PARAM validation – Day-4) */
router.delete(
  "/:id",
  validate(mongoIdSchema, "params"),
  deleteProduct
);

export default router;
