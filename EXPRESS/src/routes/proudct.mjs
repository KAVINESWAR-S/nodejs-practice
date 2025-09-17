import { Router } from "express";

const router =Router();


const Products=[
    {id:1,product_name:"iphone 16"},
    {id:2,product_name:"samsung s24"},
    {id:3,product_name:"oneplus 11r"},
    {id:4,product_name:"iphone 17"},
    {id:5,product_name:"infinix s6"}
]

router.get("/api/products",(req,res)=>{
    const {query:{filter,value}}=req;
    console.log(filter,value);
    if(filter && value){
        return res.send(Products.filter(((product)=>product[filter].toLowerCase().includes(value))))
    }
    res.send(Products)
})






router.get("/api/products/:id",(req,res)=>{
    //console.log(req.params);
    const id=parseInt(req.params.id);
    if(isNaN(id)){
       return res.status(400).send({msg:"BAD request invalid id"});
    }
    const product=Products.find((product)=>product.id===id)
    console.log(product)
    if(product){
        return res.send(product);
    }
    return res.status(400).send({msg:"user not found"})
})

export default router;