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
var signup_service_1 = require('../../services/signup/signup.service');
var EditprofileComponent = (function () {
    function EditprofileComponent(fb, route, signupService, router) {
        var _this = this;
        this.route = route;
        this.signupService = signupService;
        this.router = router;
        var emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.complexForm = fb.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            'firstname': [null, forms_1.Validators.required],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            'lastname': [null, forms_1.Validators.required],
            'email': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(emailRegex)])],
            'username': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])],
            'password': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(10)])]
        });
        this.signupService.editProfile()
            .subscribe(function (events) {
            _this.events = events;
            //     console.log("events log: "+this.events[0].loggedin);
            _this.id = _this.events._id;
            _this.firstname = _this.events.firstname;
            _this.lastname = _this.events.lastname;
            _this.email = _this.events.email;
            _this.username = _this.events.username;
            _this.password = _this.events.password;
        });
        //    console.log("events: "+this.events);
    }
    EditprofileComponent.prototype.editUser = function () {
        var _this = this;
        var task = {
            _id: this.id,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            username: this.username,
            password: this.password
        };
        this.signupService.editUser(task).subscribe(function (data) {
            _this.events = data;
            localStorage.setItem('firstname', task.firstname);
            localStorage.setItem('lastname', task.lastname);
            _this.router.navigate(['/events'], { queryParams: { valid: true } });
        });
    };
    EditprofileComponent.prototype.submitForm = function (value) {
        console.log(value);
    };
    EditprofileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editprofile',
            templateUrl: 'editprofile.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_2.ActivatedRoute, signup_service_1.SignupService, router_1.Router])
    ], EditprofileComponent);
    return EditprofileComponent;
}());
exports.EditprofileComponent = EditprofileComponent;
//# sourceMappingURL=editprofile.component.js.map