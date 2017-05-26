"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var signup_component_1 = require('./components/signup/signup.component');
var editprofile_component_1 = require('./components/signup/editprofile.component');
var signin_component_1 = require('./components/signin/signin.component');
var changepassword_component_1 = require('./components/signin/changepassword.component');
var events_component_1 = require('./components/events/events.component');
var learnmore_component_1 = require('./components/learnmore/learnmore.component');
var createevent_component_1 = require('./components/events/create/createevent.component');
var editevent_component_1 = require('./components/events/edit/editevent.component');
var viewactivity_component_1 = require('./components/events/view/viewactivity.component');
var viewoccurrence_component_1 = require('./components/events/view/viewoccurrence.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent
    },
    {
        path: 'signin',
        component: signin_component_1.SigninComponent
    },
    {
        path: 'events',
        component: events_component_1.EventsComponent
    },
    {
        path: 'learnmore',
        component: learnmore_component_1.LearnmoreComponent
    },
    {
        path: 'createevent',
        component: createevent_component_1.CreateeventComponent
    },
    {
        path: 'editevent',
        component: editevent_component_1.EditeventComponent
    },
    {
        path: 'viewactivity',
        component: viewactivity_component_1.ViewactivityComponent
    },
    {
        path: 'viewoccurrence',
        component: viewoccurrence_component_1.ViewoccurrenceComponent
    },
    {
        path: 'editprofile',
        component: editprofile_component_1.EditprofileComponent
    },
    {
        path: 'editpassword',
        component: changepassword_component_1.ChangepasswordComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map