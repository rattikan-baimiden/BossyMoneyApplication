const mongoose = require('mongoose');

const savingSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },

    start_date: {
        type: Date,
        require: true 
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    }
});

module.exports = Saving = mongoose.model('saving', savingSchema);