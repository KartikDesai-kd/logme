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
var signin_service_1 = require('../../services/signin/signin.service');
var SigninComponent = (function () {
    function SigninComponent(fb, signinService, router) {
        this.signinService = signinService;
        this.router = router;
        this.complexForm = fb.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            'username': [null, forms_1.Validators.required],
            'password': [null, forms_1.Validators.required]
        });
    }
    SigninComponent.prototype.login = function (event) {
        var _this = this;
        event.preventDefault();
        var newLogin = {
            username: this.username,
            password: this.password
        };
        this.signinService.login(newLogin)
            .subscribe(function (signin) {
            _this.signininfo = signin;
            if (_this.signininfo.length > 0) {
                localStorage.setItem('currentUser', _this.username);
                localStorage.setItem('firstname', signin[0].firstname);
                localStorage.setItem('lastname', signin[0].lastname);
                _this.username = '';
                _this.password = '';
                _this.router.navigate(['/events'], { queryParams: { valid: true } });
            }
        });
    };
    SigninComponent.prototype.submitForm = function (value) {
        console.log(value);
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signin',
            templateUrl: 'signin.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, signin_service_1.SigninService, router_1.Router])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map