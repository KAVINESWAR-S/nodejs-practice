import {Router} from 'express'
import {users} from '../utils/const.mjs'
import {validationResult,matchedData,checkSchema} from 'express-validator'
import {createUserValidationSchema} from '../utils/validationSchemas.mjs'
import { getUserIndexById } from '../utils/Middleware.mjs'

const router =Router();




router.get("/api/users",(req,res)=>{
    const {query:{filter,value}}=req;
    console.log(filter,value);
    if(filter && value){
        return res.send(users.filter(((user)=>user[filter].toLowerCase().includes(value))))
    }
    res.send(users)
})

router.get("/api/users/:id",(req,res)=>{
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

router.post("/api/users",
    checkSchema(createUserValidationSchema),
    (req,res)=>{
    const result =validationResult(req);

    if(!result.isEmpty()){
        return res.status(400).send({error:result.array()})
    }
    //console.log(result)
    //console.log(req['express-validator#contexts']);
    const body=matchedData(req);
    const newUser ={id:users[users.length-1].id+1, ...body}
    users.push(newUser);
    return res.status(201).send(newUser);
})


router.put("/api/users/:id",getUserIndexById,(req,res)=>{
    const userIndex=req.userIndex
    const {body}=req;
    users[userIndex] = {id:id,...body};
    return res.status(200).send({msg:"user updated"});
    
})


router.patch("/api/users/:id",getUserIndexById,(req,res)=>{
    const userIndex=req.userIndex;
    const {body}=req;
    users[userIndex]={
        ...users[userIndex],
        ...body
    }
    console.log(body);
    return res.sendStatus(200);
});


router.delete("/api/users/:id",getUserIndexById,(req,res)=>{
    const userIndex = req.userIndex;
    console.log(userIndex)
    users.splice(userIndex,1);
    res.sendStatus(200)
})

export default router;