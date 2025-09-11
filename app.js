const exp=require('express');
const morgan =require('morgan')

const app=exp();

app.listen(3000);


app.use(morgan('dev'));


app.use((req,res,next)=>{
    console.log('Request recived')
    // console.log(req.host);
    // console.log(req.path);
    // console.log(res.method);
    next()
})




app.get('/',(req,res)=>{ 
    //res.status(200).send('<h1>Kavineswar</h1>');
    res.sendFile('./docs/index.html',{root:__dirname});
});

app.get('/join',(req,res)=>{
    //res.status(200).send('<h1>Kavineswar</h1>');
    res.sendFile('./docs/join.html',{root:__dirname});
})

app.use((req,res,next)=>{
    console.log('middleware 2');
    next();
})

app.get('/joinus',(req,res)=>{
    //res.status(200).send('<h1>Kavineswar</h1>');
    res.redirect('/join');
})

app.use((req,res)=>{
    res.status(404).sendFile('./docs/notFound.html',{root:__dirname})
})