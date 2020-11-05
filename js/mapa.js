
var map = L.map('mapa').setView([52.229994, 21.010827], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([52.229994, 21.010827]).addTo(map)
    .bindPopup('GDLWebCamp 2020 <br> Boletos ya disponible.')
    .openPopup()
    .bindTooltip('Conferencia de GDLWEBCAMP')
    .openTooltip();

