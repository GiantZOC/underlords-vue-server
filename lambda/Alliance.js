const mongoose = require('mongoose');

const AllianceSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    title: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    heroes: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Hero'
    }],
    alliance_bonus: [{
        unit_count: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    }],
    alliance_max_bonus_count: {
        type: Number,
        required: true
    },
    height: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Alliance', AllianceSchema);