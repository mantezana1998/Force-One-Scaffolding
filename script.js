// Initialize and add the map
function initMap() {
    // The location of San Francisco 
    const sf = {lat: -25.344, lng: 131.036};
    // The map, centered at San Francisco 
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: sf,
    });
    // The marker, positioned at San Francisco 
    const marker = new google.maps.Marker({
      position: sf,
      map: map,
    });
  }