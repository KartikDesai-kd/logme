import { Component } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup/signup.service';
import {Signup} from '../../signup/signup';

@Component({
  moduleId:module.id,
  selector: 'signup',
  templateUrl:'signup.component.html'

})

export class SignupComponent  {
   complexForm : FormGroup;
    signupinfo: Signup[];
    firstname:string;
    lastname:string;
    email:string;
    username:string;
    password:string;
     status:string;
    valid: boolean=false;
   // router: Router;
   constructor(fb: FormBuilder,private signupService:SignupService,private router: Router){
    
     let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    this.complexForm = fb.group({
    // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
    'firstname' : [null, Validators.required],
    // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
    'lastname': [null, Validators.required],
    'email' : [null, Validators.compose([Validators.required,Validators.pattern(emailRegex)])],
    'username' : [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    'password' :[null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
  })
}    

  

 addTask(event){
       event.preventDefault();
       console.log(this.firstname);
        localStorage.setItem('currentUser',this.username);
       var newSignup={
           firstname:this.firstname,
           lastname:this.lastname,
           email:this.email,
           username:this.username,
           password:this.password
       }
      
      this.signupService.editProfile()
            .subscribe(events=>{
                this.events="";
                this.events=events;
              
              if(this.events==null)
                {
                  this.valid=false;
                  this.signupService.addTask(newSignup)
                 .subscribe(signup=>{
             
               localStorage.setItem('currentUser',this.username);
               localStorage.setItem('firstname',this.firstname);
               localStorage.setItem('lastname',this.lastname);
               this.firstname='';
               this.lastname='';
               this.email='';
               this.username='';
               this.password='';
               
                let navigationExtras: NavigationExtras = {
                queryParams: {
                "user": "yes" 
            }
        };
    
          this.router.navigate(['/events'],{ queryParams: { valid:true}})
            
           }); 
                }
                else
                {
                    this.valid=true;
                }
      
            });
   
    }

submitForm(value: any){
  console.log(value);
} 
}