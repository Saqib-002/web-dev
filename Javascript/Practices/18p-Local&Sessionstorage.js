let colors=new Array('red','blue','white');

localStorage.setItem('Name','Saqib');
// localStorage.setItem('Age','19');
// localStorage.setItem('Color','Skinny');
// localStorage.setItem('Colors',JSON.stringify(colors));

// localStorage.clear();
// localStorage.removeItem('Name');


let name=localStorage.getItem('Name');
name=JSON.parse(localStorage.getItem('Colors'));
console.log(name);

// sessionStorage.setItem('Name','Saqib');
// sessionStorage.setItem('Age','19');
// sessionStorage.setItem('Color','Skinny');
// sessionStorage.setItem('Colors',JSON.stringify(colors));