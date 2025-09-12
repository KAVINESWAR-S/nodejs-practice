const fs=require('fs');


const readStream=fs.createReadStream('./docs/files.txt',{encoding:'utf8'});

const writeStream=fs.createWriteStream('./docs/copyfiles.txt')

// readStream.on('data',(buffer)=>{
//     writeStream.write('\n BUFFER \n')
//     writeStream.write(buffer);
// })



//only to read and write

readStream.pipe(writeStream)