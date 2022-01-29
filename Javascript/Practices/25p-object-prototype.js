let obj={
    name:"Saqib",
    roll:23
};

function Obj(name,roll){
    this.name=name;
    this.roll=name;
}
console.log(obj);
Obj.prototype.setname=function(name){
    this.name=name;
}
let obj2=new Obj('saqib');
console.log(obj2);
obj2.setname('noone');
console.log(obj2);


