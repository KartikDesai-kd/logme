"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
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
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, signup_component_1.SignupComponent, signin_component_1.SigninComponent, events_component_1.EventsComponent, learnmore_component_1.LearnmoreComponent, createevent_component_1.CreateeventComponent, editevent_component_1.EditeventComponent, viewactivity_component_1.ViewactivityComponent, viewoccurrence_component_1.ViewoccurrenceComponent, editprofile_component_1.EditprofileComponent, changepassword_component_1.ChangepasswordComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map