let express=require("express");
let path=require("path");
let app=express();
let port=80;

app.use("/static",express.static("static"));
app.use(express.urlencoded());

app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{

    res.status(200).render("home.pug",{})
})
app.get("/contact",(req,res)=>{

    res.status(200).render("contact.pug",{})
})

app.listen(port,()=>{
    console.log(`This server is running at port ${port}`)
})

