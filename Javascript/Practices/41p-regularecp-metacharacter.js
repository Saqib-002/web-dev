let reg=/saqib/;
reg=/^i/;
reg=/saqib$/;
reg=/saq.b/;
reg=/saq*b/;
reg=/saqi?b/;
reg=/saq\*b/;


let s='saq*b is saqib';
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
