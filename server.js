const express = require('express');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json({}));
app.use(express.json({
    extended: true
}));
// use dotenv files
dotenv.config({
    path: './config/config.env'
});

connectDB();


app.use('/api/bossymoney/auth', require('./routes/user'));
app.use('/api/bossymoney', require('./routes/type'));
app.use('/api/bossymoney', require('./routes/finance'));
app.use('/api/bossymoney', require('./routes/saving'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, 
    console.log(`Server running on port: ${PORT}`.underline.bold)
    
);