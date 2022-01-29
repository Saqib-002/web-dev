let reg=/saqib/;

reg=/saqi[0]b/;
reg=/saqi[0-9]b/;
reg=/saqi[a-zA-Z]b/;
reg=/saqi[a-zA-Z]b/;
reg=/saqi[ASs]b/;

reg=/saqi{2}b/;
reg=/saqi{0,3}b/;

reg=/(saqib){2}/;


let s='saqibsaqib is saqib';
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
