// import FirebaseContext from '../../../../client/src/context/FirebaseContext';

const jsonwebtoken = require('jsonwebtoken')
const User = require('../models/user')
// const authToken = useContext(FirebaseContext)

const tokenDecode = (req) => {
    const bearerHeader = req.headers['Authorization']
    if(bearerHeader) {
        const bearer = bearerHeader.split(' ')[1]
        try{
            const tokenDecoded = jsonwebtoken.verify(bearer,process.env.TOKEN_SECRET_KEY)
            console.log(tokenDecoded);
            return tokenDecoded
        }catch {
            return false
        }
    } else {return false}

// const tokenDecoded = authToken.verifyToken()
// console.log(tokenDecoded);
// return tokenDecoded;
} 

exports.verifyToken = async (req,res,next) => {
    const tokenDecoded = tokenDecode(req)
    if(tokenDecoded){
        const user = await User.findById(tokenDecoded.id)
        console.log(user);
        if(!user) 
            return res.status(401).json('Unauthorized')
            req.user = user 
            next() 
    }else {
        res.status(401).json('Unauthorized')
    }
}

// const admin = require('../../../../client/src/firebaseConfig')
// class Middleware {
//     async decodeToken(req,res,next){
//         const token = req.headers.authorization.split(' ')[1];
//         try{
//             const decodeValue = await admin.auth().verifyIdToken(token);
//             console.log(decodeValue);
//             if(decodeValue){
//                 return next();
//             }
//             return res.json({message: 'unauthorized'});
//         }catch (e){
//             return res.json({message: 'internal error'});
//         }
//     }
// }
// module.exports = new Middleware();