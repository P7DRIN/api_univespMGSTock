
import jwt from 'jsonwebtoken'
import Account from '../models/account.js'
import * as dotenv from 'dotenv'
import bcrypt from 'bcrypt'

dotenv.config()

const SECRET = process.env.APP_SECRET
 
class SessionController {

    async create(req, res){
        // const checkPassword = (user, password) => bcrypt.compare(password, user.password)
        
        const { username, password } = req.body
    
        const account = await Account.findOne({ username })
        
        const checkPassword = await bcrypt.compare(password, account.password);
        
        if(!checkPassword){
            return res.status(401).json({error: 'invalid user or password '})
        }
        if(!account){
            return res.status(401).json({error: 'invalid user or password '})
        }

        const { _id } = account

        return res.json({
            account: {
                username,
            }, 
            token: jwt.sign({ _id }, SECRET, {
                expiresIn: '1d',
            })
        })

    }
}

export default new SessionController();