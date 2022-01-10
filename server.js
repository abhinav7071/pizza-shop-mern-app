const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/config');
const dotenv = require('dotenv');
const { bgMagenta } = require('colors');
require('colors');
const path = require("path");


const app = express();

//config dotnev
dotenv.config()

//connect mongodb
connectDB();


//middlewares
app.use(express.json());//browser json ko ni samjhta, vo xml smjhta h,islyejson data jo ayega use parse krenge,hume json us ekrne h
app.use(morgan('dev')); //morgan ko as a dev krenge 


//route
app.use('/api/pizzas',require('./routes/pizzaRoute'));
app.use('/api/users',require('./routes/userRoute'));
app.use('/api/orders',require('./routes/orderRoute'));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  } else {
    app.get('/',(req,res)=>{
        res.send("<h1>Hello worldd</h1>");
    });
  }

//PORT
const PORT = process.env.PORT || 5400;
app.listen(PORT,() => {
    console.log(`"Pizza backend run on ${process.env.NODE_ENV} mode on ${PORT}`,bgMagenta.white);
})