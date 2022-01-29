let mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true });

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"))

db.once("open", () => {
    console.log("We are conected");
})

//declaring schema means telling what it will hold
let kittySchema = new mongoose.Schema({
    name: String,
    roll: Number
})
kittySchema.methods.speak = function () {
    return `My name is ${this.name} having roll number: ${this.roll}`
}
//after changing in model u can't change schema
var Cat = mongoose.model("Cat", kittySchema);

let persiancat = new Cat({ name: "PersianCat", roll: 2 });
let persiancat2 = new Cat({ name: "PersianCat2", roll: 1 });
// console.log(persiancat.name);
// console.log(persiancat.speak());

// persiancat.save((err)=>{
//     if(err) return console.log("Error Occured");
//     // persiancat.speak();
// })
// persiancat2.save((err)=>{
//     if(err) return console.log("Error Occured");
//     // persiancat.speak();
// })

Cat.find({ name: "Persian Cat" }, function (err, cats) {
    if (err) return console.log(err);
    console.log(cats)
});

