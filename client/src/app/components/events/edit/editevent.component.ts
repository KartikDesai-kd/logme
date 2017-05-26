import { Component } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivityService } from '../../../services/events/activity.service';
import {Activity} from '../../../events/activity';
import {EventService } from '../../../services/events/event.service';

@Component({
  moduleId:module.id,
  selector: 'editevent',
  templateUrl:'editevent.component.html'

})

export class EditeventComponent  {
         complexForm : FormGroup;
         id:string;
         activity:string;
         firstname:string;
         lastname:string;
         loggedin:number;
         constructor(private route: ActivatedRoute,fb: FormBuilder,private eventService:EventService,private activityService:ActivityService,private router: Router) 
         {
                console.log("edit initialized");
                this.complexForm = fb.group({
                 // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
               'activity' : [null, Validators.required]
              });
         }   

        ngOnInit() {
          this.id = this.route.snapshot.queryParams['id'];
          this.activity = this.route.snapshot.queryParams['activity'];

            this.eventService.getTasksid(this.id)
            .subscribe(events=>{
               this.events=events;      
               this.loggedin=this.events[0].loggedin;
          
            });

        
          this.firstname=localStorage.getItem('firstname');
          this.lastname=localStorage.getItem('lastname');
       }

     
     editActivity(){
        var task = {
            _id:this.id,
            username:localStorage.getItem('currentUser'),
            activity: this.activity,
            loggedin:this.loggedin
        };
       
        this.activityService.editActivity(task).subscribe(data => {
            this.router.navigate(['/events'],{ queryParams: { valid:true}})
        });
    }
    submitForm(value: any){
  console.log(value);
} 
}    