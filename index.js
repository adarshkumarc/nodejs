const fs=require('fs');
const path =require('path');
const dirpath=path.join(__dirname,'crud');
const filepath=`${dirpath}/apple.txt`;
// write a file  
// fs.writeFileSync(filepath,'this is a apple text file');
// read a file 
// fs.readFileSync(filepath,(err,items)=>{
//     console.log(items);
// })
//update files
// fs.appendFile(filepath,'and file name is apple.txt',(err)=>{
//     if(err)console.log("file is updatedd");
// })
//update file name 

// fs.rename(filepath,`${dirpath}/madness.txt`,(err)=>{
//     if(err)console.log("file  name is updatedd");

// })

fs.unlinkSync(`${dirpath}/fruit.txt`);
