import appLoader from "./loaders/app.js";
import config from "./config/index.js";
import logger from "./utils/logger.js";

async function startServer() {
  const app = await appLoader();

  app.listen(config.port, () => {
    logger.info(`Server started on port ${config.port}`);
  });
}

startServer();
