let mymap=new Map();
console.log(mymap);

const key1='str1',
key2={},
key3=function(){};
mymap.set(key1,"this is string");
mymap.set(key2,"this is object");
mymap.set(key3,"this is function");

console.log(mymap);

let value=mymap.get(key1);
console.log(value);
console.log(mymap.size);

for( let [key,value] of mymap ){
    console.log(key,value);
}
for( let key of mymap.keys() ){
    console.log(key,);
}
for( let key of mymap.values() ){
    console.log(key,);
}
