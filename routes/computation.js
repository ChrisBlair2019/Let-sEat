//This file finds the final location

function findCenterPoint(){
  navigator.geolocation.getCurrentPosition(calcLocation);
  function calcLocation(position){

    var bounds = new google.maps.LatLngBounds();

    //Arbitrary test locations
    var polygonCoords = [
    new google.maps.LatLng(38.9162093,-77.0775715),
    new google.maps.LatLng(38.9093622,-77.0708067),
    new google.maps.LatLng(38.908319, -77.077609),
    new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
    ];

    // The Center of the polygon
    var latlng = bounds.getCenter();

    findBestLocation(latlng.latitude, latlng.longitude, "indian")
  }

}

function findBestLocation(double latitude, double longitude, string preference) {

  string theUrl;
  int total = 0;
  int radius = 3000;

 while((total <= 0) && radius < 40000) {  //if no results are found, continue scaling until 25 miles is hit (max)

   //Create request
    theUrl = "https://api.yelp.com/v2/search?term=restaurants&category_filter="+
              preference + "&ll=" + latitude + "," + longitude + "&radius_filter=" + radius "&limit=1";

    //Make Request
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          var response = JSON.parse(xmlHttp.responseText);
        alert(response.businesses.total);
        total = response.businesses.total;
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send();

    radius = radius + 1500; //increase search radius by a mile

  }

  return response; //returns entire JSON object (see Yelp API @ https://www.yelp.com/developers/documentation/v2/search_api)

}
