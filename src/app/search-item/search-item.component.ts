import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
 import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';


// import { Student } from '../student';
@Component({
  selector: 'search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
   @BlockUI() blockUI: NgBlockUI;

 private listItem : any = [];
private flag: any = true;

ngOnInit() {

}

 constructor(private studentservice:StudentService,private spinnerService: Ng4LoadingSpinnerService,private router: Router
) { }


 public backToLandingPage(){
  this.router.navigate(['']);
 }

public onClickMe (item : any) :any{
	  this.spinnerService.show();

		this.flag = false;

	this.listItem = [];
    //this.blockUI.start("Please wait we are fetching data");



	this.studentservice.getItemFromAmazon(item)
      .subscribe(
        data => {
          this.listItem=data 
this.flag = true;
this.spinnerService.hide();
               // this.blockUI.stop();
          
        },
        error => console.log(error));
            //this.blockUI.stop();
           // this.spinnerService.hide()
            this.flag = true;



  

}




}