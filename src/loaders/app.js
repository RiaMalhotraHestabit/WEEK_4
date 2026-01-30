import express from "express";
import connectDB from "./db.js";
import logger from "../utils/logger.js";

import userRoutes from "../routes/user.routes.js";
import productRoutes from "../routes/product.routes.js";

import {
  helmetMiddleware,
  corsMiddleware,
  rateLimiter,
} from "../middlewares/security.js";

import { errorMiddleware } from "../middlewares/error.middleware.js";

export default async function createApp() {
  const app = express();

  /* 1️⃣ SECURITY MIDDLEWARES (STEP-6) */
  app.use(helmetMiddleware);
  app.use(corsMiddleware);
  app.use(rateLimiter);

  /* 2️⃣ BODY PARSER WITH LIMIT */
  app.use(express.json({ limit: "10kb" }));

  logger.info("Security & core middlewares loaded");

  /* 3️⃣ DATABASE */
  await connectDB();
  logger.info("Database connected");

  /* 4️⃣ ROUTES */
  app.use("/users", userRoutes);
  app.use("/products", productRoutes);
  logger.info("Routes mounted");

  /* 5️⃣ ERROR HANDLER (ALWAYS LAST) */
  app.use(errorMiddleware);

  logger.info("App bootstrapped successfully");

  return app;
}
