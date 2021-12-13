'use strict';

/* Navigera i ett html document med hjälp av querySelector, querySelectorAll */
// let cards = document.querySelectorAll('.gallery-card');
// let card = document.querySelectorAll('.gallery-card:last-child');
// let card1 = document.querySelectorAll('.gallery-card:nth-child(5)');
// console.log((card1[0].querySelector('h4').firstChild.textContent = 'Toyota'));
// console.log(cards);
// console.log(cards[0].querySelector('a'));
// console.log((cards[0].querySelector('h4').textContent = 'Volkswagen Buggy'));

// cards.forEach((card) => {
// card.style.background = '#888';
// console.log((card.querySelector('h4').textContent = 'Volvo'));
// });

/* Skapa element */
// const div = document.createElement('div');
// const textNode = document.createTextNode('Michael');

// div.appendChild(textNode);
// console.log(div);

//Placera mitt nya element i dokumentet.
// const wrapper = document.querySelector('.gallery-wrapper');
// wrapper.appendChild(div);

/* Skapa ett nytt card för en ny bil... */

//Skapa ett element
const div = document.createElement('div');
//Sätt klassnamn
div.className = 'gallery-card';
//Skapar ett barn element till våran div
const h4 = document.createElement('h4');
//Texten på vår nya h4 element
h4.textContent = 'Volkswagen Tiguan';

//Placera barn elementet i vår div
div.appendChild(h4);

const img = document.createElement('img');
//Skapa attribute för elementet med setAttribute('attributetsnamne', 'värde')
img.setAttribute('src', './content/img/car1.jpg');
img.setAttribute('alt', 'Volkswagen Tiguan');
img.setAttribute('width', '400');

div.appendChild(img);

const p = document.createElement('p');
p.textContent =
  'Lorem ipsum dolor sit amet consectetur ipisicing elit. Magni          tenetur rerum qui accusamus ullam deleniti quibusdam beatae blanditiis fugiat distinctio.';

div.appendChild(p);

const a = document.createElement('a');
a.textContent = 'Detaljer';
a.setAttribute('href', '#');
a.className = 'btn';

div.appendChild(a);
console.log(div);

const wrapper = document.querySelector('.gallery-wrapper');
wrapper.appendChild(div);

//wrapper.insertAdjacentElement('beforebegin', div);
// wrapper.insertAdjacentText('beforebegin', 'Kalle Anka');

wrapper.insertAdjacentHTML(
  'beforeend',
  `<div class="gallery-card">
  <h4>Ford Kuga</h4>
  <img src="./content/img/car2.jpg" alt="Ännu en ny bil" widht: "400"/>
  <p>Lorem ipsum dolor sit amet consectetur ipisicing elit. Magni          tenetur rerum qui accusamus ullam deleniti quibusdam beatae blanditiis fugiat distinctio.</p>
  <a href="#" class="btn">Detaljer</a>
  </div>`
);

const vehicleName = 'BMW X1';
wrapper.insertAdjacentHTML(
  'afterbegin',
  `
  <div class="gallery-card">
    <h4>${vehicleName}</h4>
    <img
      src="./content/img/car4.jpg"
      alt="Chevrolet Corvette"
      width="400"
    />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
      tenetur rerum qui accusamus ullam deleniti quibusdam beatae
      blanditiis fugiat distinctio.
    </p>
    <a href="#" class="btn">Detaljer</a>
  </div>
`
);
