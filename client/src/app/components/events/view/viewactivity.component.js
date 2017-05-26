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
var activity_service_1 = require('../../../services/events/activity.service');
var ViewactivityComponent = (function () {
    function ViewactivityComponent(activityService, router, route) {
        this.activityService = activityService;
        this.router = router;
        this.route = route;
    }
    ViewactivityComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.queryParams['id'];
        this.activity = this.route.snapshot.queryParams['activity'];
        this.views = { id: this.id, activity: this.activity };
        this.firstname = localStorage.getItem('firstname');
        this.lastname = localStorage.getItem('lastname');
    };
    ViewactivityComponent.prototype.deleteTask = function () {
        var _this = this;
        this.activityService.deleteTask(this.id).subscribe(function (data) {
            _this.router.navigate(['/events'], { queryParams: { valid: true } });
        });
    };
    ViewactivityComponent.prototype.editTask = function () {
        this.router.navigate(['/editevent'], { queryParams: { id: this.id, activity: this.activity } });
    };
    ViewactivityComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'viewactivity',
            templateUrl: 'viewactivity.component.html'
        }), 
        __metadata('design:paramtypes', [activity_service_1.ActivityService, router_2.Router, router_1.ActivatedRoute])
    ], ViewactivityComponent);
    return ViewactivityComponent;
}());
exports.ViewactivityComponent = ViewactivityComponent;
//# sourceMappingURL=viewactivity.component.js.map