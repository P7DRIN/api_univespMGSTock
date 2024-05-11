import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    transactionType: {
        type: String,
        required: true,
    },
    saleType: {
        type: String,
        required: false
    },
    prodDescription: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    charge: {
        type: Number,
        required: false
    },
    quantity: {
        type: Number,
        required: false,
    },
    quality: {
        type: String,
        required: true
    },
    postDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    
    
})

export default mongoose.model('Product', productSchema)



    
