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
    
    const { _id, prodType, prodName, prodDescription, prodGender, prodBrand, quality, price, postDate } = req.body;

    if(!prodName){
        return res.status(400).json({error: 'Must inform a product name'})
    }

    const product = new Product ({
        _id: uuid(),
        prodType,
        prodName,
        prodDescription,
        prodGender,
        prodBrand,
        quality,
        price,
        postDate
    })
    try{
        await product.save();
        return res.status(201).json({ messagem: `Product ${prodName} added succesfully`})
    }catch(err){
        res.status(500).json({ error: err.message })
    }

}

async function update(req, res){
    const { prodType, prodName, prodDescription, prodGender, prodBrand, quality, price, postDate } = req.body

    if( !prodName && !price ) {
        return res.status(400).json({ error: "You must inform a product name and/or product price before submit!"})
    }
    
    if(prodName) res.product.productName = prodName
    if(prodType) res.product.prodType = prodType
    if(prodGender) res.product.prodGender = prodGender
    if(prodBrand) res.product.prodBrand = prodBrand
    if(quality) res.product.quality = quality
    if(price) res.product.productPrice = price
    if(prodDescription) res.product.prodDescription = prodDescription
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