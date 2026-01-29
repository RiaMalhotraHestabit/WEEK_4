import express from "express";
import connectDB from "./db.js";
import logger from "../utils/logger.js";
import productRoutes from "../routes/product.routes.js";
import { errorMiddleware } from "../middlewares/error.middleware.js";

export default async function createApp() {
  const app = express();

  // 1️Core middlewares
  app.use(express.json());

  logger.info("Core middlewares loaded");

  // 2️ Database
  await connectDB();
  logger.info("Database connected");

  // 3️ Routes
  app.use("/products", productRoutes);
  logger.info("Routes mounted: /products");
  // 4️   Error middleware (ALWAYS LAST)
  app.use(errorMiddleware);

  logger.info("App bootstrapped successfully");

  return app;
}
