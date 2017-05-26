import { Component } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SignupService } from '../../services/signup/signup.service';
import {Signup} from '../../signup/signup';

@Component({
  moduleId:module.id,
  selector: 'editprofile',
  templateUrl:'editprofile.component.html'

})

export class EditprofileComponent  {
 complexForm : FormGroup; 
 events: Signup[];
 firstname:string;
 lastname:string;
 email:string;
 username:string;
 password:string;
 id:string;
 constructor(fb: FormBuilder,private route: ActivatedRoute,private signupService:SignupService,private router: Router) {
    let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    this.complexForm = fb.group({
    // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
    'firstname' : [null, Validators.required],
    // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
    'lastname': [null, Validators.required],
    'email' : [null, Validators.compose([Validators.required,Validators.pattern(emailRegex)])],
    'username' : [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    'password' :[null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
  });
       
         
          this.signupService.editProfile()
            .subscribe(events=>{
                this.events=events;
               
          //     console.log("events log: "+this.events[0].loggedin);
               this.id=this.events._id;
               this.firstname=this.events.firstname;
               this.lastname=this.events.lastname;
               this.email=this.events.email;
               this.username=this.events.username;
               this.password=this.events.password;
            });
        //    console.log("events: "+this.events);
       }

   editUser(){
        var task = {
            _id:this.id,
            firstname: this.firstname,
           lastname: this.lastname,
            email: this.email,
             username: this.username,
            password: this.password
        };
        
        this.signupService.editUser(task).subscribe(data => {
               this.events=data;
               
               localStorage.setItem('firstname',task.firstname);
               localStorage.setItem('lastname',task.lastname);
            this.router.navigate(['/events'],{ queryParams: { valid:true}})
        });
    }
submitForm(value: any){
  console.log(value);
} 
}    