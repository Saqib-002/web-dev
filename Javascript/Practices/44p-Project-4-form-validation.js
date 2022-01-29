let username=document.getElementById('uname');
let email=document.getElementById('email');
let Phone=document.getElementById('phone');
let validuser=false;
let validemail=false;
let validphone=false;



username.addEventListener('blur',()=>{
    
    let reg=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    if(reg.test(username.value))
    {
        validuser=true;
        username.classList.remove('is-invalid');
    }
    else{
        
        validuser=false;
        username.classList.add('is-invalid');

    }
});

email.addEventListener('blur',()=>{
    let reg=/([0-9a-zA-Z]+)@\w+\.\w+/;
    if(reg.test(email.value))
    {
        validemail=true;
        email.classList.remove('is-invalid');
    }
    else{
        
        validemail=false;
        email.classList.add('is-invalid');

    }

});

Phone.addEventListener('blur',()=>{
    let reg=/^([0-9]){10}$/;
    if(reg.test(phone.value))
    {
        validphone=true;
        phone.classList.remove('is-invalid');
    }
    else{
        
        validphone=false;
        phone.classList.add('is-invalid');

    }

});

let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{

    e.preventDefault();
    show();
})

function show(){
    let success=document.getElementById('success');
    let danger=document.getElementById('error');
    
    if(validuser && validemail && validphone )
    {
        success.classList.add('show');
        danger.classList.remove('show');
        
    }
    else{
        success.classList.remove('show');
        danger.classList.add('show');
    }
    setTimeout(()=>{
        success.classList.remove('show');
        danger.classList.remove('show');
    },3000)
}

