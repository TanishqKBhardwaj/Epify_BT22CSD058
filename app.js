const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', authRoutes);
app.use('/products', productRoutes);

module.exports = app;
