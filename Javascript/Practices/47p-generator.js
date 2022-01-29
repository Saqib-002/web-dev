function* numgenerator(){
    let i=0;
    while(1){
        i=i+2;
        yield i;

    }
}

const gennum=numgenerator();
console.log(gennum.next().value);
console.log(gennum.next().value);
console.log(gennum.next().value);
console.log(gennum.next().value);
console.log(gennum.next().value);