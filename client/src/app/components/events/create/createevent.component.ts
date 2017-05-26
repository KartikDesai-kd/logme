import { Component } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivityService } from '../../../services/events/activity.service';
import {Activity} from '../../../events/activity';


@Component({
  moduleId:module.id,
  selector: 'createevent',
  templateUrl:'createevent.component.html'

})

export class CreateeventComponent  {

    complexForm : FormGroup;
    activityinfo: Activity[];
    username:string;
    activity:string;
    loggedin:number=0;
    activitytime:Date;
    firstname:string;
    lastname:string;
    constructor(fb: FormBuilder,private activityService:ActivityService,private router: Router){
    
    this.complexForm = fb.group({
    // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
    'activity' : [null, Validators.required]
  })

      this.firstname=localStorage.getItem('firstname');
       this.lastname=localStorage.getItem('lastname');
}    
   

addActivity(event){
       event.preventDefault();
       console.log(this.activity);
       var newActivity={
           username:localStorage.getItem('currentUser'),
           activity:this.activity,
           loggedin:this.loggedin
       }
      
       this.activityService.addActivity(newActivity)
           .subscribe(activity=>{
            
               this.activity='';   
               this.router.navigate(['/events'],{ queryParams: { valid:true}})
            });
 
    }

submitForm(value: any){
  console.log(value);
} 
}