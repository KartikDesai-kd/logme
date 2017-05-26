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
var router_2 = require('@angular/router');
var forms_1 = require('@angular/forms');
var activity_service_1 = require('../../../services/events/activity.service');
var event_service_1 = require('../../../services/events/event.service');
var EditeventComponent = (function () {
    function EditeventComponent(route, fb, eventService, activityService, router) {
        this.route = route;
        this.eventService = eventService;
        this.activityService = activityService;
        this.router = router;
        console.log("edit initialized");
        this.complexForm = fb.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            'activity': [null, forms_1.Validators.required]
        });
    }
    EditeventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.queryParams['id'];
        this.activity = this.route.snapshot.queryParams['activity'];
        this.eventService.getTasksid(this.id)
            .subscribe(function (events) {
            _this.events = events;
            _this.loggedin = _this.events[0].loggedin;
        });
        this.firstname = localStorage.getItem('firstname');
        this.lastname = localStorage.getItem('lastname');
    };
    EditeventComponent.prototype.editActivity = function () {
        var _this = this;
        var task = {
            _id: this.id,
            username: localStorage.getItem('currentUser'),
            activity: this.activity,
            loggedin: this.loggedin
        };
        this.activityService.editActivity(task).subscribe(function (data) {
            _this.router.navigate(['/events'], { queryParams: { valid: true } });
        });
    };
    EditeventComponent.prototype.submitForm = function (value) {
        console.log(value);
    };
    EditeventComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editevent',
            templateUrl: 'editevent.component.html'
        }), 
        __metadata('design:paramtypes', [router_2.ActivatedRoute, forms_1.FormBuilder, event_service_1.EventService, activity_service_1.ActivityService, router_1.Router])
    ], EditeventComponent);
    return EditeventComponent;
}());
exports.EditeventComponent = EditeventComponent;
//# sourceMappingURL=editevent.component.js.map