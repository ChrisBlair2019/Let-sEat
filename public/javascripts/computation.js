//This file finds the final location

function findCenterPoint(){}

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
