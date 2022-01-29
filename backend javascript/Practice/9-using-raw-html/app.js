let express=require("express");
let path=require("path");
let app=express();
let port=80;

app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));

app.get('/index.pug',(req,res)=>{
    let con="Register for GYM in only 59.99$, Fill Up the form"
    const params={ title: "GYM Website",content:con}
    res.status(200).render("index.pug",params)
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})