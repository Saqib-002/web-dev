// let btn=document.getElementById('btn');
// btn.addEventListener('click',fun1);
// btn.addEventListener('dblclick',fun2);
// btn.addEventListener('mousedown',fun3);
// function fun1(e){
    
    //     console.log('Button is clicked',e);
    //     e.preventDefault();
    // }
    // function fun2(e){
        
        //     console.log('Button is double ',e);
        //     e.preventDefault();
        // }
        // function fun3(e){
            
            //     console.log('Button is down',e);
            // }
            
let cont=document.querySelector('.container');
cont.addEventListener('mouseenter',function(){

    console.log('mouse is enter');
});
cont.addEventListener('mouseleave',function(){

    console.log('mouse is left');
});
cont.addEventListener('mousemove',function(e){

    console.log('mouse is moving');
    document.body.style.backgroundColor=`rgb( ${e.offsetX} ,${e.offsetY},134)`;
    
});



console.log(btn);
