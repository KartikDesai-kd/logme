import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService{
      constructor(private http:Http){
          console.log('Signup Service Initialized...');
      }

      addTask(newTask){
          var headers=new Headers();
          headers.append('Content-Type','application/json');
          return this.http.post('http://localhost:3000/api/signup',JSON.stringify(newTask),{headers:headers})
              .map(res=>res.json());
      }

        editProfile(){
          
          return this.http.get('http://localhost:3000/api/edit/'+localStorage.getItem('currentUser'))
              .map(res=>res.json());
      }

      

       editUser(task){
        var headers = new Headers();
        
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/editaccount/'+task._id, JSON.stringify(task), {headers: headers})
            .map(res => res.json());
    }

}     