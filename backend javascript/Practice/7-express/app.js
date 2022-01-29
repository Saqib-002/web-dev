let express=require("express");
let app=express();
let port=80;

app.get('/',(req,res)=>{
    res.send("This is default page");
})
app.post('/',(req,res)=>{
    res.end("This is default page");
})
app.post('/about',(req,res)=>{
    res.status(404).end("This is default page");
})
app.get('/about',(req,res)=>{
    res.end("This is about page");
})

app.listen(port,()=>{
    console.log(`this server is listening on ${port}`)
})