function numit(numarr){
    let indexvalue=0;
    return{
        next:()=>{
            if(indexvalue<=numarr.length){
                return {
                value: numarr[indexvalue++],
                done:false
                }
            }
            else{
                return {
                done:false
                }
            }
        }
    }
}
let numarr=[11,22,33,44];
let it=numit(numarr);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());