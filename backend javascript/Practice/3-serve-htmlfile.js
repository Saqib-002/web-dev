const fs=require('fs');
let http=require('http');
const port=80;
const hostname='127.0.0.1';
let  htmlfilecontent=fs.readFileSync('D:\\LANGUAGES\\Web Developement\\backend javascript\\Practice\\');

const server=http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(htmlfilecontent);
});
server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
});
