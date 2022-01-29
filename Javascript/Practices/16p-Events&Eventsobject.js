let elem=document.getElementById('red-1');

elem.addEventListener("click" , function(e) {
    let vari;
    console.log('Clicked');
    elem.style.background='gray';
    elem.style.border='2px solid black';
    vari=e.target;
    vari=e.target.className;
    vari=e.target.id;
    vari=e.target.classList;
    vari = e.offsetX;
    vari = e.offsetY;
    vari = e.clientX;
    // vari = e.clientY;

    console.log(vari);

});

