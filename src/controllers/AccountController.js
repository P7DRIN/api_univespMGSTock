import { v4 as uuid } from 'uuid'
import Account from '../models/account.js'
import bcrypt from 'bcrypt'


async function accIndex(req, res){
    try{
        const account = await Account.find()
        return res.status(200).json({ account })
    }catch(err){
        res.status(500).json({ error: err.message })
    }
}


async function accStore(req, res){
    const { username, password } = req.body

    if(!username){
        return res.status(400).json({ error: 'Missing username'})
    }

    const hash = await bcrypt.hash(password, 10)

    const account = new Account({
        _id: uuid(),
        username,
        password: hash,
    })

    try{
        await account.save()
        return res.status(201).json({ message: 'Account added successfully'})
    }catch(err){
        res.status(500).json({ error: err.message })
    }

}


    async function accRemove(req , res){
        try{
            await res.account.deleteOne()
            return res.status(200).json({ message: 'acc deleted successfully'})
        } catch(err){
            return res.status(500).json({ error: err.message })
        }
    }


export { accIndex, accStore, accRemove }