import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService } from '../../../services/events/event.service';
@Component({
  moduleId:module.id,
  selector: 'viewoccurrence',
  templateUrl:'viewoccurrence.component.html'

})

export class ViewoccurrenceComponent  {
   activity:string;
   loggedin:number;
   firstname:string;
   lastname:string;
   id:string;
    constructor(private route: ActivatedRoute,private eventService:EventService)
         {
            
         }   
        ngOnInit() {
              this.id=this.route.snapshot.queryParams['id'];
              this.firstname=localStorage.getItem('firstname');
              this.lastname=localStorage.getItem('lastname');
               this.eventService.getTasksid(this.id)
            .subscribe(events=>{
                this.events=events;
               this.activity=this.events[0].activity;
               this.loggedin=this.events[0].loggedin;
               
            });
          }
}    