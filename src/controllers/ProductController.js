import Product from "../models/product.js";
import { v4 as uuid } from 'uuid'


async function index(req, res){

    try{
        const products = await Product.find()
        return res.status(200).json({ products })
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

async function store(req, res){
    
    const { _id, transactionType, saleType, prodDescription, price, charge, quantity, quality, postDate } = req.body;

    if(!prodDescription){
        return res.status(400).json({error: 'Must inform a product description'})
    }

    const product = new Product ({
        _id: uuid(),
        transactionType,
        saleType,
        prodDescription,
        price,
        charge,
        quantity,
        quality,
        postDate
    })
    try{
        await product.save();
        return res.status(201).json({ messagem: `Product ${prodDescription} added succesfully`})
    }catch(err){
        res.status(500).json({ error: err.message })
    }

}

async function update(req, res){
    const { _id, transactionType, saleType, prodDescription, price, charge, quantity, quality, postDate } = req.body

    if( !prodDescription && price ) {
        return res.status(400).json({ error: "You must inform a product description and/or product price before submit!"})
    }
    
    if(transactionType) res.product.transactionType = transactionType
    if(saleType) res.product.saleType = saleType
    if(prodDescription) res.product.prodDescription = prodDescription
    if(price) res.product.price = price
    if(charge) res.product.charge = charge
    if(quantity) res.product.productquantity = quantity
    if(quality) res.product.quality = quality
    if(postDate) res.product.postDate = postDate

    try{
        await res.product.save()
        return res.status(200).json({ message: `${productName} updated successfully`})
    }catch(err){
        res.status(500).json({ err: err.message})
    }

}

async function remove(request, response){

    try{
        await response.product.deleteOne();
        return response.status(200).json({ message: 'Product deleted sucessfully' })
    }catch(err){
        return response.status(500).json({ error: err.message }) 
        
    }
}

export {
    index,
    store,
    remove, 
    update
}