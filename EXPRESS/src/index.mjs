import express from "express";

const app=express();

const PORT =3000;

const users=[
    {id:1,user_name:"kavineswar"},
    {id:2,user_name:"kavin"},
    {id:3,user_name:"eswar"},
    {id:4,user_name:"kavines"},
    {id:5,user_name:"ineswar"},
]



app.get("/",(req,res)=>{
    res.send({msg:"Kavineswar"})
})



app.get("/api/users",(req,res)=>{
    res.send(users)
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

app.listen(PORT,()=>{
    console.log(`APP is running on ${PORT}`);
})