const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path =require('path')
dotenv.config({path:path.join(__dirname,'config','config.env')})
const products = require('./Routes/Product')
const orders = require('./Routes/order')
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT,()=>{console.log(`The ${process.env.NODE_ENV} is running in ${process.env.PORT}`)})