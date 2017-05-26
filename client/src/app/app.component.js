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
var router_1 = require('@angular/router');
var signup_service_1 = require('./services/signup/signup.service');
var signin_service_1 = require('./services/signin/signin.service');
var activity_service_1 = require('./services/events/activity.service');
var event_service_1 = require('./services/events/event.service');
var AppComponent = (function () {
    function AppComponent(route) {
        this.route = route;
        this.valid = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.valid = this.route.snapshot.queryParams['valid'];
        console.log("status : " + this.valid);
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: "app.component.html",
            providers: [signup_service_1.SignupService, signin_service_1.SigninService, activity_service_1.ActivityService, event_service_1.EventService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map