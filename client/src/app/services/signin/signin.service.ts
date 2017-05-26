import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SigninService{
      constructor(private http:Http){
          console.log('Signin Service Initialized...');
      }

      login(newTask){
         var headers=new Headers();
          headers.append('Content-Type','application/json');
          return this.http.post('http://localhost:3000/api/login',JSON.stringify(newTask),{headers:headers})
              .map(res=>res.json());
      }

       editPassword(){
          
          return this.http.get('http://localhost:3000/api/edit/'+localStorage.getItem('currentUser'))
              .map(res=>res.json());
      }

      editPwd(task){
        var headers = new Headers();
        
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/editaccount/'+task._id, JSON.stringify(task), {headers: headers})
            .map(res => res.json());
    }
}      