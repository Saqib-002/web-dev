function library(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}
function Display(){
    
}
let display=new Display;
function deletebook(bookid){
    let bookarr=JSON.parse(localStorage.getItem('library'));
    // console.log(bookarr)
        bookarr.splice(bookid,1);
        localStorage.setItem('library',JSON.stringify(bookarr));
        display.showbooks();
    
}
Display.prototype.showbooks=function(){
    bookarr=JSON.parse(localStorage.getItem('library'));
    let tableBody=document.querySelector('.table tbody');
    if(bookarr==null||bookarr==''){
        tableBody.innerHTML='<h3>No Book to Show Add aBook PLease</h3>'
    }
    else{
        let str='';
        tableBody.innerHTML=str;
        bookarr.forEach(element => {
            str+=`<tr>
            <td>${element.name}</td>
            <td>${element.author}</td>
            <td>${element.type}</td>
            <td><button class="btn btn-outline-danger deletebtn" onclick="deletebook(this.id)">Delete</button></td>
            </tr>`
        });
        tableBody.innerHTML+=str;
    }
    
}
display.showbooks();
Display.prototype.add=function(book){
    
    
    let bookarr=JSON.parse(localStorage.getItem('library'));
    
    if(bookarr==null ||bookarr=='')
    {
        bookarr=[book];
        localStorage.setItem('library',JSON.stringify(bookarr));
    }
    else{
        bookarr.push(book);
        localStorage.setItem('library',JSON.stringify(bookarr));
    }
    
}
Display.prototype.validatebook=function(book){
    if(book.name.length<=3 ||book.author.length<=3){
        return false;
    }
    else{
        return true;
    }
}
Display.prototype.clear=function(){
    let libraryform=document.getElementById('libraryform');
    libraryform.reset();
    
}

Display.prototype.show=function(message,content){
    let alert=document.getElementById('message');
    let str=``;
    if(message=='success'){
        str=`<div class="alert alert-${message} alert-dismissible fade show" role="alert">
        ${content}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
    else{
        str=`<div class="alert alert-${message} alert-dismissible fade show" role="alert">
        ${content}
        <button type="button"  class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
    alert.innerHTML=str;
    setTimeout(() => {
        
        alert.innerHTML='';
    }, 2000);
}
Display.prototype.scroll=function(){
    let bookarr=JSON.parse(localStorage.getItem('library'));
    let tablecont=document.getElementsByClassName('table-cont')[0];
    length=0;
    for (let index = 0; index < bookarr.length; index++) {
        length++;
        
    }
    if(length>5){
        tablecont.style.overflow='scroll';
        tablecont.style.height='400px';
    }
}

let submitbtn=document.getElementById('submitbtn');
submitbtn.addEventListener('click',function (e){
    let name=document.getElementById('bookname').value;
    let author=document.getElementById('author').value;
    let stories=document.getElementById('stories');
    let programming=document.getElementById('Programming');
    let novels=document.getElementById('novels');
    let type;
    let tableBody=document.querySelector('.table tbody');
    tableBody.innerHTML='';
    if(stories.checked){
        type=stories.value;
    }
    else if(programming.checked){
        type=programming.value;
    }
    else{
        type=novels.value;
    }
    
    let book=new library(name,author,type);
    let display=new Display;
    if(display.validatebook(book)){
        display.add(book);
        display.clear();
        display.show('success','Book Added');
        display.showbooks();
    }
    else{
        console.log('ss');
        display.show('danger','Invalid Entery');
    }
    display.scroll();
    e.preventDefault();
});
display.scroll();

