const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//mongoose connection
mongoose.connect('mongodb://localhost:27017/info')

mongoose.connection.once('open',()=>{
    console.log('the connection is opening')
}).on('error',()=>{
    console.log('error occur during the connection into the database ')
})

//express init
const app = express()
app.use(cors())

//bodyparser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Route
 app.use('/user', require('./Route/Auth_Route'))
  //app.use('/', require('./Route/Auth_Route'))

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('connected sucssd]ful  ..........')
})