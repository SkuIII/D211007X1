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
    const p = document.createElement('p');
    const btn = document.createElement('button');
    const br = document.createElement('br');
    const img = document.createElement('img');

    h1.innerText = header;
    p.innerText = intro;
    btn.innerText = 'Hide';
    img.src = data['articleImage'];

    document.getElementById('Exercise1').appendChild(h1);
    document.getElementById('Exercise1').appendChild(p);
    document.getElementById('Exercise1').appendChild(btn);
    document.getElementById('Exercise1').appendChild(br);
    document.getElementById('Exercise1').appendChild(img);
    
    btn.addEventListener("click", () => {

        if (btn.innerText === "Hide") {

            btn.innerText = "Show";
            document.getElementById('Exercise1').removeChild(img);

        } else {
            btn.innerText = "Hide";
            document.getElementById('Exercise1').appendChild(img);
        }
    });
};
