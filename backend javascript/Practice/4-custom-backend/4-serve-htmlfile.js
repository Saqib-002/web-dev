const fs=require('fs');
let http=require('http');
const port=80;
const hostname='127.0.0.1';
let  index=fs.readFileSync('./index.html');
let  services=fs.readFileSync('./services.html');
let  clients=fs.readFileSync('./clients.html');
let  contact=fs.readFileSync('./contact.html');

const server=http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;
    res.writeHead(200, {'Content-type': 'text/html'});
    if(url=='/')
    {
        res.end(index);
    }
    else if(url=='/index.html')
    {
        res.end(index);
    }
    else if(url=='/clients.html')
    {
        res.end(clients);
    }
    else if(url=='/contact.html')
    {
        res.end(contact);
    }
    else if(url=='/services.html')
    {
        res.end(services);
    }
    else{
        res.statusCode=404;
        res.end('<h1>404 not found');
    }
});
server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
});
