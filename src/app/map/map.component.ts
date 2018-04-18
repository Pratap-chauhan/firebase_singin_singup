import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
//import { LocationStore, AppState } from '../../state/reducer/reducer';
import { Action, ActionReducer } from '@ngrx/store'
import { ActionTypes } from '../../state/action/action';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { CurrentlocationService } from '../currentlocation.service';
declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})



export class MapComponent implements OnInit {

  lat;
  lng;
  places_details;
  current_place_id;
  directionsDisplay;
  directionsService;
 des;
  constructor(private locationservice: CurrentlocationService, private http: Http, ) {
    this.locationservice.getCurrentlocation();
  }

  ngOnInit() {

    // this.store.select('LocationStore').subscribe(
    //   (state: AppState) => {
    //     console.log("state", state);
    //     this.initMap(state);
    //   });

  }




  initMap(state) {
    var latlng = {lat: parseFloat(state.lat), lng: parseFloat(state.lng)};
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.directionsService = new google.maps.DirectionsService();
    var uluru = { lat: state.lat, lng: state.lng };
    var map = new google.maps.Map(document.getElementById('map'), 
    {
      zoom: 15,
     // center: uluru,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
    console.log(map);
    this.directionsDisplay.setMap(map);
    map.setCenter(uluru);

    var searchBox = new google.maps.places.SearchBox(document.getElementById('pac-input'));
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('pac-input'));
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.current_place_id);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.des);

    var geocoder = new google.maps.Geocoder; 
    geocoder.geocode({'location': latlng},(results, status)=> {
          if (status === google.maps.GeocoderStatus.OK) {
          if (results[1]) {
            this.current_place_id =results[1].place_id; 
            console.log(this.current_place_id);
    }
  }
});

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', () => {
      searchBox.setBounds(map.getBounds());
    });
    var markers = [];
    google.maps.event.addListener(searchBox, 'places_changed', () => {
      searchBox.set('map', null);
      console.log("searchbox", searchBox);
      var places = searchBox.getPlaces();
      this.places_details = places;
      console.log(places);
      markers.forEach(function (marker) {

        marker.setMap(null);

      });
      var request={
        location: uluru,
        radius: '500',
        type: ['restaurant']
      };
     var  service = new google.maps.places.PlacesService(map);
     service = new google.maps.places.PlacesService(map);
     service.nearbySearch(request, this.callback);
      console.log(service);


      markers = [];

      var bounds = new google.maps.LatLngBounds();
      console.log("bounds", bounds);
      places.forEach(function (place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }

        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          console.log("geometry", place.geometry.viewport);
          bounds.union(place.geometry.viewport);
          console.log("bounds.union", place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
          console.log(bounds.extend(place.geometry.location));
        }
      });

      map.fitBounds(bounds);

    });
  }

  selected_location_detail(d)
  {
   
    this.des= this.places_details[d].place_id;
  console.log(this.places_details[d].id,"vyx",this.current_place_id);
  
    this.directionsService.route({
      origin: {'placeId': this.current_place_id},
      destination: {'placeId': this.des},
      travelMode: "DRIVING"
    }, (response, status) =>{
      if (status === 'OK') {
        console.log(response);
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });


  }



 callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
   console.log(results);
      }
  
}
}