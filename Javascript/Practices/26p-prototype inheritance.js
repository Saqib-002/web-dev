let proto={
    salam:function(){
        console.log("Salam Sahib");
    },
    AH:function(){
        console.log("Allah Hafiz");
    }
}

let obj1=Object.create(proto);
console.log(obj1);
obj1.name='Harry';
obj1.rol=2;
console.log(obj1);


let Employee=function(name,id){
    this.name=name;
    this.id=id;
};
let e1=new Employee('Saqib',2);
Employee.prototype.salam=function(){
    console.log("Salam Sahib");
};

console.log(e1);

let Programmer=function(name,id,lang){
    Employee.call(this,name,id);
    this.lang=lang;
};
Programmer.prototype=Object.create(Employee.prototype);

Programmer.prototype.constructor=Programmer;

let p1=new Programmer('Saqib',12,'Java');
console.log(p1);

