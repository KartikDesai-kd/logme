import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home/home.component';
import { SignupComponent }  from './components/signup/signup.component';
import { EditprofileComponent }  from './components/signup/editprofile.component';
import { SigninComponent }  from './components/signin/signin.component';
import { ChangepasswordComponent }  from './components/signin/changepassword.component';
import { EventsComponent }  from './components/events/events.component';
import { LearnmoreComponent }  from './components/learnmore/learnmore.component';
import { CreateeventComponent }  from './components/events/create/createevent.component';
import { EditeventComponent }  from './components/events/edit/editevent.component';
import { ViewactivityComponent }  from './components/events/view/viewactivity.component';
import { ViewoccurrenceComponent }  from './components/events/view/viewoccurrence.component';

import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, HttpModule,routing  ],
  declarations: [ AppComponent,HomeComponent,SignupComponent,SigninComponent,EventsComponent,LearnmoreComponent,CreateeventComponent,EditeventComponent,ViewactivityComponent,ViewoccurrenceComponent,EditprofileComponent,ChangepasswordComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
