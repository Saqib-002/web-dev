let reg=/\waqib/gi;
reg=/\w+aqib/;
reg=/\Wsaqib/;
reg=/\W+saqib/;
reg=/\dsaqib/;
reg=/\d+saqib/;
reg=/\Dsaqib/;
reg=/\D+saqib/;
reg=/\ssaqib/;
reg=/\s+saqib/;
reg=/\Ssaqib/;
reg=/\S+saqib/;

reg=/s(?=a)/;
reg=/s(?!a)/;

let s='saqibsaqib is    saqib';
let res=reg.exec(s);
console.log(res);
res=reg.exec(s);
console.log(res);


if(reg.test(s)){

    console.log(`This string "${s}" match with expression: "${reg}"`);
}
else{
    console.log(`This string "${s}" doesn't match with expression: "${reg}"`);

}