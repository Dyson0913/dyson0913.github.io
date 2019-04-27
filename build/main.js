webpackJsonp([1],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_auth__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_database__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(firebaseAuth, eventCtrl) {
        this.firebaseAuth = firebaseAuth;
        this.eventCtrl = eventCtrl;
        console.log('Hello AuthServiceProvider Provider');
        this.user = this.firebaseAuth.authState;
    }
    AuthServiceProvider.prototype.Authinit = function () {
        var _this = this;
        this.eventCtrl.subscribe('Auth:login', function () {
            console.log('user login!');
        });
        this.eventCtrl.subscribe('Auth:notlogin', function () {
            console.log('no user');
        });
        this.firebaseAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                _this.eventCtrl.publish('Auth:login');
            }
            else {
                // No user is signed in.
                _this.eventCtrl.publish('Auth:notlogin');
            }
        });
    };
    AuthServiceProvider.prototype.signup = function (email, password) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value.user.getIdToken());
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AuthServiceProvider.prototype.login = function (email, password) {
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!', value.user.uid);
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AuthServiceProvider.prototype.getuid = function () {
        return this.firebaseAuth.auth.currentUser.uid;
    };
    AuthServiceProvider.prototype.getlanguage = function () {
        this.firebaseAuth.auth.useDeviceLanguage();
        return this.firebaseAuth.auth.languageCode;
    };
    AuthServiceProvider.prototype.resetpw = function (newpwd, f) {
        //this.firebaseAuth.auth.currentUser.email
        //   name = user.displayName;
        // email = user.email;
        // photoUrl = user.photoURL;
        // emailVerified = user.emailVerified;
        // uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
        //                  // this value to authenticate with your backend server, if
        //                  // you have one. Use User.getToken() instead.
        var user = this.firebaseAuth.auth.currentUser;
        user.updatePassword(newpwd).then(function () {
            // Update successful.
            f();
        }).catch(function (error) {
            // An error happened.
            console.log("pw reset fial" + error);
        });
    };
    AuthServiceProvider.prototype.resetpwbyMail = function (f) {
        this.firebaseAuth.auth.sendPasswordResetEmail(this.firebaseAuth.auth.currentUser.email).then(function () {
            // Email sent.
            f();
        }).catch(function (error) {
            // An error happened.
            console.log("emailpw reset fial" + error);
        });
    };
    AuthServiceProvider.prototype.logout = function () {
        this.firebaseAuth
            .auth
            .signOut();
    };
    //----google sign
    AuthServiceProvider.prototype.google_singin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth.GoogleAuthProvider();
        this.getlanguage();
        this.firebaseAuth.auth.signInWithPopup(provider).then(function (result) {
            var token = result.credential.providerId;
            var user = result.user;
            console.log(token);
        }).catch(function (error) {
            console.log(error);
        });
    };
    AuthServiceProvider.prototype.google_singout = function () {
        this.logout();
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HintProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HintProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HintProvider = /** @class */ (function () {
    function HintProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    HintProvider.prototype.msg = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2500,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            //console.log('Dismissed toast');
        });
        toast.present();
    };
    HintProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], HintProvider);
    return HintProvider;
}());

//# sourceMappingURL=hint.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailPwloginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MailPwloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MailPwloginPage = /** @class */ (function () {
    function MailPwloginPage(navCtrl, auth, navParams) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        this.resetBtn = false;
        this.newpw = "";
        this.comfirmPw = "";
    }
    MailPwloginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MailPwloginPage');
    };
    MailPwloginPage.prototype.authClick = function () {
        this.googleLogin();
    };
    MailPwloginPage.prototype.googleLogin = function () {
        this.auth.google_singin();
    };
    MailPwloginPage.prototype.signup = function () {
        this.auth.signup(this.email, this.password);
        this.email = this.password = '';
    };
    MailPwloginPage.prototype.login = function () {
        this.auth.login(this.email, this.password);
        this.email = this.password = '';
    };
    MailPwloginPage.prototype.logout = function () {
        this.auth.logout();
    };
    MailPwloginPage.prototype.resetPw = function () {
        this.resetBtn = true;
    };
    MailPwloginPage.prototype.pwChange = function () {
        var _this = this;
        if (this.newpw == this.comfirmPw) {
            this.auth.resetpw(this.newpw, function () {
                console.log("pw reset ok");
                _this.resetBtn = false;
            });
        }
        else {
            console.log('pw not equal ');
        }
    };
    MailPwloginPage.prototype.emailPwreset = function () {
        this.auth.resetpwbyMail(function () {
            console.log("mail is send");
        });
    };
    MailPwloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mail-pwlogin',template:/*ion-inline-start:"C:\Users\dyson\Downloads\D\GitHub\loginclinet\loginClient\src\pages\mail-pwlogin\mail-pwlogin.html"*/'<!--\n  Generated template for the MailPwloginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>mailPwlogin</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <h1 *ngIf="auth.user | async">Welcome {{ (auth.user | async)?.email }}</h1>\n  <h1 *ngIf="auth.user | async">your lan is  {{ (auth.user | async)? lang:"" }}</h1>\n\n  <div *ngIf="!(auth.user | async)">\n    <input type="text" [(ngModel)]="email" placeholder="email">\n    <input type="password" [(ngModel)]="password" placeholder="password">\n  \n    <button (click)="signup()" [disabled]="!email || !password">\n      Signup\n    </button>\n  \n    <button (click)="login()" [disabled]="!email || !password">\n      Login\n    </button>\n  </div>\n  \n  <button (click)="logout()" *ngIf="auth.user | async">\n    Logout\n  </button>\n\n  <button (click)="emailPwreset()" *ngIf="auth.user | async">\n    resetPwbymail\n  </button>\n  \n\n  <button (click)="resetPw()" *ngIf="auth.user | async">\n    resetPw\n  </button>\n\n  <div *ngIf="resetBtn">\n    <input type="password" [(ngModel)]="newpw" placeholder="new passward">\n    <input type="password" [(ngModel)]="comfirmPw" placeholder="comfirm passward">\n\n    <button (click)="pwChange()">\n      pwChange\n    </button>\n  </div>\n\n  <button ion-button icon-only color="royal" (click)="authClick()">\n    <ion-icon name="person"></ion-icon>\n  </button>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\dyson\Downloads\D\GitHub\loginclinet\loginClient\src\pages\mail-pwlogin\mail-pwlogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MailPwloginPage);
    return MailPwloginPage;
}());

//# sourceMappingURL=mail-pwlogin.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/mail-pwlogin/mail-pwlogin.module": [
		569,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 262;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mail_pwlogin_mail_pwlogin__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser_ngx__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_hint_hint__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(modalCtrl, _db, auth, hint, eventCtrl, iab) {
        this.modalCtrl = modalCtrl;
        this._db = _db;
        this.auth = auth;
        this.hint = hint;
        this.eventCtrl = eventCtrl;
        this.iab = iab;
        this.items = [
            { 'id': 0, 'title': '鑽石水果王', 'pic': 'icon1' },
            { 'id': 1, 'title': '棋聖', 'pic': 'icon2' },
            { 'id': 2, 'title': '金玉滿堂', 'pic': 'icon3' },
            { 'id': 3, 'title': '金雞報喜', 'pic': 'icon4' },
            { 'id': 4, 'title': '鐘馗', 'pic': 'icon5' },
            { 'id': 5, 'title': '五福臨門', 'pic': 'icon6' },
            { 'id': 6, 'title': '櫻花妹子', 'pic': 'icon7' },
            { 'id': 7, 'title': '跳起來', 'pic': 'icon8' },
            { 'id': 8, 'title': '水世界', 'pic': 'icon9' },
            { 'id': 9, 'title': '888', 'pic': 'icon10' }
        ];
        this.config = this._db.list("gameconfig").valueChanges();
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.config.subscribe(function (valueOfItems) {
            _this.idopen = valueOfItems;
            console.log(_this.idopen);
        });
    };
    HomePage.prototype.itemSelected = function (id) {
        //console.log("Selected Item", id);
        var open = this.idopen[id['id']];
        switch (open) {
            case 0:
                this.hint.msg("遊戲尚未開放");
                return;
            case 2:
                this.hint.msg("即將開放");
                return;
            case 3:
                this.hint.msg("維護中");
                return;
        }
        var gamefolder = id['id'] + 1;
        var option = {
            location: 'no',
            hardwareback: 'no'
        };
        this.iab.create('http://nobudgetStudio.nctu.me/' + gamefolder + "/", '_system', //chrome 開
        //'_blank', //inAppBrowser中 開,有問題
        option);
    };
    HomePage.prototype.authClick = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__mail_pwlogin_mail_pwlogin__["a" /* MailPwloginPage */]);
        modal.present();
    };
    HomePage.prototype.gamerediect = function () {
        var option = {
            location: 'no',
            hardwareback: 'no'
        };
        this.iab.create('http://nobudgetStudio.nctu.me/', '_self', option);
    };
    HomePage.prototype.ngOnInit = function () {
        this.auth.Authinit();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\dyson\Downloads\D\GitHub\loginclinet\loginClient\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      demo\n\n    </ion-title>\n\n    <about-auth></about-auth>\n\n   \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    \n\n  <button ion-button icon-only color="royal" (click)="authClick()">\n\n    <ion-icon name="person"></ion-icon>\n\n  </button>\n\n  \n\n  <ion-list>\n\n      <ion-card *ngFor="let item of items" (click)="itemSelected(item)">\n\n          <!-- <ion-card-header>\n\n            <ion-card-title>{{item.title}}</ion-card-title>\n\n          </ion-card-header> -->\n\n          <div class="card-title"> {{item.title}}</div>\n\n          <!-- <div class="card-subtitle">41 Listings</div> -->\n\n          <img src= "assets/icon/{{item.pic}}.png" >\n\n          <ion-card-content >\n\n             \n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n       \n\n</ion-list>\n\n  \n\n\n\n\n\n\n\n  \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\dyson\Downloads\D\GitHub\loginclinet\loginClient\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_hint_hint__["a" /* HintProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(453);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_social_sharing_ngx__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser_ngx__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_auth_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_hint_hint__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mail_pwlogin_mail_pwlogin__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var config = {
    apiKey: "AIzaSyAHhB3JTG4yjBaLzAxleSfaVnSUdN89GBk",
    authDomain: "godpoint-4ee0d.firebaseapp.com",
    databaseURL: "https://godpoint-4ee0d.firebaseio.com",
    projectId: "godpoint-4ee0d"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mail_pwlogin_mail_pwlogin__["a" /* MailPwloginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/mail-pwlogin/mail-pwlogin.module#MailPwloginPageModule', name: 'MailPwloginPage', segment: 'mail-pwlogin', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["AngularFireModule"].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mail_pwlogin_mail_pwlogin__["a" /* MailPwloginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["AngularFireModule"],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_social_sharing_ngx__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_14__providers_hint_hint__["a" /* HintProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_auth_about_auth__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__about_auth_about_auth__["a" /* AboutAuthComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__about_auth_about_auth__["a" /* AboutAuthComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutAuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing_ngx__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hint_hint__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AboutAuthComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AboutAuthComponent = /** @class */ (function () {
    function AboutAuthComponent(actionSheetCtrl, hint, socialSharing) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.hint = hint;
        this.socialSharing = socialSharing;
        console.log('Hello AboutAuthComponent Component');
    }
    AboutAuthComponent.prototype.authClick = function () {
        this.presentActionSheet();
    };
    AboutAuthComponent.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '關於',
            buttons: [
                {
                    text: '作者:dyson hung',
                    role: 'destructive',
                    handler: function () {
                        //console.log('Destructive clicked');
                    }
                }, {
                    text: 'Email:hhg4092@gmail.com(點擊提出建議)',
                    handler: function () {
                        _this.socialSharing.canShareViaEmail().then(function () {
                            // Sharing via email is possible
                            _this.socialSharing.shareViaEmail('hi:', '神仙指路玩家意見', ['hhg4092@gmail.com']).then(function () {
                                // Success!
                                _this.hint.msg("送出成功");
                            }).catch(function () {
                                // Error!
                                _this.hint.msg("送出錯誤");
                            });
                        }).catch(function () {
                            // Sharing via email is not possible
                            _this.hint.msg("目前無法使用信件");
                        });
                    }
                }, {
                    text: '問題回報',
                    role: 'destructive',
                    handler: function () {
                        _this.socialSharing.canShareViaEmail().then(function () {
                            // Sharing via email is possible
                            _this.socialSharing.shareViaEmail('hi 使用過程有問題...', '神仙指路bug', ['hhg4092@gmail.com']).then(function () {
                                // Success!
                                _this.hint.msg("送出成功");
                            }).catch(function () {
                                // Error!
                                _this.hint.msg("送出錯誤");
                            });
                        }).catch(function () {
                            // Sharing via email is not possible
                            _this.hint.msg("目前無法使用信件");
                        });
                    }
                }, {
                    text: '取消',
                    role: 'destructive',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AboutAuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'about-auth',template:/*ion-inline-start:"C:\Users\dyson\Downloads\D\GitHub\loginclinet\loginClient\src\components\about-auth\about-auth.html"*/'<!-- Generated template for the AboutAuthComponent component -->\n<ion-buttons end>\n    <button ion-button icon-only color="royal" (click)="authClick()">\n      <ion-icon name="person"></ion-icon>\n    </button>\n</ion-buttons>\n'/*ion-inline-end:"C:\Users\dyson\Downloads\D\GitHub\loginclinet\loginClient\src\components\about-auth\about-auth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_hint_hint__["a" /* HintProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing_ngx__["a" /* SocialSharing */]])
    ], AboutAuthComponent);
    return AboutAuthComponent;
}());

//# sourceMappingURL=about-auth.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\dyson\Downloads\D\GitHub\loginclinet\loginClient\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\dyson\Downloads\D\GitHub\loginclinet\loginClient\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[331]);
//# sourceMappingURL=main.js.map