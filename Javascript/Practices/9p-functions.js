// function fun(name) {
//     let i=234;
//     console.log(i);
//     return `this is ${name}\'s fun`;
// }

// let func=fun("Saqib");
// console.log(func);
fun=function (name,greet="thanks") {
    let i=234;
    console.log(i);
    return `this is ${name}\'s fun ${greet}`;
}

let func=fun("Saqib",'byby');
console.log(func);
func=fun("Saqib");
console.log(func);

arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) {
    console.log(element, index)
}); 
