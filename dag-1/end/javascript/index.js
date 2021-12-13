'use strict';

//DOCUMENT.GETELEMENTSBYTAGNAME
//Returnerar alltid en lista/collection av noder
// const header = document.getElementsByTagName('h1');

// console.log(header);

// let x = header[1];
// x.style.color = '#ff0000';
// console.log(x);

// const pageTitle = document.getElementById('pageTitle');
// console.log(pageTitle);

// pageTitle.textContent = 'Vår tjusiga titel';
// pageTitle.innerText = 'Ny titel';
// pageTitle.innerHTML =
//   '<span style="color:red">Ny titel med html egenskaper</span>';

// const navbarTitle = document.getElementsByClassName('text-primary');
// navbarTitle[0].innerText = 'Michael';
// console.log(navbarTitle);

/* QUERYSELECTOR */
/*
  söka på elementnamn
  söka på klassnamn ('.className')
  söka på id ('#id')
*/
const pageTitle = document.querySelector('div');

console.log(pageTitle);

console.log(document.querySelector('.logo'));
console.log(document.querySelector('#showcase'));
console.log((document.querySelector('li').firstChild.textContent = 'Home'));
console.log(
  (document.querySelector('li:last-child').firstChild.style.background =
    '#f4f4f4')
);

console.log(
  (document.querySelector('li:nth-child(2)').firstChild.textContent =
    'Reparation')
);

console.log(document.querySelector('li > a'));
