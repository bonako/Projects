  var firebaseConfig = {
     apiKey: "AIzaSyDQ62BC1Gcg-tJJgl7rkqxuDO8x7cSP_08",
     authDomain: "parkingrabbit-bf78a.firebaseapp.com",
     databaseURL: "https://parkingrabbit-bf78a.firebaseio.com",
     projectId: "parkingrabbit-bf78a",
     storageBucket: "parkingrabbit-bf78a.appspot.com",
     messagingSenderId: "94492827210",
     appId: "1:94492827210:web:43ef5ed366dac05eb2d0b3"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


var data = {sender: null, timestamp: null, lat: null, lng: null};
var infoWindow;
var iw, m;
var prev_infowindow = false;
var markers = [];
var tempMarkers = [];
var markerCluster;
var minZoomLevel = 10;
var icon = {
    url: "https://img.icons8.com/doodle/48/000000/car--v1.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(25,25) // anchor
};
var iconSet = {
    url: "https://img.icons8.com/flat_round/64/000000/plus.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(25,25) // anchor
};

var mStyles = {styles: [{
  height: 53,
  url: "https://library.kissclipart.com/20180901/hlq/kissclipart-icona-onde-radio-clipart-computer-icons-radio-wave-82fca435d36a0a09.jpg",
  width: 53
}]};

var map;
var onMap = false;
var placeMarkers = [];
var current;

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var btn = document.getElementById("myBtn");


function clearMap() {
  tempMarkers.forEach(function(marker) {
    marker.setMap(null);
  });
  deleteMarker();
  placeMarkers.forEach(function(marker) {
    marker.setMap(null);
  });

}

function deleteMarker() {
        for (var idx = 0; idx < tempMarkers.length; idx++) {
          tempMarkers[idx].setMap(null);
        }
        onMap = false;
}

/**
       * Creates a map object with a click listener and a heatmap.
       */
      function initMap() {

        var clicks = firebase.database().ref('register');

        clicks.on("child_added", function(snapshot) {
          var newPosition = snapshot.val();
          // var latLng = new google.maps.LatLng(snapshot.val().lat,snapshot.val().lng);
          // var marker = new google.maps.Marker({position: latLng, map: map, icon: icon});

          if ((Date.now() - newPosition.timestamp) > 86400000) {
            snapshot.ref.remove();

            var latLng = new google.maps.LatLng(snapshot.val().lat,snapshot.val().lng);
            markers.forEach((item, i) => {
              if (markers[i].position == latLng) {
                markers[i] = null;
              }
            });
          } else {
            var latLng = new google.maps.LatLng(snapshot.val().lat,snapshot.val().lng);

            var marker = new google.maps.Marker({position: latLng, map: map, icon: icon});
            marker.infowindow = new google.maps.InfoWindow({content: ""});
            marker.infowindow.setContent(/*"Name: " + newPosition.name  + */"Phone number: " + newPosition.phone + "<br>Parking cost for 1 hr: $" + newPosition.cost + "<br>" + '<style>.wrapper {text-align: center;}</style><br><div class="wrapper"><input type="button" value="Street View" onclick="streetView()"></div>'); //+ "<br>Allowed vehicles: " + "<br>Bicycles: " + newPosition.bi + "<br>Motorcycles: " + newPosition.mc + "<br>Cars: " + newPosition.ca + "<br>Pickup trucks: " + newPosition.pt + "<br>Trucks: " + newPosition.tr + "<br>Boats: " + newPosition.bo);



            marker.addListener('click', function() {
              if (prev_infowindow) {
                prev_infowindow.close();
              }
              sessionStorage.lat = marker.getPosition().lat();
              sessionStorage.lng = marker.getPosition().lng();
              prev_infowindow = marker.infowindow;
              marker.infowindow.open(map, marker);
            });
            // marker.addListener('click', function() {
            //   marker.infowindow = new google.maps.InfoWindow({content: ""});
            //   if (prev_infowindow) {
            //     prev_infowindow.close()
            //   }
            //   var register = firebase.database().ref('register');
            //   register.once('value').then(function(snapshot) {
            //     var user = snapshot.val();
            //     if (user.lat == newPosition.lat && user.lng == newPosition.lng) {
            //       marker.infowindow.setContent(user);
            //     }
            //   });
            //   prev_infowindow = marker.infowindow;
            //   marker.infowindow.open(map, marker);
            // });
            markers.push(marker);
          }
        });

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2093},
          zoom: 14,
          styles: [{
            featureType: 'poi',
            stylers: [{ visibility: 'off' }]  // Turn off POI.
          },
          {
            featureType: 'transit.station',
            stylers: [{ visibility: 'off' }]  // Turn off bus, train stations etc.
          }],
          disableDoubleClickZoom: true,
          streetViewControl: true,
          mapTypeControl: false,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain'],
            position: google.maps.ControlPosition.LEFT_BOTTOM
          }
        });

        var opt = { minZoom: 10, maxZoom: 14 };
        map.setOptions(opt);

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            map.setCenter(pos);
            current = new google.maps.Marker({position: pos,map: map});
            current.addListener('click', function() {
              current.infowindow = new google.maps.InfoWindow({content: "You are here."});
              if (prev_infowindow) {
                prev_infowindow.close();
              }
              prev_infowindow = current.infowindow;
              current.infowindow.open(map, current);
            });

          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }



        var input = document.getElementById('pac-input');
        var clear = document.getElementById('clearmap');
        var cl = document.getElementById('cl');
        var bt = document.getElementById('myBtn');

        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(clear);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(cl);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(bt);

        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          placeMarkers.forEach(function(marker) {
            marker.setMap(null);
          });

          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon2 = {
              url: place.icon,
              //size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(12.5, 12.5),
              scaledSize: new google.maps.Size(25, 25)
            };

            var request = {
              placeId: place.place_id,
              fields: ['name', 'formatted_address', 'place_id', 'geometry']
            };

            iw = new google.maps.InfoWindow();
            var service = new google.maps.places.PlacesService(map);

            m = new google.maps.Marker({
              map: map,
              icon: icon2,
              title: place.name,
              position: place.geometry.location
            });

            // Create a marker for each place.
            placeMarkers.push(m);
            google.maps.event.addListener(m, 'click', function() {
                          iw.setContent('<div><strong>' + place.name + '</strong><br>' +
                          'Hours: ' + place.opening_hours + '<br>' +
                            place.formatted_address + '</div>');
                          iw.open(map, this);
                        });


            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);

        });

        // Create the DIV to hold the control and call the makeInfoBox() constructor
        // passing in this DIV.
        var infoBoxDiv = document.createElement('div');
        makeInfoBox(infoBoxDiv, map);
        map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(infoBoxDiv);

        // // Limit the zoom level
        // google.maps.event.addListener(map, 'zoom_changed', function() {
        //   if (map.getZoom() < minZoomLevel) map.setZoom(minZoomLevel);
        // });
        // map.addListener('zoom_changed', function(e) {
        //   if (map.getZoom() < minZoomLevel) {
        //     map.setZoom(minZoomLevel);
        //   }
        // });

        // Listen for clicks and add the location of the click to firebase.
        map.addListener('dblclick', function(e) {
          openWin();
        //   if (!onMap) {
        //   data.lat = e.latLng.lat();
        //   data.lng = e.latLng.lng();
        //   var latLng = new google.maps.LatLng(data.lat,data.lng);

        //   var marker = new google.maps.Marker({map: map, position: latLng, icon: iconSet, draggable: true});
        //   onMap = true;
        //   sessionStorage.lat = data.lat;
        //   sessionStorage.lng = data.lng;

        //   google.maps.event.addListener(marker, 'dragend', function(evt){
        //     sessionStorage.lat = evt.latLng.lat();
        //     sessionStorage.lng = evt.latLng.lng();
        //   });

        //   tempMarkers.push(marker);
        //   addToFirebase(data);

        //   marker.addListener('click', function() {
        //     // marker.infowindow = new google.maps.InfoWindow("form2.html");
        //     marker.infowindow = new google.maps.InfoWindow({content: '<style>.wrapper {text-align: center;}</style><form><div><input type="button" value="Register" onclick="openWin()"></div><br><div class="wrapper"><input type="button" value="Delete" onclick="deleteMarker()"></div></form>'});
        //     if (prev_infowindow) {
        //       prev_infowindow.close();
        //     }
        //     prev_infowindow = marker.infowindow;
        //     marker.infowindow.open(map, marker);
        //   });
        // }
        });
        markerCluster = new MarkerClusterer(map, markers, mStyles);


        // Create a heatmap.
        var heatmap = new google.maps.visualization.HeatmapLayer({
          data: [],
          map: map,
          radius: 16
        });


        initFirebase(map);
        /**
        initAuthentication(initFirebase.bind(undefined, heatmap));
        */

      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

      /**
       * Set up a Firebase with deletion on clicks older than expiryMs
       * @param {!google.maps.visualization.HeatmapLayer} heatmap The heatmap to
       */
      function initFirebase(map) {

        // 10 minutes before current time.
        var startTime = new Date().getTime() - (60 * 10 * 1000);

        // Reference to the clicks in Firebase.
        var clicks = firebase.database().ref('clicks');

        // Listen for clicks and add them to the heatmap.
        clicks.orderByChild('timestamp').startAt(startTime).on('child_added',
          function(snapshot) {
            // Get that click from firebase.
            var newPosition = snapshot.val();
            var point = new google.maps.LatLng(newPosition.lat, newPosition.lng);
            var elapsedMs = Date.now() - newPosition.timestamp;

            // Add the point to the heatmap.
            heatmap.getData().push(point);

            // Request entries older than expiry time (10 minutes).
            var expiryMs = Math.max(60 * 10 * 1000 - elapsedMs, 0);

            // Set client timeout to remove the point after a certain time.
            window.setTimeout(function() {
              // Delete the old point from the database.
              snapshot.ref.remove();
            }, expiryMs);
          }
        );

        // Remove old data from the heatmap when a point is removed from firebase.
        clicks.on('child_removed', function(snapshot, prevChildKey) {
          var heatmapData = heatmap.getData();
          var i = 0;
          while (snapshot.val().lat != heatmapData.getAt(i).lat()
            || snapshot.val().lng != heatmapData.getAt(i).lng()) {
            i++;
          }
          heatmapData.removeAt(i);
        });
      }

      /**
       * Updates the last_message/ path with the current timestamp.
       * @param {function(Date)} addClick After the last message timestamp has been updated,
       *     this function is called with the current timestamp to add the
       *     click to the firebase.
       */
      function getTimestamp(addClick) {
        // Reference to location for saving the last click time.
        var ref = firebase.database().ref('last_message/' + data.sender);

        ref.onDisconnect().remove();  // Delete reference from firebase on disconnect.

        // Set value to timestamp.
        ref.set(firebase.database.ServerValue.TIMESTAMP, function(err) {
          if (err) {  // Write to last message was unsuccessful.
            console.log(err);
          } else {  // Write to last message was successful.
            ref.once('value', function(snap) {
              addClick(snap.val());  // Add click with same timestamp.
            }, function(err) {
              console.warn(err);
            });
          }
        });
      }

      /**
       * Adds a click to firebase.
       * @param {Object} data The data to be added to firebase.
       *     It contains the lat, lng, sender and timestamp.
       */
      function addToFirebase(data) {
        getTimestamp(function(timestamp) {
          // Add the new timestamp to the record data.
          data.timestamp = timestamp;
          var ref = firebase.database().ref('clicks').push(data, function(err) {
            if (err) {  // Data was not written to firebase.
              console.warn(err);
            }
          });
        });
      }

            function streetView() {
        var panorama;
        panorama = new google.maps.StreetViewPanorama(
            document.getElementById('map'),
            {
              position: new google.maps.LatLng(sessionStorage.lat, sessionStorage.lng),
              pov: {heading: 165, pitch: 0},
              zoom: 1
          });
      }