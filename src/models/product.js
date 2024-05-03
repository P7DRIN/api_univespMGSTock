import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    prodType: {
        type: String,
        required: true,
    },
    prodName: {
        type: String,
        required: true
    },
    prodDescription: {
        type: String,
        required: true,
    },
    prodGender: {
        type: String,
        required: false
    },
    prodBrand: {
        type: String,
        required: false,
    },
    quality: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    postDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    
    
})

export default mongoose.model('Product', productSchema)



    
