const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
    income_type_name: {
        type: String,
        required: true 
    },

    expense_type_name: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    }
});

module.exports = Type = mongoose.model('type', typeSchema);