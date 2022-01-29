let crelem=document.createElement('li');
let text = document.createTextNode('I am a text node');
crelem.appendChild(text);
crelem.className='item-5 sad';
crelem.id='new item';
crelem.setAttribute('type','none');
// crelem.innerText='Hello item-5';
// crelem.innerHTML='<b>Hello item-5.</b>';
console.log(crelem);
let el=document.querySelector('ul');
el.appendChild(crelem);
// console.log(el);
// console.log(crelem);

let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className='new-item';
let tnd=document.createTextNode('What\'s up');
elem2.style.fontSize='16px';
elem2.style.margin='0px';

elem2.appendChild(tnd);
// crelem.replaceWith(elem2);
el.replaceChild(elem2,crelem);
el.removeChild(document.getElementById('elem2'));
// elem2.setAttribute('href','https://www.google.com')
// let atr=elem2.hasAttribute('href');
// atr=elem2.getAttribute('href');
// console.log(atr);


//Quick Quiz

// let newelem=document.createElement('h2');
// let fetchelem=document.querySelector('.cc');
// console.log(fetchelem)
// let tex=document.createTextNode('Go to code with harry');
// newelem.appendChild(tex);
// fetchelem.appendChild(newelem);
// newelem.setAttribute('href','https://www.codewithharry.com');
// console.log(newelem);





