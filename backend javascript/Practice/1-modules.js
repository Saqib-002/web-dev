const fs=require("fs");

let text=fs.readFileSync("D:\\LANGUAGES\\Web Developement\\backend javascript\\abc.txt","utf-8");

console.log('Data in file is:'); 
console.log(text); 
text=text.replace('HOME','Home');
console.log('Data in file is:'); 
console.log(text); 

fs.writeFileSync('D:\\LANGUAGES\\Web Developement\\backend javascript\\a.txt',text);

