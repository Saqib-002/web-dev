let fetchbtn=document.getElementById('fetchBtn');
let cont=document.getElementsByClassName('container')
let list=document.getElementById('list')

fetchbtn.addEventListener('click',fetchbuttonhandler);

function fetchbuttonhandler(){
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    // xhr.open('GET'(method how to get data),'source',asyncronous non-blocking/syncronous or blocking);
    // xhr.open('GET','./31p-test.txt',true);
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/json')

    xhr.onprogress=function(){
        // console.log('In Progress');
        list.innerhtml=`<div class="spinner-border text-primary" role="status">sssdhhjhskjhaskjhdjkadhsjadshaskj
        </div>`;
    }
    xhr.onload=function(){
        if(this.status==200)
        {
            console.log(this.responseText);
        }
        else{
            console.error('ERROR')
        }
        
    }
let params=`name=test&salary=123%age=23`;
//  params=`{"name":"test","salary":"123","age":"23"}`;
    // for GET
    // xhr.send(); 
    
    // for POST
    xhr.send(params);

}





let popBtn=document.getElementById('popBtn')

popBtn.addEventListener('click',pophandler);

function pophandler(){
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    // xhr.open('GET'(method how to get data),'source',asyncronous non-blocking/syncronous or blocking);
    xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees',true);
    xhr.onload=function(){
        if(this.status==200)
        {
            let obj=JSON.parse(this.responseText);
            console.log(obj['data']);
            console.log(obj['data']['employee_name']);
            let str='';
            for (element of obj['data']) {
                str+=`<li>${element.employee_name}</li>`;
            }
            list.innerHTML=str;
        }
        else{
            console.error('ERROR')
        }
        
    }
    // for GET
    xhr.send(); 
    

}
