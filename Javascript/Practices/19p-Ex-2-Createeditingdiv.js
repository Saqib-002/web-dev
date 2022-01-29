let newdiv=document.createElement('textarea');
document.body.appendChild(newdiv);
let textnode;
newdiv.setAttribute('cols','40');
newdiv.setAttribute('rows','20');

let updatevalue=localStorage.getItem('textarea');
if(updatevalue==null){
    textnode=document.createTextNode('Edit Item');
}
else{
    textnode=document.createTextNode(updatevalue);
}
newdiv.appendChild(textnode);
newdiv.addEventListener('blur',function(e){
    let textvalue=newdiv.value;
    localStorage.setItem('textarea',textvalue);

});


