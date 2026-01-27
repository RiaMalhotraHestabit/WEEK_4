import logger from "../utils/logger.js";
import config from "../config/index.js";

export default async function dbLoader() {
  // simulate DB connection
  await new Promise((resolve) => setTimeout(resolve, 500));

  logger.info(`Database connected at ${config.dbUrl}`);
}
