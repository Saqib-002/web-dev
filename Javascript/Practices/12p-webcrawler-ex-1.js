//pratice
let str='structure';
let link= document.links;
console.log(link);

let href;

Array.from(link).forEach(function(element){
    href=element.href;
    console.log(href);
    if(href.includes(str))
        {
    console.log(href);
        }
});

//Solution
// let str = "python";
// let links = document.links;
// console.log(links);
// let href;
// Array.from(links).forEach(function(element) {
//   href = element.href;
//   if (href.includes(str)) {
//     console.log(href);
//   }
// });

