let reg=/saqib/;
 reg=/saqib/g;
//  reg=/saqiB/i;
let str='My name is saqib, saqib is agood boy';

let result1=reg.exec(str);
console.log('result1: ',result1);
result1=reg.exec(str);
console.log('result1: ',result1);

let result2=reg.test(str);
console.log('result2: ',result2);

let result3=str.match(reg);
console.log('result3: ',result3);

let result4=str.search(reg);
console.log('result4: ',result4);

let result5=str.replace(reg,"ahmad");
console.log('result5: ',result5);
// repeat the string
console.log(str.repeat('2'));





