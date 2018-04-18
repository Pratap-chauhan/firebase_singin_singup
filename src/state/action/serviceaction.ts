import { Action } from '@ngrx/store'

export const ActionTypes = {
  "ServiceData" : "ServiceData",
  
}


export class ServiceData  implements Action{
  type = ActionTypes.ServiceData;
  constructor(public payload : any ){}
}


export type Action = ServiceData ;