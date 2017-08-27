const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        default: []
    }
});

mongoose.model('recipe', RecipeSchema);