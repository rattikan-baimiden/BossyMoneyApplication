const express = require('express');
const auth = require('../middleware/user_jwt');
const router = express.Router();
const Type = require('../models/Type');

router.post('/addType', auth, async (req, res, next) => {
    try{
        const type = await Type.create({income_type_name: req.body.income_type_name, expense_type_name: req.body.expense_type_name, user: req.user.id});
        if(!type) {
            return res.status(400).json({
                success: false,
                msg: 'Something went wrong'
            });
        }

        res.status(200).json({
            success: true,
            type: type,
            msg: 'Successfully added.'
        });

    }catch (error) {
        next(error);
    }
});

router.get('/getType', auth, async(req, res, next) => {
    try {
        const type = await Type.find({user: req.user.id});

        if(!type) {
            return res.status(400).json({ success: false, msg: 'Something error happened'});
        }

        res.status(200).json({ success: true, count: type.length, types: type, msg: 'Successfully fetched'})
    }catch (error) {
        next(error);
    }
});



module.exports = router;