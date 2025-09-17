import express from "express";
import userRouter from './routes/users.mjs'
import productRouter from './routes/proudct.mjs'

const app=express();

app.use(express.json());

app.use(productRouter)

app.use(userRouter)


const PORT =3000;




app.listen(PORT,()=>{
    console.log(`APP is running on ${PORT}`);
})