const express = require('express');
const auth = require('../middleware/user_jwt');
const router = express.Router();
const Finance = require('../models/Finance');

router.post('/addFinance', auth, async (req, res, next) => {
    try{
        const finance = await Finance.create({
            income_type_name: req.body.income_type_name, 
            expense_type_name: req.body.expense_type_name,
            amount: req.body.amount, 
            create_date: req.body.create_date,
            update_date: req.body.update_date,
            user: req.user.id
        });
        if (!finance) {
            return res.status(400).json({
                success: false,
                msg: 'Something went wrong'
            });
        }

        res.status(200).json({
            success: true,
            finance: finance,
            msg: 'Successfully added.'
        });

    }catch (error) {
        next(error);
    }
});

router.get('/getFinance', auth, async(req, res, next) =>{
    try {
        const finance = await Finance.find({user: req.user.id});

        if(!finance) {
            return res.status(400).json({ success: false, msg: 'Something error happened' });
        }

        res.status(200).json({ success: true, finances: finance, msg: 'Successfully fetched'});
    }catch (error) {
        next(error);
    }
});


module.exports = router;