const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys');

// Create Data Models
require('./models/Recipe');
require('./models/Ingredient');

// Apply promise to mongoose
mongoose.Promise = Promise;

// Connect to MongoDB servergs
mongoose.connect(keys.mongoURI);

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
require('./routes/indexRoute')(app);
require('./routes/recipeRoutes')(app);

// Port number
const PORT = process.env.PORT || 5000;
app.listen(PORT);