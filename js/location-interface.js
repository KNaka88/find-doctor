function initMap(locaton) {
    var map = new google.maps.Map(document.getElementById('map'), {
        //Epicodus Location
        center: {lat:45.5206223, lng:-122.6795871 },
        zoom: 15
    });

    var infoWindow = new google.maps.InfoWindow({map: map});

    map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
    });


    var locationButtonElements = document.getElementsByClassName("location_button");
    console.log(locationButtonElements);

    //
    // document.getElementById("get").addEventListener('click', function(event) {
    //
    //     // var latArray = document.getElementsByClassName("lat");
    //     // var lonArray = document.getElementsByClassName("lon");
    //     var lat = $(this).text();
    //     var lon = $(this).text();
    //     console.log("clicked");
    //     console.log(lat);
    //     console.log(lon)
    //
    //     for(var i=0; i<latArray.length; i++){
    //       console.log("check");
    //       var lat = latArray[i].val;
    //       var lon = lonArray[i].val;
    //       console.log(lat);
    //       console.log(lon);

          var uluru = {lat: -25.363, lng: 131.044};



          var marker = new google.maps.Marker({
            position: uluru,
            map: map
          });

      //
      // })

      // }



    //
    // });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed. ' :
    'Error: Your browser doesn\'t support geolocation.');
}
