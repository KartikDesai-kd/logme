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
var router_2 = require('@angular/router');
var signin_service_1 = require('../../services/signin/signin.service');
var ChangepasswordComponent = (function () {
    function ChangepasswordComponent(fb, route, signinService, router) {
        var _this = this;
        this.route = route;
        this.signinService = signinService;
        this.router = router;
        this.complexForm = fb.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            'password': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(10)])]
        });
        console.log("in const");
        this.signinService.editPassword()
            .subscribe(function (events) {
            _this.events = events;
            _this.id = _this.events._id;
            _this.firstname = _this.events.firstname;
            _this.lastname = _this.events.lastname;
            _this.email = _this.events.email;
            _this.username = _this.events.username;
            _this.password = _this.events.password;
        });
    }
    ChangepasswordComponent.prototype.editPwd = function () {
        var _this = this;
        var task = {
            _id: this.id,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            username: this.username,
            password: this.password
        };
        this.signinService.editPwd(task).subscribe(function (data) {
            _this.router.navigate(['/events'], { queryParams: { valid: true } });
        });
    };
    ChangepasswordComponent.prototype.submitForm = function (value) {
        console.log(value);
    };
    ChangepasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chnagepassword',
            templateUrl: 'changepassword.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_2.ActivatedRoute, signin_service_1.SigninService, router_1.Router])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());
exports.ChangepasswordComponent = ChangepasswordComponent;
//# sourceMappingURL=changepassword.component.js.map