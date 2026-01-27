import express from "express";
import logger from "../utils/logger.js";
import dbLoader from "./db.js";

export default async function appLoader() {
  const app = express();

  // Middlewares
  app.use(express.json());
  logger.info("Middlewares loaded");

  // Database
  await dbLoader();

  // Routes (empty for now)
  logger.info("Routes mounted: 0 endpoints");

  return app;
}
