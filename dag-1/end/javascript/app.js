'use strict';

let info;

/* TITTA PÅ DOCUMENT OBJEKTET */

info = document;
// info = document.all;
// info = document.all.length;
// info = document.all[0];
// info = document.all[1];

// Returnera head objektet = <HEAD></HEAD>
info = document.head;
info = document.body;
info = document.doctype;
info = document.domain;
info = document.URL;
info = document.characterSet;
info = document.contentType;

info = document.links;
info = document.links[4].innerText;
info = document.links[4].id;
info = document.links[0].className;
info = document.links[0].classList[0];

info = document.images;
// console.log(info);
info = document.images[0].getAttribute('src');

info = document.scripts;
info = document.scripts[0];
info = document.scripts[0].getAttribute('src');
// info = document.scripts[1];

let images = document.images;

let imgArray = Array.from(images);

imgArray.forEach(function (img) {
  // console.log(img.getAttribute('src'));
});

// console.log(info);
