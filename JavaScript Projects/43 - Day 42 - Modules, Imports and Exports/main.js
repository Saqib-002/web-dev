// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

// import * as varr from "./js/variable.js";
// import { add } from "./js/functions.js";
// import * as fs from "fs"
// import fs from "fs"
const fs=require("fs");
// console.log(varr.num1);
// console.log(varr.num2);

// add(varr.num1, varr.num2);

// console.log(add(varr.num1, varr.num2));
fs.readFile("../index.txt","utf8",(green,data)=>{
    console.log(data);
    document.body.style.color="green";
    document.body.style.height="100vh";

})