let fetchbtn=document.getElementById('fetchbtn');
let list=document.getElementById('list');
let url;
function getData(){
    url="https://api.github.com/users";
    console.log('inside getData');
    fetch(url).then((response)=>{
        console.log('inside first then');
        return response.json();
    }).then(function(data){
        console.log('inside second then');
        console.log(data);
        
    })
}
console.log('before getdata');
getData();
console.log('after getdata');