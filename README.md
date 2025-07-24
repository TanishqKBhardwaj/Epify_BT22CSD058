
# 📦 Inventory Management System - Backend API

A complete backend application for managing users and product inventory. Built using **Node.js**, **Express.js**, and **MongoDB**, with **JWT-based authentication** and support for automated testing via a Python script.

---

## 🚀 Features

- ✅ User authentication (JWT)
- ✅ Product addition
- ✅ Product quantity update
- ✅ Get all products (with pagination)
- ✅ RESTful API with proper error handling
- ✅ MongoDB integration via Mongoose
- ✅ Fully documented API in this README
- ✅ Compatible with test script (`test.py`)

---

## 📁 Project Structure

```
inventory-api/
├── controllers/           # Route logic
├── models/                # Mongoose schemas
├── routes/                # Express route definitions
├── middlewares/           # JWT auth middleware
├── app.js                 # App configuration
├── server.js              # Entry point
├── .env                   # Environment variables
├── README.md              # This file
├── test.py                # Python script for testing APIs
└── test_api_py_result.png # Screenshot of test.py results
```

---

## 🛠️ Getting Started

### 1. Clone the Repository


### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
A `.env` file is already pushed. It contains:
```
PORT=8080
MONGO_URI=mongodb://localhost:27017/ims
JWT_SECRET=your_jwt_secret
```

> 🔐 You can change the `JWT_SECRET` value to a secure one if needed.

### 4. Start the Server
```bash
npx nodemon server.js
```

> Server will run at `http://localhost:8080`

---

## 🔐 Authentication Instructions

1. First, hit the login route with these credentials:
   - **Username:** `puja`
   - **Password:** `mypassword`

2. Copy the returned **JWT token**.

3. For all product-related routes, include this header:
```
Authorization: Bearer <your_token>
```

---

## 📄 API Documentation

### ✅ 1. Register User
> Use only for initial testing.

- **Method:** `POST`
- **Endpoint:** `/login/register`
- **Auth Required:** ❌

#### 🔸 Request Body:
```json
{
  "username": "puja",
  "password": "mypassword"
}
```

#### 🔸 Response:
```json
{ "message": "User created" }
```

---

### ✅ 2. Login
- **Method:** `POST`
- **Endpoint:** `/login`
- **Auth Required:** ❌

#### 🔸 Request Body:
```json
{
  "username": "puja",
  "password": "mypassword"
}
```

#### 🔸 Response:
```json
{
  "access_token": "<JWT_TOKEN>"
}
```

---

### ✅ 3. Add Product
- **Method:** `POST`
- **Endpoint:** `/products`
- **Auth Required:** ✅

#### 🔸 Headers:
```
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

#### 🔸 Request Body:
```json
{
  "name": "Phone",
  "type": "Electronics",
  "sku": "PHN-001",
  "image_url": "https://example.com/phone.jpg",
  "description": "Latest Phone",
  "quantity": 5,
  "price": 999.99
}
```

#### 🔸 Response:
```json
{
  "product_id": "<MongoDB ObjectId>"
}
```

---

### ✅ 4. Update Product Quantity
- **Method:** `PUT`
- **Endpoint:** `/products/:id/quantity`
- **Auth Required:** ✅

#### 🔸 Request Body:
```json
{
  "quantity": 15
}
```

#### 🔸 Response:
```json
{
  "_id": "...",
  "name": "...",
  "quantity": 15,
  ...
}
```

---

### ✅ 5. Get All Products (Paginated)
- **Method:** `GET`
- **Endpoint:** `/products?page=1&limit=2`
- **Auth Required:** ✅

#### 🔸 Response:
```json
[
  {
    "_id": "...",
    "name": "Phone",
    "sku": "PHN-001",
    "quantity": 15,
    ...
  },
  ...
]
```

---

## 🧪 Automated Testing (Optional)

### 1. Install Python + `requests`
```bash
pip install requests
```

### 2. Run the Script
```bash
python test.py
```

---

## 📌 Notes

- Always use a unique `sku` while adding a product.
- Token expires in 1 hour. Regenerate it via `/login` if needed.
- You can add more fields to product schema if desired.

---

