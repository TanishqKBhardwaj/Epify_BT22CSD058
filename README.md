# 📦 Inventory Management System - Backend API

A complete backend application for managing users and product inventory . Built using **Node.js**, **Express.js**, and **MongoDB**, with **JWT-based authentication** and support for automated testing via a Python script.

---

## 🚀 Features

- ✅ User authentication (JWT)
- ✅ Product addition
- ✅ Product quantity update
- ✅ Get all products (with pagination)
- ✅ RESTful API with proper error handling
- ✅ MongoDB integration via Mongoose
- ✅ Swagger/OpenAPI documentation
- ✅ Compatible with test script (`test_api.py`)

---

## 📁 Project Structure

inventory-api/
├── controllers/ # Logic for routes
├── models/ # Mongoose schemas
├── routes/ # Express route files
├── middlewares/ # JWT auth middleware
├── app.js # Main app setup
├── server.js # Entry point
├── .env # Environment variables
├── README.md # This file
└── test.py # Provided script for testing APIs
└── test_api_py_result.png # test.py result ss.


---

## 🛠️ Getting Started

### 1. Clone the Repository

### 2.Install dependencies
  npm install

### 3.Create a .env File
I have already pushed it ,use that.

### 4.For starting the server 
  Write nodemon server.js