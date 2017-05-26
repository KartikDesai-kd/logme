import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivityService{
      constructor(private http:Http){
          console.log('Activity Service Initialized...');
      }

      addActivity(newActivity){
          var headers=new Headers();
          headers.append('Content-Type','application/json');
          return this.http.post('http://localhost:3000/apiactivity/addactivity',JSON.stringify(newActivity),{headers:headers})
              .map(res=>res.json());
      }

       deleteTask(id){
        
        return this.http.delete('http://localhost:3000/apiactivity/deletetask/'+id)
            .map(res => res.json());
    }

    editActivity(task){
        var headers = new Headers();
        
        headers.append('Content-Type', 'application/json');
        return this.http.put('/apiactivity/edittask/'+task._id, JSON.stringify(task), {headers: headers})
            .map(res => res.json());
    }

}     