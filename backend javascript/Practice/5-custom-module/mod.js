function average(arr){
    let sum=0;
    arr.forEach(element=>{
        sum+=element;
    });
    return sum/arr.length;
}

let myobj={
    avg: average,
    'first name':'Saqib',
    no:123
};

module.exports=myobj;

module.exports.name='Saqib';
module.exports.name2='Saqisb';