import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SignupService} from './services/signup/signup.service';
import {SigninService} from './services/signin/signin.service';
import {ActivityService} from './services/events/activity.service';
import {EventService} from './services/events/event.service';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers:[SignupService,SigninService,ActivityService,EventService]
})
export class AppComponent  {

        valid: boolean=false;
       constructor(private route: ActivatedRoute)
       {
       }

       ngOnInit() {
              this.valid = this.route.snapshot.queryParams['valid']
              console.log("status : "+this.valid);
       }
 
}
