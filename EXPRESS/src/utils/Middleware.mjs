import {users} from './const.mjs'


export const getUserIndexById=(req,res,next)=>{
    const id=parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(400).send({msg:"BAD request invalid id"});
    }
    const userIndex=users.findIndex((user)=>user.id===id)
    if(userIndex===-1){
        return res.status(400).send({msg:"user not found"})
    }
    req.userIndex=userIndex
    next();
}
