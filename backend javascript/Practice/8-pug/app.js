const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For serving static files
app.use('/static',express.static('static'));
// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views',path.join(__dirname,'views'));

// Our pug demo endpoint
app.get('/demo',(req,res)=>{
    res.status(200).render('demo',{title:"Pug template",content:"This is content"})
})


app.post('/',(req,res)=>{
    res.send("This is default page");
})
app.post('/about',(req,res)=>{
    res.status(404).send("This is about page");
})
app.get('/about',(req,res)=>{
    res.send("This is about page");
})

app.listen(port,()=>{
    
    console.log(`this server is listening on ${port}`)
})


