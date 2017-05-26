import { Component } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SigninService } from '../../services/signin/signin.service';
import {Signin} from '../../signin/signin';

@Component({
  moduleId:module.id,
  selector: 'signin',
  templateUrl:'signin.component.html'

})

export class SigninComponent  {
   complexForm : FormGroup;
    signininfo: Signin[];
    username:string;
    password:string;     
     status:string;
    constructor(fb: FormBuilder,private signinService:SigninService,private router: Router)
    {
         
          this.complexForm = fb.group({
          // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
           'username' : [null, Validators.required],
           'password' : [null, Validators.required]
  });

    }

    login(event)
    {
       
      event.preventDefault();
       var newLogin={
           username:this.username,
           password:this.password
       }
       this.signinService.login(newLogin)
           .subscribe(
             signin=>{
              
                this.signininfo=signin;
               
              if(this.signininfo.length>0)
              {
                  localStorage.setItem('currentUser',this.username);
                  localStorage.setItem('firstname',signin[0].firstname);
                  localStorage.setItem('lastname',signin[0].lastname);
                  this.username='';
                  this.password='';
                
                  this.router.navigate(['/events'],{ queryParams: { valid:true}})
              }
             });
    }

    submitForm(value: any){
  console.log(value);
} 
}