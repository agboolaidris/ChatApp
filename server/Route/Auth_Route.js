const express = require('express')
const User = require('../Module/SignUp_module')
const bcrypt = require('bcryptjs')

const Route = express.Router()
const jwt = require('jsonwebtoken')
const Auth = require('../Middleware/Auth')

Route.get('/',(req, res)=>{
    res.json([{}])
})

Route.post('/register',async(req,res)=>{
  try{ 
   const {userName, email, password } = req.body
    const user_email = await User.findOne({email:email})
  if(user_email){
    return res.json({mssg:'the email have already exist'})
  }

  const user_userName = await User.findOne({userName:userName}) 
  if(user_userName){
    return res.json({mssg:'the username have already exist'})
  }

  const salt =await bcrypt.genSalt()
  const genPassword = await bcrypt.hash(password, salt)
  console.log(genPassword)

  const new_user = new User({
     userName:userName,
     password:genPassword,
     email:email
  })
 await new_user.save()
  .then(()=>{
     res.json({mssg:'user save!'})
   })
   .catch((err)=>{
      res.json({mssg:err})
   })

 }
catch(err){
     res.json({err})
 }




})

Route.post('/login',async(req, res)=>{

   try{
     const {email, password} = req.body
     const findUser = await User.findOne({email:email})
     if(!findUser){
       res.status(400).json({mssg:'no such account have been created yet'})
     }
       
     const isMatch = await bcrypt.compare(password, findUser.password)
     if(!isMatch){
       res.status(400).json({mssg:'incorrect password'})
     }

     const token = jwt.sign({id:findUser._id}, process.env.JWT_SECRET)
     res.json({
       token,
       user:{
         email:findUser.email,
         userName:findUser.userName
       }
     })
   }
   catch(err){
     res.status(400).json({mssg:err.message})
   }
})

Route.delete('/delete',Auth,async(req,res)=>{

})






module.exports=Route