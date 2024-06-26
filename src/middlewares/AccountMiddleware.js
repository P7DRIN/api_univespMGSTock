import { validate as isUuid } from 'uuid'

import Account from '../models/account.js';

async function accValidateId(req, res, next){
    const { id } = req.params;
    console.log(id)

    if(!isUuid(id)){
        return res.status(400).json({ error: 'invalid ID'})
    }
    try{
        const account = await Account.findById(id);
        console.log(account)
        res.account = account
        if(!account){
            return res.status(404).json({ error: 'account not found!'});
        }
    }catch(err){
        return res.status(500).json({ error: err.message })
    }

    next()
}


export {
    accValidateId,

}