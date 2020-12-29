const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

//init mongoose
mongoose.connect('mongodb://localhost:27017/datastore',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.once('open',()=>{
   console.log('connected successful...........')
})
.on('error',()=>{
    console.log('error occur during the connection to database')
})

// init express
const app = express()
app.use(cors())
 
//body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//router
app.use('/user', require('./Route/Auth_Route'))

const PORT = process.env.PORT ||5000;
app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`)
})