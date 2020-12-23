const mongoose = require('mongoose')
const schema = mongoose.Schema


const new_schema = new schema({
    userName:{type:String, unique:true, required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true, unique:true}
})

const User = mongoose.model('User',new_schema)

module.exports = User