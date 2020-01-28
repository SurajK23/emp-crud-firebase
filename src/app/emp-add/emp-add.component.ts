import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpArrayMethodsService } from '../services/emp-array-methods.service';
 
@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {

  constructor( private empMethod : EmpArrayMethodsService) { }

  ngOnInit() {
  }
  insertData(data:NgForm){

    let eData = {
      empName : data.value.userName,
      empEmail : data.value.email,
      empMobile : data.value.mobile,
      empDes : data.value.designation
    };
    console.log(eData);
    this.empMethod.add(eData);
  }

}
