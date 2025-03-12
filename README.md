# CRUD Products Backend

A simple backend for product management built with Fastify and TypeScript.

## Technologies

- **Fastify**
- **TypeScript**
- **UUID**
- **CORS**

## Installation

To install the dependencies, run:

```bash
npm install
```

## Running

To start the development server, use:

```bash
npm run dev
```

The server will run at:  
**http://localhost:3333**

## API Routes

| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| GET    | `/products`        | List all products   |
| GET    | `/products/:id`    | Get a specific product |
| POST   | `/products`        | Create a product    |
| PUT    | `/products/:id`    | Update a product    |
| DELETE | `/products/:id`    | Delete a product    |

## Project Structure

- **`src/server.ts`**: Main server configuration.
- **`src/routes/products.routes.ts`**: Product routes definition.


