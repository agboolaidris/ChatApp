const mongoose = require('mongoose')
const schema = mongoose.Schema


const new_schema = new schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    userName:{type:String, unique:true, required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true, unique:true}
})

const Auth = mongoose.model('Auth',new_schema)

module.exports = Auth