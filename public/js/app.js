'use strict';

let dataURL = '../data/exercise1.json';
let req = new XMLHttpRequest();
req.open('GET', dataURL); 
req.responseType='json'; 
req.send(); 

console.log('data received');

req.onload = () => {
    const data = req.response;
    const header = data['headline'];
    const intro = data['intro'];

    const h1 = document.createElement('h1');
    const h1Text = document.createTextNode(header);

    h1.appendChild(h1Text);

    const p = document.createElement('p');
    const pText = document.createTextNode(intro);
    
    p.appendChild(pText);

    document.getElementById('Exercise1').appendChild(h1);
    document.getElementById('Exercise1').appendChild(p);
};