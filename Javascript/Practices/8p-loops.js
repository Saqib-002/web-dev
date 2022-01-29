// for(let i=0;i<10;i++)
// {
//     console.log('i: ',i);
//     if(i%2==0)
//     {
//         i++;
//     }
// }
//let arr=[1,2,3,4,5];
// or
const arr=new Array(91,22,93,74,53);
// arr[2]=111;
console.log(arr);
// arr.forEach(function(element){
//     console.log('arr: ',element);
// });
// arr.forEach(function(element,index,array){
//     console.log('arr: ',element,index,array);
// });

let obj = {
    name: "Rohan Das",
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}

