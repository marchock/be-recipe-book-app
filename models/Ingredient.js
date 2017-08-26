const mongoose = require('mongoose');
const { Schema } = mongoose;

const IngredientSchema = new Schema({
    ingredient: String,
    amount: String,
});

mongoose.model('ingredient', IngredientSchema);