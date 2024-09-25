const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sharedRoutes = require('../routes/v1/sharedRoutes');

// loads the environment variables from the env file
dotenv.config();

const app = express();


// middleware
const corsOption = {};
app.use(cors(corsOption));
app.use(express.json());

// routes
app.use('/v1/shared', sharedRoutes);

module.exports = app;
