webpackJsonp([1,4],{

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_poll_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPollsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllPollsComponent = (function () {
    function AllPollsComponent(pollService, title) {
        this.pollService = pollService;
        this.title = title;
        this.allPolls = [];
        this.isAjaxComplete = false;
    }
    AllPollsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('All Polls - NodeVote');
        this.pollService.fetchAllPolls().subscribe(function (data) {
            _this.isAjaxComplete = true;
            if (data.success) {
                _this.allPolls = data.polls;
            }
            else {
                throw data.message;
            }
        });
    };
    return AllPollsComponent;
}());
AllPollsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-all-polls',
        template: __webpack_require__(621),
        styles: [__webpack_require__(592)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_poll_service__["a" /* PollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_poll_service__["a" /* PollService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object])
], AllPollsComponent);

var _a, _b;
//# sourceMappingURL=all-polls.component.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_poll_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(pollService, flashMessage, title) {
        this.pollService = pollService;
        this.flashMessage = flashMessage;
        this.title = title;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('Dashboard - NodeVote');
        this.pollService.fetchUserPolls().subscribe(function (data) {
            _this.isAjaxComplete = true;
            console.log(data);
            if (data.success) {
                _this.userPolls = data.polls;
            }
            else {
                _this.flashMessage.show('An error occured. Please try again later', { cssClass: 'alert-danger' });
                console.error(data.message);
            }
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(623),
        styles: [__webpack_require__(594)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_poll_service__["a" /* PollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_poll_service__["a" /* PollService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_poll_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(pollService, title) {
        this.pollService = pollService;
        this.title = title;
        this.recentPolls = [];
        this.isAjaxComplete = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('NodeVote');
        this.pollService.fetchRecentPolls().subscribe(function (data) {
            _this.isAjaxComplete = true;
            if (data.success) {
                _this.recentPolls = data.polls;
            }
            else {
                throw data.message;
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(625),
        styles: [__webpack_require__(596)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_poll_service__["a" /* PollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_poll_service__["a" /* PollService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_poll_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewPollComponent = (function () {
    function NewPollComponent(flashMessage, pollService, router, pageTitle) {
        this.flashMessage = flashMessage;
        this.pollService = pollService;
        this.router = router;
        this.pageTitle = pageTitle;
    }
    NewPollComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle('New Poll - NodeVote');
    };
    NewPollComponent.prototype.onNewPollSubmit = function (event) {
        var _this = this;
        var newPoll = {
            title: this.title,
            options: this.options
        };
        event.preventDefault();
        this.pollService.postNewPoll(newPoll).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Poll Successfully Created.', { cssClass: 'alert-success' });
                _this.router.navigate(["/poll/" + data.poll._id]);
            }
            else {
                _this.flashMessage.show('An error has occured. Please try again later.', { cssClass: 'alert-danger' });
                console.error(data.message);
            }
        });
    };
    return NewPollComponent;
}());
NewPollComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-poll',
        template: __webpack_require__(627),
        styles: [__webpack_require__(598)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_poll_service__["a" /* PollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_poll_service__["a" /* PollService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _d || Object])
], NewPollComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-poll.component.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = (function () {
    function NotFoundComponent(router) {
        this.router = router;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.setTimeout(function () {
            _this.router.navigate(['/']);
        }, 2000);
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(628),
        styles: [__webpack_require__(599)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], NotFoundComponent);

var _a;
//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_poll_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PollDetailComponent = (function () {
    function PollDetailComponent(pollService, authService, route, flashMessage, router, title) {
        this.pollService = pollService;
        this.authService = authService;
        this.route = route;
        this.flashMessage = flashMessage;
        this.router = router;
        this.title = title;
        this.isAjaxComplete = false;
        this.isOwner = false;
    }
    PollDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pollId = params['id'];
            _this.pollService.fetchSinglePoll(_this.pollId).subscribe(function (data) {
                _this.isAjaxComplete = true;
                if (data.success) {
                    _this.poll = data.poll;
                    if (_this.poll.ownerId === _this.authService.getUserId()) {
                        _this.isOwner = true;
                    }
                    _this.title.setTitle(_this.poll.title + " - NodeVote");
                }
            });
        });
    };
    PollDetailComponent.prototype.onOptClick = function (opt) {
        this.newOptName = "";
        this.selectedOptId = opt._id;
    };
    PollDetailComponent.prototype.onNewOptInput = function () {
        this.selectedOptId = NaN;
    };
    PollDetailComponent.prototype.onVoteSubmit = function () {
        var _this = this;
        if (this.newOptName) {
            if (this.authService.authenticated()) {
                this.pollService.addNewOpt(this.pollId, this.newOptName).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show('New poll option added successfully.', { cssClass: 'alert-success' });
                        _this.poll = data.poll;
                        _this.newOptName = "";
                    }
                    else {
                        _this.flashMessage.show('An error has occurred. Please try again.', { cssClass: 'alert-danger' });
                        console.error(data.message);
                    }
                });
            }
            else {
                this.flashMessage.show('You need to be logged in to add a new option', { cssClass: 'alert-danger' });
            }
        }
        else if (this.selectedOptId) {
            this.pollService.incVoteCount(this.pollId, this.selectedOptId).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Successfully voted.', { cssClass: 'alert-success' });
                    _this.poll = data.poll;
                    _this.selectedOptId = NaN;
                }
                else {
                    _this.flashMessage.show('An error has occurred. Please try again.', { cssClass: 'alert-danger' });
                    console.error(data.message);
                }
            });
        }
        else {
            this.flashMessage.show('Please select an Option', { cssClass: 'alert-warning' });
        }
    };
    PollDetailComponent.prototype.onDeleteClick = function () {
        var _this = this;
        this.pollService.delPoll(this.pollId).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Successfully deleted poll.', { cssClass: 'alert-success' });
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    return PollDetailComponent;
}());
PollDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-poll-detail',
        template: __webpack_require__(629),
        styles: [__webpack_require__(600)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_poll_service__["a" /* PollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_poll_service__["a" /* PollService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _f || Object])
], PollDetailComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=poll-detail.component.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.authenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            this.flashMessage.show('You need to be logged in to perform this action.', { cssClass: 'alert-warning' });
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 391;


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(407);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(620),
        styles: [__webpack_require__(591)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_routing_module__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_poll_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_jwt_service__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_poll_list_poll_list_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_all_polls_all_polls_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_new_poll_new_poll_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_poll_detail_poll_detail_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dashboard_dashboard_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_not_found_not_found_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_chart_chart_component__ = __webpack_require__(401);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_poll_list_poll_list_component__["a" /* PollListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_all_polls_all_polls_component__["a" /* AllPollsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_new_poll_new_poll_component__["a" /* NewPollComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_poll_detail_poll_detail_component__["a" /* PollDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_chart_chart_component__["a" /* ChartComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__modules_routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_poll_service__["a" /* PollService */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__services_jwt_service__["a" /* JwtService */],
            __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Poll; });
var Poll = (function () {
    function Poll() {
    }
    return Poll;
}());

//# sourceMappingURL=poll.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_poll__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartComponent = (function () {
    function ChartComponent() {
        this.pollLabel = [];
        this.pollValues = [];
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent.prototype.ngOnChanges = function () {
        this.compileChart();
    };
    ChartComponent.prototype.compileChart = function () {
        var _this = this;
        var ctx = document.getElementById('poll-chart');
        this.pollLabel = [];
        this.pollValues = [];
        this.pollData.opts.forEach(function (opt) {
            _this.pollLabel.push(opt.name);
            _this.pollValues.push(opt.count);
        });
        this.pollChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js___default.a(ctx, {
            type: 'horizontalBar',
            data: {
                labels: this.pollLabel,
                datasets: [{
                        label: '# of votes',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        data: this.pollValues
                    }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    xAxes: [{
                            ticks: {
                                beginAtZero: true,
                                stepSize: 1
                            }
                        }]
                }
            }
        });
    };
    return ChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_poll__["a" /* Poll */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_poll__["a" /* Poll */]) === "function" && _a || Object)
], ChartComponent.prototype, "pollData", void 0);
ChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart',
        template: __webpack_require__(622),
        styles: [__webpack_require__(593)]
    }),
    __metadata("design:paramtypes", [])
], ChartComponent);

var _a;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(624),
        styles: [__webpack_require__(595)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLoginClick = function () {
        this.authService.login();
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Successfully logged out.', { cssClass: 'alert-success' });
        this.router.navigate['/'];
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(626),
        styles: [__webpack_require__(597)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PollListComponent = (function () {
    function PollListComponent() {
    }
    PollListComponent.prototype.ngOnInit = function () {
    };
    return PollListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], PollListComponent.prototype, "polls", void 0);
PollListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-poll-list',
        template: __webpack_require__(630),
        styles: [__webpack_require__(601)]
    }),
    __metadata("design:paramtypes", [])
], PollListComponent);

//# sourceMappingURL=poll-list.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_all_polls_all_polls_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_new_poll_new_poll_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_poll_detail_poll_detail_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_not_found_not_found_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__(183);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'all',
        component: __WEBPACK_IMPORTED_MODULE_4__components_all_polls_all_polls_component__["a" /* AllPollsComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'poll/new',
        component: __WEBPACK_IMPORTED_MODULE_5__components_new_poll_new_poll_component__["a" /* NewPollComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'poll/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__components_poll_detail_poll_detail_component__["a" /* PollDetailComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_7__components_not_found_not_found_component__["a" /* NotFoundComponent */]
    }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtService; });


function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["AuthConfig"]({
        tokenGetter: (function () { return JSON.parse(localStorage.getItem('idToken')); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }]
    }), http, options);
}
var JwtService = {
    provide: __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["AuthHttp"],
    useFactory: authHttpServiceFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]]
};
//# sourceMappingURL=jwt.service.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, ".chart-wrapper {\n\tmargin-bottom: 50px\n}\n\n@media screen and (min-width: 992px) {\n  .chart-wrapper {\n  \tmargin-top: 60px;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "/* Sticky footer styles\n-------------------------------------------------- */\n.footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  background-color: #222;\n}\n\n.footer-text {\n  margin: 20px 0;\n  color: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, ".recent-polls-wrapper {\n\tmargin: 30px 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "input {\n\twidth: 100%;\n\tcolor: #000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 221,
	"./af.js": 221,
	"./ar": 228,
	"./ar-dz": 222,
	"./ar-dz.js": 222,
	"./ar-kw": 223,
	"./ar-kw.js": 223,
	"./ar-ly": 224,
	"./ar-ly.js": 224,
	"./ar-ma": 225,
	"./ar-ma.js": 225,
	"./ar-sa": 226,
	"./ar-sa.js": 226,
	"./ar-tn": 227,
	"./ar-tn.js": 227,
	"./ar.js": 228,
	"./az": 229,
	"./az.js": 229,
	"./be": 230,
	"./be.js": 230,
	"./bg": 231,
	"./bg.js": 231,
	"./bn": 232,
	"./bn.js": 232,
	"./bo": 233,
	"./bo.js": 233,
	"./br": 234,
	"./br.js": 234,
	"./bs": 235,
	"./bs.js": 235,
	"./ca": 236,
	"./ca.js": 236,
	"./cs": 237,
	"./cs.js": 237,
	"./cv": 238,
	"./cv.js": 238,
	"./cy": 239,
	"./cy.js": 239,
	"./da": 240,
	"./da.js": 240,
	"./de": 243,
	"./de-at": 241,
	"./de-at.js": 241,
	"./de-ch": 242,
	"./de-ch.js": 242,
	"./de.js": 243,
	"./dv": 244,
	"./dv.js": 244,
	"./el": 245,
	"./el.js": 245,
	"./en-au": 246,
	"./en-au.js": 246,
	"./en-ca": 247,
	"./en-ca.js": 247,
	"./en-gb": 248,
	"./en-gb.js": 248,
	"./en-ie": 249,
	"./en-ie.js": 249,
	"./en-nz": 250,
	"./en-nz.js": 250,
	"./eo": 251,
	"./eo.js": 251,
	"./es": 253,
	"./es-do": 252,
	"./es-do.js": 252,
	"./es.js": 253,
	"./et": 254,
	"./et.js": 254,
	"./eu": 255,
	"./eu.js": 255,
	"./fa": 256,
	"./fa.js": 256,
	"./fi": 257,
	"./fi.js": 257,
	"./fo": 258,
	"./fo.js": 258,
	"./fr": 261,
	"./fr-ca": 259,
	"./fr-ca.js": 259,
	"./fr-ch": 260,
	"./fr-ch.js": 260,
	"./fr.js": 261,
	"./fy": 262,
	"./fy.js": 262,
	"./gd": 263,
	"./gd.js": 263,
	"./gl": 264,
	"./gl.js": 264,
	"./gom-latn": 265,
	"./gom-latn.js": 265,
	"./he": 266,
	"./he.js": 266,
	"./hi": 267,
	"./hi.js": 267,
	"./hr": 268,
	"./hr.js": 268,
	"./hu": 269,
	"./hu.js": 269,
	"./hy-am": 270,
	"./hy-am.js": 270,
	"./id": 271,
	"./id.js": 271,
	"./is": 272,
	"./is.js": 272,
	"./it": 273,
	"./it.js": 273,
	"./ja": 274,
	"./ja.js": 274,
	"./jv": 275,
	"./jv.js": 275,
	"./ka": 276,
	"./ka.js": 276,
	"./kk": 277,
	"./kk.js": 277,
	"./km": 278,
	"./km.js": 278,
	"./kn": 279,
	"./kn.js": 279,
	"./ko": 280,
	"./ko.js": 280,
	"./ky": 281,
	"./ky.js": 281,
	"./lb": 282,
	"./lb.js": 282,
	"./lo": 283,
	"./lo.js": 283,
	"./lt": 284,
	"./lt.js": 284,
	"./lv": 285,
	"./lv.js": 285,
	"./me": 286,
	"./me.js": 286,
	"./mi": 287,
	"./mi.js": 287,
	"./mk": 288,
	"./mk.js": 288,
	"./ml": 289,
	"./ml.js": 289,
	"./mr": 290,
	"./mr.js": 290,
	"./ms": 292,
	"./ms-my": 291,
	"./ms-my.js": 291,
	"./ms.js": 292,
	"./my": 293,
	"./my.js": 293,
	"./nb": 294,
	"./nb.js": 294,
	"./ne": 295,
	"./ne.js": 295,
	"./nl": 297,
	"./nl-be": 296,
	"./nl-be.js": 296,
	"./nl.js": 297,
	"./nn": 298,
	"./nn.js": 298,
	"./pa-in": 299,
	"./pa-in.js": 299,
	"./pl": 300,
	"./pl.js": 300,
	"./pt": 302,
	"./pt-br": 301,
	"./pt-br.js": 301,
	"./pt.js": 302,
	"./ro": 303,
	"./ro.js": 303,
	"./ru": 304,
	"./ru.js": 304,
	"./sd": 305,
	"./sd.js": 305,
	"./se": 306,
	"./se.js": 306,
	"./si": 307,
	"./si.js": 307,
	"./sk": 308,
	"./sk.js": 308,
	"./sl": 309,
	"./sl.js": 309,
	"./sq": 310,
	"./sq.js": 310,
	"./sr": 312,
	"./sr-cyrl": 311,
	"./sr-cyrl.js": 311,
	"./sr.js": 312,
	"./ss": 313,
	"./ss.js": 313,
	"./sv": 314,
	"./sv.js": 314,
	"./sw": 315,
	"./sw.js": 315,
	"./ta": 316,
	"./ta.js": 316,
	"./te": 317,
	"./te.js": 317,
	"./tet": 318,
	"./tet.js": 318,
	"./th": 319,
	"./th.js": 319,
	"./tl-ph": 320,
	"./tl-ph.js": 320,
	"./tlh": 321,
	"./tlh.js": 321,
	"./tr": 322,
	"./tr.js": 322,
	"./tzl": 323,
	"./tzl.js": 323,
	"./tzm": 325,
	"./tzm-latn": 324,
	"./tzm-latn.js": 324,
	"./tzm.js": 325,
	"./uk": 326,
	"./uk.js": 326,
	"./ur": 327,
	"./ur.js": 327,
	"./uz": 329,
	"./uz-latn": 328,
	"./uz-latn.js": 328,
	"./uz.js": 329,
	"./vi": 330,
	"./vi.js": 330,
	"./x-pseudo": 331,
	"./x-pseudo.js": 331,
	"./yo": 332,
	"./yo.js": 332,
	"./zh-cn": 333,
	"./zh-cn.js": 333,
	"./zh-hk": 334,
	"./zh-hk.js": 334,
	"./zh-tw": 335,
	"./zh-tw.js": 335
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 609;


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var masterURI = '';
var PollService = (function () {
    function PollService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.headers.append('Content-Type', 'application/json');
    }
    PollService.prototype.fetchSinglePoll = function (id) {
        var apiURI = masterURI + "/poll/" + id;
        return this.http.get(apiURI)
            .map(function (res) { return res.json(); });
    };
    PollService.prototype.fetchRecentPolls = function () {
        var apiURI = masterURI + "/poll/recent";
        return this.http.get(apiURI)
            .map(function (res) { return res.json(); });
    };
    PollService.prototype.fetchAllPolls = function () {
        var apiURI = masterURI + "/poll/all";
        return this.http.get(apiURI)
            .map(function (res) { return res.json(); });
    };
    PollService.prototype.fetchUserPolls = function () {
        var apiURI = masterURI + "/poll/userpolls";
        return this.authHttp.get(apiURI)
            .map(function (res) { return res.json(); });
    };
    PollService.prototype.postNewPoll = function (poll) {
        var apiURI = masterURI + "/poll/new";
        return this.authHttp.post(apiURI, poll)
            .map(function (res) { return res.json(); });
    };
    PollService.prototype.addNewOpt = function (pollId, newOpt) {
        var apiURI = masterURI + "/poll/" + pollId;
        return this.authHttp.put(apiURI, { opt: newOpt })
            .map(function (res) { return res.json(); });
    };
    PollService.prototype.incVoteCount = function (pollId, currOptId) {
        var apiURI = masterURI + "/poll/" + pollId;
        return this.http.patch(apiURI, { _id: currOptId }, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    PollService.prototype.delPoll = function (pollId) {
        var apiURI = masterURI + "/poll/" + pollId;
        return this.authHttp.delete(apiURI)
            .map(function (res) { return res.json(); });
    };
    return PollService;
}());
PollService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"]) === "function" && _b || Object])
], PollService);

var _a, _b;
//# sourceMappingURL=poll.service.js.map

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = "<h1>All Polls</h1>\n\n<div class=\"row\">\n\t<div class=\"col-sm-7\">\n\t\t<div class=\"list-group\">\n\t\t\t<div *ngIf=\"!isAjaxComplete\">\n\t\t\t\t<i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i>\n\t\t\t\t<span class=\"sr-only\">Loading...</span>\n\t\t\t</div>\n\t\t\t<app-poll-list [polls]=\"allPolls\"></app-poll-list>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-wrapper\">\n\t<canvas id=\"poll-chart\" #pollChart></canvas>\n</div>\n"

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "<h1>Dashboard</h1>\n<h4>Here are a list of the polls you created.</h4>\n\n<div class=\"row\">\n\t<div class=\"col-sm-7\">\n\t\t<div class=\"list-group\">\n\t\t\t<div *ngIf=\"!isAjaxComplete\">\n\t\t\t\t<i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i>\n\t\t\t\t<span class=\"sr-only\">Loading...</span>\n\t\t\t</div>\n\t\t\t<app-poll-list [polls]=\"userPolls\"></app-poll-list>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n\t<div class=\"container\">\n\t\t<p class=\"footer-text\">\n\t\t\tNodeVote webapp made for <a href=\"//freecodecamp.com\"><i class=\"fa fa-free-code-camp\"> </i>freeCodeCamp</a>. Powered by MEAN stack.\n\t\t\tBuilt by <a href=\"//iadw.in\">Adwin</a>\n\t\t</p>\n\t</div>\n</footer>"

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>NodeVote</h1>\n  <p>Let your opinions be heard.</p>\n  <p><a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/all']\">View Polls</a></p>\n</div>\n\n<h1 class=\"text-center\">Features</h1>\n<div class=\"row\">\n\t<div class=\"col-sm-4\">\n\t\t<h3>\n\t\t\t<i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> \n\t\t\tQuick and Easy\n\t\t</h3>\n\t\t<p>\n\t\t\tTypewriter williamsburg gochujang cronut, irony sriracha skateboard gastropub coloring book shabby chic butcher freegan stumptown schlitz bespoke. Lumbersexual photo booth chillwave, roof party bicycle rights gentrify venmo fam mixtape wolf. Woke fap flannel, pug cardigan intelligentsia fanny pack.\n\t\t</p>\n\t</div>\n\t<div class=\"col-sm-4\">\n\t\t<h3>\n\t\t\t<i class=\"fa fa-share\" aria-hidden=\"true\"></i> \n\t\t\tShareable with Others\n\t\t</h3>\n\t\t<p>\n\t\t\tVice 8-bit retro trust fund af cliche. Food truck street art crucifix actually drinking vinegar, synth offal plaid flexitarian coloring book chartreuse. Polaroid hexagon XOXO shoreditch, intelligentsia asymmetrical man bun pop-up flannel hot chicken swag kombucha street art live-edge.\n\t\t</p>\n\t</div>\n\t<div class=\"col-sm-4\">\n\t\t<h3>\n\t\t\t<i class=\"fa fa-user-secret\" aria-hidden=\"true\"></i> \n\t\t\tAnonymous Opinions\n\t\t</h3>\n\t\t<p>\n\t\t\tTypewriter wolf vice snackwave helvetica chartreuse, try-hard ugh air plant. Gastropub subway tile literally, vape venmo farm-to-table taxidermy YOLO lumbersexual health goth master cleanse hell of meh retro. Hoodie farm-to-table sustainable, knausgaard cardigan yuccie jean shorts. \n\t\t</p>\n\t</div>\n</div>\n\n<h1 class=\"text-center\">Popular Polls</h1>\n<div class=\"row recent-polls-wrapper\">\n\t<div class=\"col-md-6 col-md-push-3\">\n\t\t<div class=\"text-center\" *ngIf=\"!isAjaxComplete\">\n\t\t\t<i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i>\n\t\t\t<span class=\"sr-only\">Loading...</span>\n\t\t</div>\n\t\t<app-poll-list [polls]=\"recentPolls\"></app-poll-list>\n\t</div>\n</div>\n\n<div class=\"jumbotron text-center\">\n\t<h2>\n\t\tPoll not found?\n\t</h2>\n\t<h2>\n\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/all']\">View all Polls</a> \n\t\t<small>or</small> \n\t\t<a href=\"#\" class=\"btn btn-primary\">Create New Poll</a>\n\t</h2> \n</div>"

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a [routerLink]=\"['/']\" class=\"navbar-brand\">NodeVote</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li [routerLinkActive]=\"['active']\" \n          [routerLinkActiveOptions]=\"{exact: true}\">\n          <a [routerLink]=\"['/all']\">All Polls</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li [routerLinkActive]=\"['active']\" \n          [routerLinkActiveOptions]=\"{exact: true}\"\n          *ngIf=\"authService.authenticated()\">\n          <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n        </li>\n        <li [routerLinkActive]=\"['active']\" \n          [routerLinkActiveOptions]=\"{exact: true}\"\n          *ngIf=\"authService.authenticated()\">\n          <a [routerLink]=\"['/poll/new']\">New Poll</a>\n        </li>\n        <li *ngIf=\"!authService.authenticated()\">\n          <a (click)=\"onLoginClick()\">\n            Sign in with <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n          </a>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"authService.authenticated()\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"true\">{{authService.getUserName()}} <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a href=\"#\" (click)=\"onLogoutClick()\">Sign Out</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = "<h2>New Poll</h2>\n\n<div class=\"row\">\n\t<div class=\"col-md-7\">\n\t\t<form (submit)=\"onNewPollSubmit($event)\" #newPollForm=\"ngForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"title\" class=\"control-label\">Poll Title</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"title\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"options\" class=\"control-label\" required>Poll Options (Separated by new line)</label>\n\t\t\t\t<textarea class=\"form-control\" name=\"options\" [(ngModel)]=\"options\" rows=\"10\" required></textarea>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!newPollForm.form.valid\">Submit</button>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = "<h1>Page Not Found [404]</h1>\n<h4>The page you're looking for is unavailable.</h4>\n<h4>You'll be redirected shortly to the home page.</h4>"

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"!isAjaxComplete; else pollDetails\">\n\t<i class=\"fa fa-circle-o-notch fa-spin fa-fw\"></i>\n\tLoading Poll...\n\t<span class=\"sr-only\">Loading...</span>\n</h2>\n<ng-template #pollDetails>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6 col-md-push-6\">\n\t\t\t<app-chart [pollData]=\"poll\"></app-chart>\n\t\t</div>\n\t\t<div class=\"col-md-6 col-md-pull-6\">\n\t\t\t<h2>{{poll.title}}</h2>\n\n\t\t\t<h4>Voting Options:</h4>\n\t\t\t<div class=\"list-group\">\n\t\t\t\t<a class=\"list-group-item\" \n\t\t\t\t\t[class.active]=\"opt._id === selectedOptId\" \n\t\t\t\t\t*ngFor=\"let opt of poll.opts\"\n\t\t\t\t\t(click)=\"onOptClick(opt)\">\n\t\t\t\t\t{{opt.name}}\n\t\t\t\t</a>\n\t\t\t\t<a class=\"list-group-item\" [class.active]=\"newOptName\">\n\t\t\t\t\t<input type=\"text\" placeholder=\"Add Option...\" name=\"newopt\" \n\t\t\t\t\t[(ngModel)]=\"newOptName\"\n\t\t\t\t\t(keydown)=\"onNewOptInput()\">\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<a class=\"btn btn-primary\" (click)=\"onVoteSubmit()\">Submit</a>\n\t\t\t<a href=\"https://twitter.com/intent/tweet?text={{poll.title}} - NodeVote http://vote.nodeapp.iadw.in/poll/{{poll._id}}\" target=\"_blank\" class=\"btn btn-default\">\n\t\t\t\tShare <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n\t\t\t</a>\n\t\t\t<a class=\"btn btn-danger\" (click)=\"onDeleteClick()\" *ngIf=\"isOwner\">Delete</a>\n\t\t</div>\n\t</div>\n</ng-template>\n"

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n\t<a class=\"list-group-item\" \n\t\t*ngFor=\"let poll of polls\" \n\t\t[routerLink]=\"['/poll', poll._id]\">\n\t\t{{poll.title}}\n\t</a>\n</div>"

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(392);


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_lock__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_lock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_lock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var masterURI = 'localhost:3000';
var AuthService = (function () {
    function AuthService(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.lock = new __WEBPACK_IMPORTED_MODULE_3_auth0_lock___default.a('qIRywfrVutDW5bx4FmN5RywkfQLLw8Mk', 'adwin.auth0.com', {
            auth: {
                params: {
                    scope: 'openid nickname'
                }
            }
        });
        this.lock.on("authenticated", function (authResult) {
            console.log(authResult);
            localStorage.setItem("accessToken", authResult.accessToken);
            localStorage.setItem("idToken", JSON.stringify(authResult.idToken));
            localStorage.setItem("userName", JSON.stringify(authResult.idTokenPayload.nickname));
            localStorage.setItem("userId", JSON.stringify(authResult.idTokenPayload.sub.replace('twitter|', '')));
            _this.router.navigate(['/dashboard']);
        });
    }
    AuthService.prototype.login = function () {
        this.lock.show();
    };
    AuthService.prototype.authenticated = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["tokenNotExpired"])('idToken');
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('idToken');
    };
    AuthService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('idToken'));
    };
    AuthService.prototype.getUserName = function () {
        return JSON.parse(localStorage.getItem('userName'));
    };
    AuthService.prototype.getUserId = function () {
        return +JSON.parse(localStorage.getItem('userId'));
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ })

},[777]);
//# sourceMappingURL=main.bundle.js.map