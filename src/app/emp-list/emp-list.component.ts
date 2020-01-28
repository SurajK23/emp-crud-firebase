import { Component, OnInit } from '@angular/core';
import {EmpArrayService} from '../services/emp-array.service'
import {EmpArrayMethodsService} from '../services/emp-array-methods.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
public earray = [];
  constructor(private emplist : EmpArrayService,private empdelete:EmpArrayMethodsService) { }

  ngOnInit() {
    this.earray=this.emplist.empData;
    console.log(this.earray);
  }
  delete(pos:number){
    this.empdelete.delete(pos);
    //alert(pos);
  }
}
