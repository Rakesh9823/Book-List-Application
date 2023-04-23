const jwt = require('jsonwebtoken');
const secret = "BOOKKEY";

const auth = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        console.log(token)
        if(token){
            req.userID = jwt.verify(token, secret);
            next();
        }

    }
    catch(err){
        console.log(err);
    }
}