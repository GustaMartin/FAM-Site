let count = 1
document.getElementById("radio1").checked = true

setInterval( function(){
    nextImage()
},3000)

function nextImage(){
    count++;
    if(count > 4){
        count = 1
    }

    document.getElementById("radio"+ count).checked = true
}

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
	
	function initMap() {
      // Coordenadas da localização que você deseja exibir
      var location = L.latLng(-23.5505, -46.6333);

      // Criação do mapa
      var map = L.map('map').setView(location, 12);

      // Adicionar camada do mapa offline
      L.tileLayer('caminho/para/tiles/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18
      }).addTo(map);

      // Marcador na localização
      L.marker(location).addTo(map)
        .bindPopup('Minha Localização')
        .openPopup();
    }