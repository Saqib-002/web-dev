const fs=require('fs');
let text=fs.readFile('D:\\LANGUAGES\\Web Developement\\backend javascript\\abc.txt','utf-8',(err,data)=>{
    if(err!=null)
    {
        console.log(err);
    }
    else
    {
        console.log(data);
    }
})
console.log("This is message");