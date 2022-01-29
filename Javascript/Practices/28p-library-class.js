class library{
    constructor(booklist){
        this.booklist=booklist;
        this.issuedbooks={};
    }
    getbooklist(){
        this.booklist.forEach(element => {
            console.log(element);    
        });
    }
    issuebook(bookname,user){
        if(this.issuedbooks[bookname]!=undefined){
            console.log("this book is aready issued")
        }
        else{
            this.issuedbooks[bookname]=user;
        }
    }
    getissuedbookslist(){
                console.log(this.issuedbooks);
        
    }
    returnbook(bookname){
        delete this.issuedbooks[bookname];
    }
};

let l1=new library(['css','java','html']);
console.log('when 11 is created');
l1.getbooklist();
l1.issuebook('css','saqib');
console.log('after book issued');
l1.getbooklist();

console.log('issued');
l1.getissuedbookslist();
l1.returnbook('css');
console.log('after book return');
l1.getbooklist();
l1.getissuedbookslist();

