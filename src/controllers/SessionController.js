
import jwt from 'jsonwebtoken'
import Account from '../models/account.js'
import * as dotenv from 'dotenv'
import bcrypt from 'bcrypt'

dotenv.config()

const SECRET = process.env.APP_SECRET
 
class SessionController {

    async create(req, res){
        // const checkPassword = (user, password) => bcrypt.compare(password, user.password)

        const { email, password } = req.body

        const user = await Account.findOne({ email })
        
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!user){
            return res.status(401).json({error: 'invalid user or password '})
        }
        if(!checkPassword){
            return res.status(401).json({error: 'invalid user or password '})
        }

        return res.json({
            user: {
                email,
            }, 
            token: jwt.sign({ _id }, SECRET, {
                expiresIn: '1d',
            })
        })

    }
}

export default new SessionController();