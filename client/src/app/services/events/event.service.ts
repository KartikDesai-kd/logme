import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService{
      constructor(private http:Http){
          console.log('Event Service Initialized...');
      }

      getTasks(){
          
          return this.http.get('http://localhost:3000/apiactivity/activity/'+localStorage.getItem('currentUser'))
              .map(res=>res.json());
      }

     getTasksid(id){
          
          return this.http.get('http://localhost:3000/apiactivity/activitybyid/'+id)
              .map(res=>res.json());
      }
}     