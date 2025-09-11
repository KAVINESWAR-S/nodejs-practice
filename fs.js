const fs = require('fs')

// if(!fs.existsSync('./docs'))
// {
//     fs.mkdir('./docs',(err)=>{
//         if(err){
//             console.log(err.message);
//         }
//         else{
//             console.log("Folder created");
//         }
//     })
// }
// else{
//     console.log("folder already created");
// }
// fs.writeFile('./docs/file.txt','hii kavineswar ',(err)=>{
//     if(err){
//         console.log(err.message)
//     }
//     else{
//         console.log("file written");
//     }
// })
// if(fs.existsSync('./docs/file.txt'))
// {
//     fs.readFile('./docs/file.txt',(err,data)=>{
//         if(err){
//             console.log(err.message);
//         }
//         else{
//                 console.log(data.toString());
//         }
//     })
// }
// else{
//     console.log("File does not exist");
//}

if(fs.existsSync('./docs/file.txt'))
{
    fs.unlink('./docs/file.txt',(err)=>{
        if(err){
            console.log(err.message);
        }
        else
            console.log("file deleted");
    })
}
else{
    console.log("File does not exist");
}
 fs.rmdir('./docs',(err)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log('folder deleted')
    }
 })
