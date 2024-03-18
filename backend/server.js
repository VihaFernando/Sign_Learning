const express = require('express');
const app = express();
const port = 3001;

// Import routes
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

// Use routes
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});