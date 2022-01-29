//contructors for class;

function car(name,speed){
    this.name=name;
    this.speed=speed;
    this.run=function(){
        console.log(`This car is ${220-this.speed} slower than mercedes`);
    }
};
let C1=new car('civic',160);
console.log("Name",C1.name);
console.log("Speed",C1.speed);
C1.run();

C1=new car('XLI',120);
console.log("Name",C1.name);
console.log("Speed",C1.speed);
C1.run();

C1=new car('PRADO',140);
console.log("Name",C1.name);
console.log("Speed",C1.speed);
C1.run();
