let express=require("express");
let fs=require("fs");
const { fstat } = require("fs");
let path=require("path");
let app=express();
let port=80;

app.use("/static",express.static("static"));
app.use(express.urlencoded())

app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));

app.get('/',(req,res)=>{
    let con="Register for GYM in only 59.99$, Fill Up the form"
    const params={ title: "GYM Website",content:con}
    res.status(200).render("index.pug",params)
})
app.post('/',(req,res)=>{
    name=req.body.name;
    email=req.body.email;
    gender=req.body.gender;
    description=req.body.description;
    let data=`
    Name: ${name}
    Email: ${email}
    Gender: ${gender}
    Description: ${description}
    `
    fs.writeFileSync('./output.txt',data)
    let con="Your form is submitted successfuly";
    const params={ title: "Submitted",content:con}
    res.status(200).render("index.pug",params);
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})