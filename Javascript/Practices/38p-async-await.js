async function func1(){
    console.log('Inside function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const user = await response.json();
    console.log('user resolved');
    return user;
}
console.log('Before a');
let a=func1();
console.log('After a');
console.log(a);
a.then((data)=>{
    console.log('data',data);
})
console.log('Last Line');