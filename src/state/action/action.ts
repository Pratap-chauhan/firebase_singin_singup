import { Action } from '@ngrx/store'

export const ActionTypes = {
  "LOCATION_UPDATED" : "LOCATION_UPDATED",
  "PLACE_ID" : "PLACE_ID",
}


export class LocationUpdateAction implements Action{
  type = ActionTypes.LOCATION_UPDATED;
  constructor(public payload : null ){}
}



export class PlaceIdAction implements Action{
  type = ActionTypes.PLACE_ID;
  constructor(public payload : null ){}
}






export type Action = LocationUpdateAction |PlaceIdAction ;





