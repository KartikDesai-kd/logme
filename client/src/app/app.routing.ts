import {ModuleWithProviders} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'

import {HomeComponent} from './components/home/home.component';
import {SignupComponent} from './components/signup/signup.component';
import {EditprofileComponent} from './components/signup/editprofile.component';
import {SigninComponent} from './components/signin/signin.component';
import {ChangepasswordComponent} from './components/signin/changepassword.component';
import {EventsComponent} from './components/events/events.component';
import {LearnmoreComponent} from './components/learnmore/learnmore.component';
import {CreateeventComponent} from './components/events/create/createevent.component';
import {EditeventComponent} from './components/events/edit/editevent.component';
import {ViewactivityComponent} from './components/events/view/viewactivity.component';
import {ViewoccurrenceComponent} from './components/events/view/viewoccurrence.component';

const appRoutes: Routes=[
     {
        path:'',
        component: HomeComponent
        
     },
     {
         path:'signup',
        component: SignupComponent
     },
     {
         path:'signin',
        component: SigninComponent
     },
     {
         path:'events',
        component: EventsComponent
     },
     {
         path:'learnmore',
        component: LearnmoreComponent
     },
     {
         path:'createevent',
        component: CreateeventComponent
     },
     {
         path:'editevent',
        component: EditeventComponent
     },
     {
         path:'viewactivity',
        component: ViewactivityComponent
     },
     {
         path:'viewoccurrence',
        component: ViewoccurrenceComponent
     },
     {
         path:'editprofile',
        component: EditprofileComponent
     },
     {
         path:'editpassword',
        component: ChangepasswordComponent
     }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);