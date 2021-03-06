const google = window.google;
let map;
let marker;


export function searchAddress(location) {
    let mapOptions = {
		center: new google.maps.LatLng(40.680898,-8.684059),
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    let addressInput = location;

    let geocoder = new google.maps.Geocoder();

	geocoder.geocode({address: addressInput}, function(results, status) {

		if (status == google.maps.GeocoderStatus.OK) {

            let myResult = results[0].geometry.location;

      createMarker(myResult);

      map.setCenter(myResult);

      map.setZoom(17);
		}
	});

}

function createMarker(latlng) {

  if(marker != undefined && marker != ''){
    marker.setMap(null);
    marker = '';
  }

  marker = new google.maps.Marker({
    map: map,
    position: latlng
  });
}