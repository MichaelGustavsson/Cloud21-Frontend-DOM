'use strict';

const details = document.querySelector('#details');
const regNo = document.querySelector('#regNo');
const image = document.querySelector('#heading img');
// Vi använder en utility class/interface(webb läsaren) ifrån JavaScript för att
// hantera en query string i vår URL.
const urlParams = new URLSearchParams(location.search);

let vehicleId = 0;

for (let [key, value] of urlParams) {
  if (key === 'vehicleId') {
    vehicleId = value;
  }
}

const vehicle = vehicles.find((vehicle) => vehicle.id == vehicleId);

image.setAttribute('src', vehicle.imageUrl);
image.setAttribute('width', '600');

// regNo.innerHTML = regNo.innerHTML + ' ' + vehicle.registrationNo;
regNo.innerHTML += `<span style="font-weight:bold;color:#888;">&nbsp;${vehicle.registrationNo}</span>`;
