
class employee{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    salam(){
        console.log('Salam Sahib');
    }
    // static ethod can be use without creating object
    static add(a,b){
        return a+b;
    }
};

let e1=new employee('saqib',2);
console.log(e1);
e1.salam();
// console.log(employee.add(2,3));
class  programmer extends employee{
    constructor(name,id,language){
        super(name,id);
        this.language=language;
    }
    AH(){
        console.log('Khuda Hafiz');
    }
}
let p1=new programmer('saqib',02,'Java');
console.log(p1);
p1.salam();
p1.AH();
