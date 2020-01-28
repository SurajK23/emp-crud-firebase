import { Injectable } from '@angular/core';
import { Emp } from '../class/emp';
import { EmpArrayService } from './emp-array.service'

@Injectable({
  providedIn: 'root'
})
export class EmpArrayMethodsService {

  constructor(private emp : EmpArrayService) { }

  public add( postdata:Emp){
    this.emp.empData.push(postdata);
    console.log("Data added sucessesfully");
  }
  public delete(pos:number){
    this.emp.empData.splice(pos,1);
    console.log('delete');
  }
}
