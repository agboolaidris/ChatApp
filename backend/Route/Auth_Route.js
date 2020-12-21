const express = require('express')
const Auth = require('../Module/SignUp_module')
const Route = express.Router()

Route.get('/',(req, res)=>{
    res.json([{}])
})

Route.post('/',(req,res)=>{
     const new_users = new Auth({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password,
      })
new_users.save()
.then(()=>{
   res.json({mssg:'user saved'})
}).catch((err)=>{
   res.json({mssg:err})
})
})






module.exports=Route