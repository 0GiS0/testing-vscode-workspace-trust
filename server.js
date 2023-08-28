// Load environment variables
require('dotenv').config();

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const routes = require('./routes/api');

// Set up express app
const app = express();

console.log(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017/${process.env.DB_COLLECTION}`)

// Connect to MongoDB
// mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017/${process.env.DB_COLLECTION}`, { useNewUrlParser: true });
mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/${process.env.DB_COLLECTION}`,
    {
        authSource: "admin",
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        useNewUrlParser: true
    }
);

mongoose.Promise = global.Promise;

// Middleware
app.use(cors());

// Serve static files
app.use(express.static('public'));

// Parse incoming requests
app.use(bodyParser.json());

// Initialize routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
});

// Listen for requests
app.listen(process.env.port || 3000, () => {
    console.log('Now listening for requests at http://localhost:3000');
});