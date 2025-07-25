# Backend - Inventory Management API

This is the backend server for the Inventory Management Tool, built with Node.js, Express, and MongoDB.

## Features
- User registration and login (JWT-based authentication)
- Add, update, and list products
- Paginated product listing
- OpenAPI/Swagger documentation
- Postman collection for API testing

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm (v6 or above)
- MongoDB (local or cloud instance)

### Installation
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/inventorydb
   JWT_SECRET=your_jwt_secret_here
   ```
   - Adjust `MONGO_URI` as needed for your MongoDB instance.
   - Set a strong value for `JWT_SECRET`.
4. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run at [http://localhost:5000](http://localhost:5000)

## Environment Variables
- `PORT` - Port for the backend server (default: 5000)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for signing JWT tokens

## API Endpoints
- `POST /signup` — User registration
- `POST /login` — User login (returns JWT)
- `POST /products` — Add product (auth required)
- `PUT /products/:id/quantity` — Update product quantity (auth required)
- `GET /products` — Get products (paginated, auth required)

## API Documentation
- The OpenAPI/Swagger spec is in `swagger.yaml`.
- Import this file into [Swagger Editor](https://editor.swagger.io/) to view and test the API.
- A sample Postman collection is provided in `postman_collection.json`.

## License
MIT 