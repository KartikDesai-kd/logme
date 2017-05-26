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
var event_service_1 = require('../../../services/events/event.service');
var ViewoccurrenceComponent = (function () {
    function ViewoccurrenceComponent(route, eventService) {
        this.route = route;
        this.eventService = eventService;
    }
    ViewoccurrenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.queryParams['id'];
        this.firstname = localStorage.getItem('firstname');
        this.lastname = localStorage.getItem('lastname');
        this.eventService.getTasksid(this.id)
            .subscribe(function (events) {
            _this.events = events;
            _this.activity = _this.events[0].activity;
            _this.loggedin = _this.events[0].loggedin;
        });
    };
    ViewoccurrenceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'viewoccurrence',
            templateUrl: 'viewoccurrence.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, event_service_1.EventService])
    ], ViewoccurrenceComponent);
    return ViewoccurrenceComponent;
}());
exports.ViewoccurrenceComponent = ViewoccurrenceComponent;
//# sourceMappingURL=viewoccurrence.component.js.map