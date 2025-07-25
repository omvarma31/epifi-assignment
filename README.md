# Epifi Assignment - Inventory Management Tool

This repository contains a full-stack inventory management application for a small business. It features user authentication, product management, and inventory tracking, with a React frontend and a Node.js/Express backend.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Architecture & Flow](#architecture--flow)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [License](#license)

---

## Project Overview
This app allows users to register, log in, and manage products in an inventory. Features include:
- User authentication (JWT-based)
- Add new products
- Update product quantity
- View paginated product list
- OpenAPI/Swagger documentation
- Postman collection for API testing

---

## Architecture & Flow
1. **User Registration & Login**
   - Users register and log in via `/signup` and `/login` endpoints.
   - On login, a JWT token is issued and must be sent in the `Authorization` header for protected routes.
2. **Product Management**
   - Authenticated users can add products, update product quantities, and view the product list.
   - All product-related endpoints require a valid JWT.
3. **Frontend**
   - React app interacts with backend via REST APIs.
   - Auth state is managed via cookies or local storage.

---

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
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

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend` directory with the following variable:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```
   - Adjust the URL if your backend runs elsewhere.
4. Start the frontend app:
   ```bash
   npm start
   ```
   The frontend will run at [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

### Backend
- `PORT` - Port for the backend server (default: 5000)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for signing JWT tokens

### Frontend
- `REACT_APP_API_URL` - Base URL for backend API (e.g., http://localhost:5000/api)

---

## API Documentation
- The OpenAPI/Swagger spec is in `server/swagger.yaml`.
- Import this file into [Swagger Editor](https://editor.swagger.io/) to view and test the API.
- A sample Postman collection is provided in `server/postman_collection.json`.

---

## Testing
- Use the provided Python script or Postman collection to test the API endpoints.
- Ensure MongoDB is running and environment variables are set before testing.

---

## API Endpoints & Schemas

### Authentication

#### Register User
- **Endpoint:** `POST /signup`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Responses:**
  - `201 Created`: User registered successfully
  - `409 Conflict`: Username already exists
  - `400 Bad Request`: Missing fields

#### Login
- **Endpoint:** `POST /login`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Responses:**
  - `200 OK`: JWT token and cookie returned
  - `401 Unauthorized`: Invalid credentials
  - `400 Bad Request`: Missing fields

### Product Management

#### Add Product
- **Endpoint:** `POST /products`
- **Auth:** Bearer JWT required
- **Request Body:**
  ```json
  {
    "name": "string",
    "type": "string",
    "sku": "string",
    "image_url": "string",
    "description": "string",
    "quantity": integer,
    "price": number
  }
  ```
- **Responses:**
  - `201 Created`: Product added successfully
  - `409 Conflict`: SKU already exists
  - `400 Bad Request`: Missing fields

#### Update Product Quantity
- **Endpoint:** `PUT /products/{id}/quantity`
- **Auth:** Bearer JWT required
- **Request Body:**
  ```json
  {
    "quantity": integer
  }
  ```
- **Responses:**
  - `200 OK`: Product quantity updated
  - `404 Not Found`: Product not found
  - `400 Bad Request`: Missing quantity

#### Get Products (Paginated)
- **Endpoint:** `GET /products`
- **Auth:** Bearer JWT required
- **Query Params:**
  - `page` (integer, optional): Page number (default: 1)
  - `limit` (integer, optional): Page size (default: 10)
- **Response:**
  ```json
  {
    "page": 1,
    "limit": 10,
    "total": 100,
    "products": [
      {
        "_id": "string",
        "name": "string",
        "type": "string",
        "sku": "string",
        "image_url": "string",
        "description": "string",
        "quantity": integer,
        "price": number,
        "createdAt": "date",
        "updatedAt": "date"
      }
    ]
  }
  ```

---

## Database Schemas

### User
| Field     | Type   | Required | Unique | Description         |
|-----------|--------|----------|--------|---------------------|
| username  | String | Yes      | Yes    | User's login name   |
| password  | String | Yes      | No     | Hashed password     |

### Product
| Field       | Type   | Required | Unique | Description                |
|-------------|--------|----------|--------|----------------------------|
| name        | String | Yes      | No     | Product name               |
| type        | String | Yes      | No     | Product type/category      |
| sku         | String | Yes      | Yes    | Stock Keeping Unit         |
| image_url   | String | No       | No     | Product image URL          |
| description | String | No       | No     | Product description        |
| quantity    | Number | Yes      | No     | Inventory quantity (>= 0)  |
| price       | Number | Yes      | No     | Product price (>= 0)       |
| createdAt   | Date   | Auto     | No     | Creation timestamp         |
| updatedAt   | Date   | Auto     | No     | Last update timestamp      |

---

## Project Structure
```
.
├── frontend/   # React + Tailwind CSS frontend
└── server/     # Node.js + Express backend
```
- `frontend/README.md` - Frontend-specific instructions
- `server/README.md` - Backend-specific instructions

---

## License
MIT 