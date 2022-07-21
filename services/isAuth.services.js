import 'dotenv/config'
import  jwt  from 'jsonwebtoken'

async function isAuth (req, res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.status(401).send({
            message: 'Must be authenticated with a token!'
        })
    } else {  
        jwt.verify 
        if (token === process.env.JSON_WEB_TOKEN) {
            return next()
        } else {
            return res.status(401).send ({
                message: 'Json web token is invalid!'
            })
        }
    }
}

export { isAuth }