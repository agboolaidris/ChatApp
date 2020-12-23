const jwt = require('jsonwebtoken')

const Auth = async(req,res,next)=>{
  try {
     const token = await req.header('token')
       if(!token){
         res.status(400).json({mssg:'no Athentication token'})
     }

      const verified_token = jwt.verify(token,process.env.JWT_SECRECT)
      if(!verified_token){
         res.status(401).json({mssg:'Token verification value, authorization denied '})
     }

     console.log(verified_token)

    }
    catch(err){
        res.status(401).json({mssg:''})
    }
}

module.exports = Auth