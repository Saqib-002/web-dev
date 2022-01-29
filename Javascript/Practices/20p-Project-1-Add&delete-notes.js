let addbtn=document.getElementById('addbtn');
let textarea=document.getElementsByTagName('textarea')[0];
showNotes();
addbtn.addEventListener('click',(e)=>{
    let textvalue=textarea.value;
    let notes=localStorage.getItem('Note');
    let notesarray;
    if(notes==null){
        notesarray=[];
    }
    else{
        notesarray=JSON.parse(notes);
    }
    notesarray.push(textarea.value);
    localStorage.setItem('Note',JSON.stringify(notesarray));
    showNotes();
    textarea.value='';
});
textarea.addEventListener('keypress',(e)=>{
    if(e.keyCode==13)
    {
        let textarea=document.getElementsByTagName('textarea')[0];
        let textvalue=textarea.value;
        let notes=localStorage.getItem('Note');
        let notesarray;
        if(notes==null){
            notesarray=[];
        }
        else{
            notesarray=JSON.parse(notes);
        }
        notesarray.push(textarea.value);
        localStorage.setItem('Note',JSON.stringify(notesarray));
        showNotes();
        textarea.value='';
    }
});
function deletenote(index){
    let notes=localStorage.getItem('Note');
    let notesobj;
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.splice(index,1);
    
    localStorage.setItem('Note',JSON.stringify(notesobj));
    showNotes();
}


function showNotes(){
    let notes=localStorage.getItem('Note');
    let card=document.querySelector('.card-note');
    if(notes==null || JSON.parse(notes)=='')
    {
        card.innerHTML=`<h1>No Notes Available,Add a Note using above Section</h1>`;
    }
    else{
        card.innerHTML=``;
        let notesarray=JSON.parse(notes);
        notesarray.forEach((element,index)=>{
            card.innerHTML+=`<div class="card my-2 mx-2">
            <div class="card-body">
            <h5 class="card-title">Note-${index+1}</h5>
            <p class="card-text">${element}</p>
            <a href="#" class="btn btn-outline-danger box-shadow-danger btn" onclick="deletenote(this.id)">delete Note</a>
            </div>
            </div>`;
        });
        
    }
}

//search part

let search=document.querySelector('.search');

search.addEventListener('input',(e)=>{
    let searchval=search.value;
    let card_note=document.getElementsByClassName('card');
    Array.from(card_note).forEach((element)=>{
        
        let cardtxt=element.querySelector('p').innerText;
        // console.log(cardtxt);
        if(cardtxt.includes(searchval)){
            console.log('f',element,cardtxt);
            element.style.display='block';
        }
        else{
            console.log('t',element,cardtxt);
            element.style.display='none';
        }
    });
});



