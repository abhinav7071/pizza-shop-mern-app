const mongoose = require('mongoose');
require('colors');
const { bgCyan } = require('colors');
const { bgRed } = require('colors');

const connectDB = async() => {
    try{
        const url = process.env.MONGO_URI;
        const conn = await mongoose.connect(url,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log(`Mongodb database connected..!! ${conn.connection.host}`.bgRed.white);
    } catch(error){
        console.log(`error..: ${error.message}`,bgRed.white);
    }
}

module.exports = connectDB;


