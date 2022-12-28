const express = require('express');
const auth = require('../middleware/user_jwt');
const router = express.Router();
const Saving = require('../models/Saving');

router.post('/addSaving', auth, async (req, res, next) => {
    try{
        const saving = await Saving.create({
            // type: req.type.id, 
            amount: req.body.amount, 
            start_date: req.body.start_date,
            user: req.user.id
        });
        if (!saving) {
            return res.status(400).json({
                success: false,
                msg: 'Something went wrong'
            });
        }

        res.status(200).json({
            success: true,
            saving: saving,
            msg: 'Successfully added.'
        });

    }catch (error) {
        next(error);
    }
});

router.get('/getSaving', auth, async(req, res, next) =>{
    try {
        const saving = await Saving.find({user: req.user.id});

        if(!saving) {
            return res.status(400).json({ success: false, msg: 'Something error happened' });
        }

        res.status(200).json({ success: true, savings: saving, msg: 'Successfully fetched'});
    }catch (error) {
        next(error);
    }
});

module.exports = router;