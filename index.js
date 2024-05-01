const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const drawingRoutes = require('./routes/drawingRoutes');

const app = express();
const port = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.MONGODB_DBNAME
}).then(() => {
  console.log('MongoDB connected successfully.');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/drawings', drawingRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});