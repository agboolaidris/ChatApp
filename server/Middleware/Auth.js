const jwt = require('jsonwebtoken')

const Auth = (req,res,next)=>{
  try {
    
     const token =  req.header('authorization')
       if(!token){
         res.status(401).json({mssg:'no Athentication token'})
     }
     console.log(token)

      const verified_token = jwt.verify(token,process.env.JWT_SECRET)
       
      if(!verified_token){
     res.status(401).json({mssg:'Token verification value, authorization denied '})
     }
    console.log(verified_token)
     res.json({mssg:'save'})

    }
    catch(err){
        res.status(401).json({mssg:err.message})
    }
}

module.exports = Auth