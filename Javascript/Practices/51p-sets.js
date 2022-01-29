let set= new Set();
console.log(set);

set.add('this');
set.add('My Name');
set.add('this');

console.log(set);

let set2=new Set([1,'this',2,1]);
set2.add('that');
console.log(set2);
console.log(set2.has(2));
console.log('Before remove');
console.log(set2);
set2.delete('that');
console.log('after remove');
console.log(set2);