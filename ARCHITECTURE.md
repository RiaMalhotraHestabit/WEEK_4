# Backend Architecture

This project follows a layered Node.js architecture.

## Layers
- Routes: HTTP entry points
- Controllers: Request/Response handling
- Services: Business logic
- Repositories: Database access
- Models: Data schemas

## Loaders
- app.js: Loads Express, middlewares, DB, routes
- db.js: Database initialization

## Config
Environment-based configuration using dotenv.

## Logging
Centralized logging using Winston with file persistence.
