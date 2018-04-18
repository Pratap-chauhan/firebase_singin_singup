import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Store } from '@ngrx/store';
import { Action, ActionReducer } from '@ngrx/store';
import { ActionTypes } from '../state/action/action';
import { LocationStore, initialState, AppState } from '../state/reducer/reducer';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

declare var google;

@Injectable()
export class CurrentlocationService {
  lat;
  lng;
 


  constructor(private http: Http, private store: Store<AppState>) { }

  getCurrentlocation() {

    let promise = new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log("position", position);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.lat + ',' + this.lng + '&key=AIzaSyBVoOwel3BKUNlfR5q73s0id3XTMwb75Cs')
            .toPromise()
            .then(res => {
              this.store.dispatch({ type: ActionTypes.LOCATION_UPDATED, payload: ({ 'lat': this.lat, 'lng': this.lng }) });
            })
        })
      }
    })
  }

}