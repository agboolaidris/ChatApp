const jwt = require('jsonwebtoken')

const Auth = (req,res,next)=>{
  try {
    
     const token =  req.header('token')

       if(!token){
         res.status(401).json({mssg:'no Athentication token'})
      }

      const verified_token = jwt.verify(token, process.env.JWT_SECRET)
      
      if(!verified_token){
     res.status(401).json({mssg:'Token verification value, authorization denied '})
     }

    req.user=verified_token.id
     next()
    }
    catch(err){
        res.status(401).json({mssg:err.message})
    }
}

module.exports = Auth