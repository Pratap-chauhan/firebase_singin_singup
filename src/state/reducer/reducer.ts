 import  { Action , ActionReducer} from '@ngrx/store';


 export const  initialState : any = {
    lat: '',
    lng:'', 
  place_id:'',
   
   };

export interface  AppState {
  
 lat : '',
lng:''
place_id:'',

};





export const LocationStore  : ActionReducer<AppState> = (state = initialState ,  action : Action) =>  {
   switch (action.type) {
           case 'LOCATION_UPDATED':
           console.log(action);
             return Object.assign({}, state , 
              // {
              //  'lat' :  action.payload.lat,'lng': action.payload.lng} 
              );

             case 'PLACE_ID':
             return Object.assign({}, state , 
            //   {'place_id' : action.payload} 
            );

              //console.log(state);
   // return Object.assign({}, state, action.payload);
  //      case 'ALL_AREA_SERVICES_PROVIDE':
  //      const allLocations = action.payload;
  //      return Object.assign({}, state , { allLocations : allLocations});
  //        // console.log(action.payload);
  //        case 'PRICE_UPDATE':
  //        const Price = action.payload;
  //      console.log(action.payload);
  //      return Object.assign({}, state,{ Price : Price})

  // //return 'dfdgddf';
  //   // Final Data {city : 'chandigarh' ,state : 'chandi'}
  //   // Final Data 
    default :
    return state;
}
} 