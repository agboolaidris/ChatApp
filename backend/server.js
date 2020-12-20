const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
mongoose.connect('mongodb://localhost:27017/auth')


// init express
const app = express()

// cross origin resources sharing
app.use(cors())

//bodyparse
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.listen(5000)