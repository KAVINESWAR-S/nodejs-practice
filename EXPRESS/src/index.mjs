import express from "express";

const app=express();

const PORT =3000;

const users=[
    {id:1,user_name:"Kavineswar"},
    {id:2,user_name:"kavin"},
    {id:3,user_name:"eswar"},
    {id:4,user_name:"kavines"},
    {id:5,user_name:"ineswar"},
]

const Products=[
    {id:1,product_name:"iphone 16"},
    {id:2,product_name:"samsung s24"},
    {id:3,product_name:"oneplus 11r"},
    {id:4,product_name:"iphone 17"},
    {id:5,product_name:"infinix s6"}
]


app.get("/",(req,res)=>{
    res.send({msg:"Kavineswar"})
})



app.get("/api/users",(req,res)=>{
    const {query:{filter,value}}=req;
    console.log(filter,value);
    if(filter && value){
        return res.send(users.filter(((user)=>user[filter].toLowerCase().includes(value))))
    }
    res.send(users)
})

app.get("/api/products",(req,res)=>{
    const {query:{filter,value}}=req;
    console.log(filter,value);
    if(filter && value){
        return res.send(Products.filter(((product)=>product[filter].toLowerCase().includes(value))))
    }
    res.send(Products)
})



app.get("/api/users/:id",(req,res)=>{
    //console.log(req.params);
    const id=parseInt(req.params.id);
    if(isNaN(id)){
       return res.status(400).send({msg:"BAD request invalid id"});
    }
    const user=users.find((user)=>user.id===id)
    console.log(user)
    if(user){
        return res.send(user);
    }
    return res.status(400).send({msg:"user not found"})
})


app.get("/api/products/:id",(req,res)=>{
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

app.use(express.json());

app.post("/api/users",(req,res)=>{
    console.log(req.body);
    const {body}=req;
    const newUser ={id:users[users.length-1].id+1, ...body}
    users.push(newUser);
    return res.status(201).send(newUser);
})

// put - update(complete request)

app.put("/api/users/:id",(req,res)=>{
    console.log(req);
    const id=parseInt(req.params.id);
    if(isNaN(id)){
       return res.status(400).send({msg:"BAD request invalid id"});
    }
    const userIndex=users.findIndex((user)=>user.id===id)
    if(userIndex===-1){
        return res.status(400).send({msg:"user not found"})
    }
    const {body}=req;
    users[userIndex] = {id:id,...body};
    return res.status(200).send({msg:"user updated"});
    
})

app.listen(PORT,()=>{
    console.log(`APP is running on ${PORT}`);
})