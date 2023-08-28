// Ninja model

// Import mongoose
const mongoose = require('mongoose');

// Create a schema
const Schema = mongoose.Schema;

// Create a ninja schema and model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
    // Add in geo location
});

// Create a model
const Ninja = mongoose.model('ninja', NinjaSchema);

// Export the model
module.exports = Ninja;