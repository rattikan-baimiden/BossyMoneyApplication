const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
    income_type_name: {
        type: String,
        ref: 'type'
    },

    expense_type_name: {
        type: String,
        ref: 'type'
    },

    amount: {
        type: Number,
        required: true
    },

    create_date: {
        type: Date,
        default: Date.now
    },

    update_date: {
        type: Date,
        default: Date.now
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    }
});

module.exports = Finance = mongoose.model('finance', financeSchema);