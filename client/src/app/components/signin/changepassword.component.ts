import { Component } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SigninService } from '../../services/signin/signin.service';
import {Signin} from '../../signup/signin';

@Component({
  moduleId:module.id,
  selector: 'chnagepassword',
  templateUrl:'changepassword.component.html'

})

export class ChangepasswordComponent  {
 complexForm : FormGroup; 
 events: Signin[];
 firstname:string;
 lastname:string;
 email:string;
 username:string;
 password:string;
 id:string;
 constructor(fb: FormBuilder,private route: ActivatedRoute,private signinService:SigninService,private router: Router) {
        
    this.complexForm = fb.group({
    // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
    'password' :[null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
  });
       
         console.log("in const");
          this.signinService.editPassword()
            .subscribe(events=>{
                this.events=events;
              
                this.id=this.events._id;
               this.firstname=this.events.firstname;
               this.lastname=this.events.lastname;
               this.email=this.events.email;
               this.username=this.events.username;
               this.password=this.events.password;
            });
        
       }

 editPwd(){
     
        var task = {
            _id:this.id,
            firstname: this.firstname,
           lastname: this.lastname,
            email: this.email,
             username: this.username,
            password: this.password
        };
        
        this.signinService.editPwd(task).subscribe(data => {
            this.router.navigate(['/events'],{ queryParams: { valid:true}})
        });
    }
       submitForm(value: any){
       console.log(value);
   } 
}    