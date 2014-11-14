'use strict';
/**
 * @ngdoc service
 * @name app.googleMaps
 * @description
 * # googleMaps
 */
angular.module('eventsApp')
  .factory('googleMaps', [ function () {
    // Service logic
    // ...

    var map, position, arrayPos, activeInfoWindow;
    
    var mapOptions = {
        zoom: 15
    };

    var markers = new Array();
    var icon;


    // Public API here
    var gMap = {
      
      showMap: function() {        

        mapOptions.center = position;

        gMap.setMap();

        gMap.increaseArrayPos();
      },

      setPosition: function(coordinates) {
        position = new google.maps.LatLng(coordinates[0],coordinates[1]);
      },

      setMap: function() {
        map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
      },

      increaseArrayPos: function() {
        
        (arrayPos === undefined) ? arrayPos = 0 : ++arrayPos;

        gMap.createMarker();

      },

      createMarker: function() {
        markers[arrayPos] = {};
      },

      setTitle: function(_title) {
        markers[arrayPos].title = _title;
      },

      setContents: function(_contents) {
        markers[arrayPos].contents = _contents;
      },

      addMarkersToMap: function() {

        //var myIcon = new google.maps.MarkerImage(icon, null, null, null, new google.maps.Size(31,40));
        
        markers[arrayPos].marker = new google.maps.Marker({
          position: position,
          map: map,
          title: markers[arrayPos].title
          //icon:myIcon
        });

        if('contents' in markers[arrayPos]) 
          gMap.addInfoWindowToMarket();
      },

      addInfoWindowToMarket: function() {

        var p = arrayPos;

        var infowindow = new google.maps.InfoWindow({
            content: markers[arrayPos].contents
        });
        
        google.maps.event.addListener(markers[arrayPos].marker, 'click', function() {
          
          if (typeof(activeInfoWindow) != 'undefined') {
            activeInfoWindow.close();
          }

          activeInfoWindow = infowindow;
          infowindow.open(map,markers[p].marker);
            
        });

        gMap.increaseArrayPos();
      }

    };


    return gMap;
  }]);
