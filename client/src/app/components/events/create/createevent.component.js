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
var forms_1 = require('@angular/forms');
var activity_service_1 = require('../../../services/events/activity.service');
var CreateeventComponent = (function () {
    function CreateeventComponent(fb, activityService, router) {
        this.activityService = activityService;
        this.router = router;
        this.loggedin = 0;
        this.complexForm = fb.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            'activity': [null, forms_1.Validators.required]
        });
        this.firstname = localStorage.getItem('firstname');
        this.lastname = localStorage.getItem('lastname');
    }
    CreateeventComponent.prototype.addActivity = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.activity);
        var newActivity = {
            username: localStorage.getItem('currentUser'),
            activity: this.activity,
            loggedin: this.loggedin
        };
        this.activityService.addActivity(newActivity)
            .subscribe(function (activity) {
            _this.activity = '';
            _this.router.navigate(['/events'], { queryParams: { valid: true } });
        });
    };
    CreateeventComponent.prototype.submitForm = function (value) {
        console.log(value);
    };
    CreateeventComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'createevent',
            templateUrl: 'createevent.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, activity_service_1.ActivityService, router_1.Router])
    ], CreateeventComponent);
    return CreateeventComponent;
}());
exports.CreateeventComponent = CreateeventComponent;
//# sourceMappingURL=createevent.component.js.map