import mongoose from 'mongoose'


const AccountSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    
})

export default mongoose.model("Account", AccountSchema)