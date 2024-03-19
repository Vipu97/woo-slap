const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const isLoggedIn = async (req,res,next) => {
    try{
        const {token} = req.cookies;
        //console.log(token)
        if(!token){
            return res.status(401).json({
                success : false,
                message : "Not Logged In",
            })
        }
        jwt.verify(token,jwtSecret,{},async(err,user) => {
            if(err)
              throw err;
            req.user = user;
            next();
        })
    }catch(err){
        res.json(err.message);
    }
}

module.exports = isLoggedIn;