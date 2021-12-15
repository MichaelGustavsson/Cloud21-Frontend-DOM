'use strict';

/* ----------------------------------------------------------------
          Hämta html element som vi skall manipulera
  ---------------------------------------------------------------- */
// Hämta html elementet section med klassen gallery-wrapper...
const gallery = document.querySelector('.gallery-wrapper');
const searchField = document.querySelector('#searchField');
const searchBtn = document.querySelector('#searchBtn');
const modalDialog = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Skriv ut alla fordon/bilar i konsol fönstret...
console.log(vehicles);

// Använder document.createElement...
// vehicles.forEach((vehicle) => {
//   // Skapar container elementet för informationen...
//   const div = document.createElement('div');
//   const h4 = document.createElement('h4');
//   const img = document.createElement('img');
//   const p = document.createElement('p');

//   h4.textContent = vehicle.make + ' ' + vehicle.model;

//   img.setAttribute('src', vehicle.imageUrl);
//   img.setAttribute('width', '400');

//   p.textContent =
//     'Årsmodell ' + vehicle.modelYear + ' | Antal km ' + vehicle.mileage;

//   div.appendChild(h4);
//   div.appendChild(img);
//   div.appendChild(p);

//   // Applicera klassnamn på container div...
//   div.className = 'gallery-card';
//   gallery.appendChild(div);
// });

// Function Expressions...
const createHtml = (vehicle) => {
  gallery.insertAdjacentHTML(
    'beforeend',
    `<div class="gallery-card">
      <h4>${vehicle.make} - ${vehicle.model}</h4>
      <img src="${vehicle.imageUrl}" id="${vehicle.id}" width="400" />
      <p>Årsmodell ${vehicle.modelYear} | Antal km ${vehicle.mileage}</p>
    </div>`
  );
};

const loadImages = () => {
  const images = document.querySelectorAll('.gallery-card img');

  images.forEach((image) => {
    let src = image.getAttribute('src');
    let id = image.getAttribute('id');

    image.addEventListener('click', () => {
      openModal(src, id);
    });
  });
};

const getVehicles = () => {
  vehicles.forEach((vehicle) => {
    createHtml(vehicle);
  });
  loadImages();
};

const findVehicles = () => {
  const searchValue = searchField.value;
  if (searchValue === '') {
    gallery.innerHTML = '';
    getVehicles();
    return;
  }

  let found;
  found = vehicles.filter(
    // Använd string funktionen startsWith för att söka efter bil på första tecknen...
    (vehicle) =>
      vehicle.make.toUpperCase().startsWith(searchValue.toUpperCase())
  );

  gallery.innerHTML = '';
  found.forEach((vehicle) => createHtml(vehicle));
};

const openModal = (imageSrc, id) => {
  const image = modalDialog.querySelector('.modal-container');
  image.innerHTML = `<img src=${imageSrc}/>
  <a class="btn" href="vehicle-detail.html?vehicleId=${id}">Mer information</a>`;

  modalDialog.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const quitModal = () => {
  modalDialog.classList.add('hidden');
  overlay.classList.add('hidden');
};

//  -----------------------------------------------------------
//   HÄNDELSE HANTERING
//  -----------------------------------------------------------
searchBtn.addEventListener('click', (e) => {
  findVehicles();
  const images = document.querySelectorAll('.gallery-card img');
});

// När kunden trycker på Enter tangenten...
searchField.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    findVehicles();
  }
});

closeModal.addEventListener('click', quitModal);
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    if (!modalDialog.classList.contains('hidden')) quitModal();
  }
});

// Uppstarts funktionen...
// Anropa funktionen getVehicles()...
getVehicles();
