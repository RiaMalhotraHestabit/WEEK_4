import express from "express";
import connectDB from "./db.js";
import logger from "../utils/logger.js";

export default async function createApp() {
  const app = express();

  app.use(express.json());

  await connectDB();

  logger.info("✅ Middlewares loaded");
  logger.info(" App bootstrapped");

  return app;
}
