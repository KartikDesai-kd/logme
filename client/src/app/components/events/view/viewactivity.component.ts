import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router,NavigationExtras } from '@angular/router';
import { ActivityService } from '../../../services/events/activity.service';

@Component({
  moduleId:module.id,
  selector: 'viewactivity',
  templateUrl:'viewactivity.component.html'

})

export class ViewactivityComponent  {
         id:string;
         activity:string;
         views:string[];
         firstname:string;
         lastname:string;
         constructor(private activityService:ActivityService,private router: Router,private route: ActivatedRoute)
         {
             

         }   
        ngOnInit() {
              
              this.id = this.route.snapshot.queryParams['id'];
              this.activity = this.route.snapshot.queryParams['activity'];
              this.views= { id: this.id,activity:this.activity};
              this.firstname=localStorage.getItem('firstname');
              this.lastname=localStorage.getItem('lastname');
          }

        deleteTask(){
              this.activityService.deleteTask(this.id).subscribe(data => {
             this.router.navigate(['/events'],{ queryParams: { valid:true}})
        });
    } 

        editTask(){   
              this.router.navigate(['/editevent'],{ queryParams: { id:this.id,activity:this.activity}})
    } 
}    