/// <reference types="@types/googlemaps" />


import { Component, OnInit,ViewChild, EventEmitter, Output, AfterViewInit, Input  } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Observable,Subject } from "rxjs";

import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';


//import { } from 'googlemaps';


@Component({
  selector: 'outingpanda-landing',
  templateUrl: './outingpanda-landing.component.html',
  styleUrls: ['./outingpanda-landing.component.css']
})
export class OutingpandaLandingComponent implements OnInit,AfterViewInit {
//@ViewChild("placesRef") placesRef : GooglePlaceDirective;

imageSrc = 'assets/pandalogo.png' ;
imageAlt = 'pandalogo';


private formatedAddress : any ='';

options = {



}


  // @Input() adressType: string;
  //   @Output() setAddress: EventEmitter<any> = new EventEmitter();
  //   @ViewChild('addresstext') addresstext: any;

  //   autocompleteInput: string;
  //   queryWait: boolean;


 constructor(private studentservice:StudentService, private router: Router) { }

 ngAfterViewInit() {
        //this.getPlaceAutocomplete();
    }
        public handleAddressChange(address: any) {

          this.formatedAddress = address.formatted_address;

        }


        public goToSearchPage (item : any) :any{
  this.router.navigate(['/search-item']);

  }





// private getPlaceAutocomplete() {
//         const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
//             {
//                 componentRestrictions: { country: 'US' },
//                 types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
//             });
//         google.maps.event.addListener(autocomplete, 'place_changed', () => {
//             const place = autocomplete.getPlace();
//             this.invokeEvent(place);
//         });
//     }

//     invokeEvent(place: Object) {
//         this.setAddress.emit(place);
//     }





  studentsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  students: Observable<Student[]>;
  student : Student=new Student();
  deleteMessage=false;
  studentlist:any;
  isupdated = false;    
 

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.studentservice.getStudentList().subscribe(data =>{
    this.students =data;
    this.dtTrigger.next();
    })
  }
  
  deleteStudent(id: number) {
    this.studentservice.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.studentservice.getStudentList().subscribe(data =>{
            this.students =data
            })
        },
        error => console.log(error));
  }


  updateStudent(id: number){
    this.studentservice.getStudent(id)
      .subscribe(
        data => {
          this.studentlist=data           
        },
        error => console.log(error));
  }

  studentupdateform=new FormGroup({
    student_id:new FormControl(),
    student_name:new FormControl(),
    student_email:new FormControl(),
    student_branch:new FormControl()
  });

  updateStu(updstu){
    this.student=new Student(); 
   this.student.id=this.StudentId.value;
   this.student.firstName=this.StudentName.value;
   this.student.email=this.StudentEmail.value;
   this.student.lastName=this.StudentBranch.value;
   console.log(this.StudentBranch.value);
   

   this.studentservice.updateStudent(this.student.id,this.student).subscribe(
    data => {     
      this.isupdated=true;
      this.studentservice.getStudentList().subscribe(data =>{
        this.students =data
        })
    },
    error => console.log(error));
  }

  get StudentName(){
    return this.studentupdateform.get('student_name');
  }

  get StudentEmail(){
    return this.studentupdateform.get('student_email');
  }

  get StudentBranch(){
    return this.studentupdateform.get('student_branch');
  }

  get StudentId(){
    return this.studentupdateform.get('student_id');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
}
