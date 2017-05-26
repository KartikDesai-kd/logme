import { Component } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {EventService } from '../../services/events/event.service';
import {ActivityService } from '../../services/events/activity.service';
import {Event} from '../../events/event';

@Component({
  moduleId:module.id,
  selector: 'events',
  templateUrl:'events.component.html'

})

export class EventsComponent  {
        valid: boolean=false;
         events: Event[];
         firstname:string;
         lastname:string;
       
       constructor(private route: ActivatedRoute,private eventService:EventService,private router: Router,private activityService:ActivityService) {
        
          this.eventService.getTasks()
            .subscribe(events=>{
                this.events=events;
              
            });
       }
       ngOnInit() {
        // Capture the token  if available
     
       this.firstname=localStorage.getItem('firstname');
       this.lastname=localStorage.getItem('lastname');
       this.valid = this.route.snapshot.queryParams['valid'];
    
    }
    
    editlog(task){
        var logcount=parseInt(task.loggedin)+1;
      
        var _task = {
            _id:task._id,
            username: task.username,
            activity: task.activity,
            loggedin:logcount
        };
        
        this.activityService.editActivity(_task).subscribe(data => {
          
            this.eventService.getTasks()
            .subscribe(events=>{
                this.events=events;
             
            });
           this.router.navigate(['/events'],{ queryParams: { valid:true}})
        });
    }

    viewoccurrence(occur){
               
              this.router.navigate(['/viewoccurrence'],{ queryParams: { id:occur}})
    } 
}