import { Injectable } from '@angular/core';
import { Emp } from '../class/emp'; 

@Injectable({
  providedIn: 'root'
})
export class EmpArrayService {

  constructor() { }
    empData : Emp [] = [ ];
  
 
}
