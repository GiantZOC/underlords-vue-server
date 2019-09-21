const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tier: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    flavortext: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Item', ItemSchema);