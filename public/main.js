(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/envios/envios.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/envios/envios.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table{\r\n    margin-top:2%;\r\n}"

/***/ }),

/***/ "./src/app/admin/envios/envios.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/envios/envios.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<div class=\"container col-sm-12 col-md-8\">\r\n    <table class=\"table\">\r\n        <thead>\r\n            <th>#</th>\r\n            <th>CI Cliente</th>\r\n            <th>Número de Teléfono</th>\r\n            <th>Dirección</th>\r\n            <th>Fecha</th>\r\n        </thead>\r\n        <tr *ngFor=\"let envio of envios; index as i\">\r\n            <td *ngIf=\"!envio.confirmada\">{{i+1}}</td>\r\n            <td *ngIf=\"!envio.confirmada\">{{envio.cedula}}</td>\r\n            <td *ngIf=\"!envio.confirmada\">{{envio.telefono}}</td>\r\n            <td *ngIf=\"!envio.confirmada\">{{envio.direccion}}</td>\r\n            <td *ngIf=\"!envio.confirmada\">{{envio.fecha.toDate() | date}}</td>\r\n            <td *ngIf=\"!envio.confirmada\"><a class=\"btn btn-primary\" (click)=\"confirmar(envio)\">Confirmar envío</a></td>\r\n        </tr>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/envios/envios.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/envios/envios.component.ts ***!
  \**************************************************/
/*! exports provided: EnviosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnviosComponent", function() { return EnviosComponent; });
/* harmony import */ var _core_envios_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/envios.service */ "./src/app/core/envios.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/clientes.service */ "./src/app/core/clientes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnviosComponent = /** @class */ (function () {
    function EnviosComponent(clientesService, enviosService) {
        this.clientesService = clientesService;
        this.enviosService = enviosService;
        this.envios = [];
    }
    EnviosComponent.prototype.ngOnInit = function () {
        this.getEnvios();
    };
    EnviosComponent.prototype.getEnvios = function () {
        var _this = this;
        this.enviosService.getEnvios()
            .subscribe(function (data) {
            _this.envios = data;
        });
    };
    EnviosComponent.prototype.confirmar = function (envio) {
        envio.confirmada = true;
        this.enviosService.updateEnvio(envio);
    };
    EnviosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-envios',
            template: __webpack_require__(/*! ./envios.component.html */ "./src/app/admin/envios/envios.component.html"),
            styles: [__webpack_require__(/*! ./envios.component.css */ "./src/app/admin/envios/envios.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_core_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ClientesService"],
            _core_envios_service__WEBPACK_IMPORTED_MODULE_0__["EnviosService"]])
    ], EnviosComponent);
    return EnviosComponent;
}());



/***/ }),

/***/ "./src/app/admin/home-admin/home-admin.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/home-admin/home-admin.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel {\r\n    margin-left: 5%;\r\n    width:90%;\r\n    height:auto;\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n    width:25%;\r\n    margin-left:37%;\r\n    margin-bottom:4%;\r\n    font-family:'Lucida Sans Unicode';\r\n    border-bottom:solid orangered 2px;\r\n}\r\n\r\n.eliminate{\r\n    margin-left: 25%;\r\n    width: 50%;\r\n    color:black;\r\n    background: white;\r\n}\r\n\r\np:hover{\r\n    cursor: pointer;\r\n    color:white;\r\n    background: black;\r\n}\r\n\r\nimg{\r\n    width:100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/home-admin/home-admin.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/home-admin/home-admin.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<div class=\"row\">\r\n    <h1>Inicio de administrador</h1>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-6 col-xs-12\">\r\n        <ngb-carousel *ngIf=\"images\" [showNavigationIndicators]=\"showNavigationIndicators\">\r\n            <div *ngFor=\"let image of images; index as i\">\r\n                <ng-template ngbSlide>\r\n                    <img src=\"{{image.image}}\" alt=\"{{i}}\">\r\n                    <div class=\"carousel-caption\">\r\n                        <h3></h3>\r\n                        <p class=\"eliminate\" (click)=\"eliminar(image, i)\">Eliminar</p>\r\n                    </div>\r\n                </ng-template>\r\n            </div>\r\n        </ngb-carousel>\r\n    </div>\r\n    <div class=\"col-md-6 col-xs-12\">\r\n        <label>Agregar Imágen:</label><br>\r\n        <input type=\"file\" (change)=\"uploadFoto($event)\">\r\n        <div class=\"progress\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" [style.width]=\"(uploadProgress | async) + '%'\" [attr.aria-valuenow]=\"(uploadProgress | async)\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n        <div *ngIf=\"error\">{{error}}</div><br>\r\n        <p>Registrar admin</p>\r\n        <form (ngSubmit)=\"register($event,fromNew)\" #formNew=\"ngForm\">\r\n            <label>Correo electrónico</label>\r\n            <input type=\"text\" (keyup)=\"advance($event)\" [(ngModel)]=\"newEmail\" #email=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Introduzca un correo electrónico\"><br><br>\r\n            <div *ngIf=\"auth.error\">\r\n                <p *ngIf=\"auth.error == errMes2\">Lo ingresado no es un correo</p>\r\n                <p *ngIf=\"auth.error == errMes1\">El correo ya está en uso</p>\r\n            </div>\r\n            <label>Contraseña</label>\r\n            <input type=\"password\" (keyup)=\"validarPass($event)\" [(ngModel)]=\"pass\" #password=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Elija una contraseña\"  maxlength=\"20\"><br>\r\n            <p *ngIf=\"validPass && pass.length>0\">La contraseña debe ser mayor a 8 caracteres</p><br>\r\n            <label>Confirmar Contraseña</label>\r\n            <input type=\"password\" (keyup)=\"validarConfirPass($event)\" [(ngModel)]=\"passConfirm\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Confirma la contraseña\" maxlength=\"20\"><br>\r\n            <p *ngIf=\"validConfirPass && passConfirm.length>0\">Las contraseñas no coinciden</p><br>\r\n            <div *ngIf=\"auth.error\">\r\n                <p *ngIf=\"auth.error == errMes3\">{{errMes3}}</p>\r\n                <p *ngIf=\"auth.error == errMes4\">Error de conexión, inténtelo cuando su conexión sea más estable</p>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary bt\" role=\"button\">Añadir admin</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/home-admin/home-admin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/home-admin/home-admin.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminComponent", function() { return HomeAdminComponent; });
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_carousel_images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/carousel-images.service */ "./src/app/core/carousel-images.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeAdminComponent = /** @class */ (function () {
    function HomeAdminComponent(carouselImagesService, afStorage, auth) {
        this.carouselImagesService = carouselImagesService;
        this.afStorage = afStorage;
        this.auth = auth;
        this.showNavigationIndicators = false;
        this.toAdd = {
            image: '',
        };
        this.newEmail = '';
        this.pass = '';
        this.passConfirm = '';
        this.validPass = false;
        this.validConfirPass = false;
        this.errMes1 = 'The email address is already in use by another account.';
        this.errMes2 = 'The email address is badly formatted.';
        this.errMes3 = 'Los campos son inválidos';
        this.errMes4 = 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.';
    }
    HomeAdminComponent.prototype.ngOnInit = function () {
        this.auth.error = '';
        this.getImages();
    };
    HomeAdminComponent.prototype.getImages = function () {
        var _this = this;
        this.carouselImagesService.getImages().subscribe(function (data) {
            _this.images = data;
        });
    };
    HomeAdminComponent.prototype.eliminar = function (image, i) {
        this.carouselImagesService.deleteImage(image);
        this.images.slice(i, 1);
    };
    HomeAdminComponent.prototype.advance = function (e) {
        if (this.newEmail != '' && this.pass != '') {
            return true;
        }
        else {
            return false;
        }
    };
    HomeAdminComponent.prototype.validarConfirPass = function (e) {
        if (this.pass != this.passConfirm) {
            this.validConfirPass = true;
        }
        else {
            this.validConfirPass = false;
        }
    };
    HomeAdminComponent.prototype.validarPass = function (e) {
        if (this.pass.length < 8) {
            this.validPass = true;
        }
        else {
            this.validPass = false;
        }
        this.validarConfirPass(e);
    };
    HomeAdminComponent.prototype.register = function (e, f) {
        if (this.advance && !this.validConfirPass && !this.validPass) {
            this.auth.signUpAdmin(this.newEmail, this.pass);
        }
        else {
            this.auth.error = this.errMes3;
        }
    };
    HomeAdminComponent.prototype.uploadFoto = function (e) {
        var _this = this;
        var file = e.target.files[0];
        if (file) {
            if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg') {
                var id = 'carousel-images/' + file.name;
                this.ref = this.afStorage.ref(id);
                this.uploadTask = this.ref.put(file);
                this.uploadProgress = this.uploadTask.percentageChanges();
                this.ref.getDownloadURL().subscribe(function (data) {
                    _this.toAdd.image = data;
                    _this.carouselImagesService.addImage(_this.toAdd);
                    _this.toAdd.image = '';
                    _this.images.push(data);
                    _this.error = '';
                });
            }
            else {
                this.error = 'El archivo no es una imágen';
            }
        }
        else {
            this.error = '';
        }
    };
    HomeAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home-admin',
            template: __webpack_require__(/*! ./home-admin.component.html */ "./src/app/admin/home-admin/home-admin.component.html"),
            styles: [__webpack_require__(/*! ./home-admin.component.css */ "./src/app/admin/home-admin/home-admin.component.css")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselConfig"]]
        }),
        __metadata("design:paramtypes", [_core_carousel_images_service__WEBPACK_IMPORTED_MODULE_1__["CarouselImagesService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], HomeAdminComponent);
    return HomeAdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/menu-admin/add-plato/add-plato.component.css":
/*!********************************************************************!*\
  !*** ./src/app/admin/menu-admin/add-plato/add-plato.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    text-align: center;\r\n    width:25%;\r\n    margin-left:37%;\r\n    margin-bottom:0%;\r\n    font-family:'Lucida Sans Unicode';\r\n    border-bottom:solid orangered 2px;\r\n}\r\nlabel{\r\n    margin-left:5%;\r\n    font-family:'Lucida Sans Unicode';\r\n}\r\nlabel{\r\n    text-align: center;\r\n    width: 30%;\r\n}\r\ninput{\r\n    border-radius: 20px;\r\n    width: 40%;\r\n    display: flex;\r\n    flex-direction:column;\r\n    border: none;\r\n    background: white;\r\n}\r\nform{\r\n    background:#f1f1f1;\r\n    border-radius: 10%;\r\n    width:30%;\r\n    margin-left:34%;\r\n    padding: 4% 4% 1% 0;\r\n    font-family:'Lucida Sans Unicode';\r\n}\r\nbutton{\r\n    text-decoration: none;\r\n    margin-left:40%;\r\n    color: rgb(0, 0, 0);\r\n    padding: 2% 6%;\r\n    background: rgb(18, 147, 233);\r\n    border-radius: 20px;\r\n    font-family:'Lucida Sans Unicode';\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\nbutton:link{\r\n    color:black;\r\n}\r\nbutton:hover{\r\n    background: #0a1aff;\r\n}\r\ninput{\r\n    width: 100%;\r\n    margin-left:5%;\r\n    margin-bottom: 0%;\r\n    padding: 2%;\r\n    font-family:'Lucida Sans Unicode';\r\n    \r\n}\r\ninput:focus{\r\n    border: 1px solid #2f49da;\r\n}\r\np{\r\n    margin-left:5%;\r\n    margin-top:0%;\r\n    font-size:90%;\r\n    color:red;\r\n}"

/***/ }),

/***/ "./src/app/admin/menu-admin/add-plato/add-plato.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/menu-admin/add-plato/add-plato.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<h1>Agregar Plato</h1>\r\n<form (ngSubmit)=\"add(formNew)\" #formNew=\"ngForm\">\r\n  <div>\r\n    <div *ngIf=plato.image>\r\n      <img src=\"{{plato.image}}\" class=\"rounded mx-auto d-block\" width=100>\r\n    </div><br>\r\n    <div>\r\n      Nombre: <input type=\"text\" maxlength=\"20\" [(ngModel)]=\"plato.nombre\" #nombre=\"ngModel\" placeholder=\"Nombre del plato\" [ngModelOptions]=\"{standalone: true}\">\r\n    </div>\r\n    <div>\r\n      Precio: <input type=\"number\" placeholder=\"Precio\"[(ngModel)]=\"plato.precio\" #precio=\"ngModel\" [ngModelOptions]=\"{standalone: true}\"> Bs.\r\n    </div>\r\n    <div>\r\n      Personalizable: <input type=\"checkbox\" [(ngModel)]=\"plato.personal\" #personal=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\r\n    </div>\r\n    <div *ngIf=\"plato.personal\">\r\n      <h6>Contornos:</h6>\r\n      <div *ngFor=\"let contorno of plato.contornos\">\r\n        <div *ngIf=contorno.nombre >\r\n          <input type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"contorno.nombre\" [ngModelOptions]=\"{standalone: true}\">\r\n          <input type=\"number\" placeholder=\"Precio\" [(ngModel)]=\"contorno.carga\" [ngModelOptions]=\"{standalone: true}\"><br>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <input type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"addingContorno\" [ngModelOptions]=\"{standalone: true}\">\r\n        <input type=\"number\" placeholder=\"Precio\" [(ngModel)]=\"cargaContorno\" [ngModelOptions]=\"{standalone: true}\"><br>\r\n        <a (click)=\"addContorno()\" class=\"btn btn-primary contorno\">Agregar</a>\r\n        <a (click)=\"deleteContorno()\" class=\"btn btn-primary contorno\">Eliminar Último</a>\r\n      </div>\r\n      <p *ngIf=\"errorContorno.length>0\">{{errorContorno}}</p>\r\n    </div>\r\n    <div>\r\n      Habilitado: <input type=\"checkbox\" [(ngModel)]=\"plato.activo\" #activo=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\r\n    </div>\r\n    <div>\r\n      Imágen: <input type=\"file\" (change)=\"uploadFoto($event)\">\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar\" role=\"progressbar\" [style.width]=\"(uploadProgress | async) + '%'\" [attr.aria-valuenow]=\"(uploadProgress | async)\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n      </div>\r\n    </div>\r\n    <p *ngIf=\"error.length>0\">{{error}}</p>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Agregar</button>\r\n  </div>\r\n</form>\r\n<div>\r\n  <a (click)=\"goBack()\">Volver</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/menu-admin/add-plato/add-plato.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/menu-admin/add-plato/add-plato.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddPlatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlatoComponent", function() { return AddPlatoComponent; });
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_plato_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/plato.service */ "./src/app/core/plato.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPlatoComponent = /** @class */ (function () {
    function AddPlatoComponent(platosService, location, router, afStorage) {
        this.platosService = platosService;
        this.location = location;
        this.router = router;
        this.afStorage = afStorage;
        this.plato = {
            nombre: '',
            precio: 0,
            personal: false,
            activo: false,
            image: '',
            contornos: [{
                    nombre: '',
                    carga: 0,
                    elegido: false
                }]
        };
        this.error = "";
        this.errorContorno = "";
    }
    AddPlatoComponent.prototype.ngOnInit = function () {
        this.advance = true;
    };
    AddPlatoComponent.prototype.add = function (f) {
        if (this.advance) {
            if (this.plato.nombre != '' && this.plato.precio > 0 && this.isFoto) {
                this.plato.nombre = this.plato.nombre.toLowerCase();
                this.error = '';
                this.platosService.addPlato(this.plato);
                this.router.navigate(['/menu-admin']);
            }
            else {
                this.error = 'Campos inválidos';
            }
        }
        else {
            this.error = 'Se está cargando una imágen';
        }
    };
    AddPlatoComponent.prototype.goBack = function () {
        this.router.navigate(['/menu-admin']);
    };
    AddPlatoComponent.prototype.addContorno = function () {
        if (this.cargaContorno > 0 && this.addingContorno != '') {
            this.plato.contornos.push({
                nombre: this.addingContorno,
                carga: this.cargaContorno,
                elegido: false
            });
            this.addingContorno = '';
            this.cargaContorno = 0;
            this.errorContorno = '';
        }
        else {
            this.errorContorno = 'Campos inválidos';
        }
    };
    AddPlatoComponent.prototype.deleteContorno = function () {
        this.plato.contornos.pop();
        this.errorContorno = "";
    };
    AddPlatoComponent.prototype.uploadFoto = function (e) {
        var _this = this;
        var file = e.target.files[0];
        if (file) {
            if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg') {
                this.advance = false;
                var id = 'menu-images/' + file.name;
                this.ref = this.afStorage.ref(id);
                this.uploadTask = this.ref.put(file);
                this.uploadProgress = this.uploadTask.percentageChanges();
                this.ref.getDownloadURL().subscribe(function (data) {
                    _this.plato.image = data;
                    _this.isFoto = true;
                    _this.error = '';
                    _this.advance = true;
                });
            }
            else {
                this.error = 'El archivo no es una imágen';
            }
        }
        else {
            this.error = '';
        }
    };
    AddPlatoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-plato',
            template: __webpack_require__(/*! ./add-plato.component.html */ "./src/app/admin/menu-admin/add-plato/add-plato.component.html"),
            styles: [__webpack_require__(/*! ./add-plato.component.css */ "./src/app/admin/menu-admin/add-plato/add-plato.component.css")]
        }),
        __metadata("design:paramtypes", [_core_plato_service__WEBPACK_IMPORTED_MODULE_2__["PlatoService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_0__["AngularFireStorage"]])
    ], AddPlatoComponent);
    return AddPlatoComponent;
}());



/***/ }),

/***/ "./src/app/admin/menu-admin/menu-admin.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/menu-admin/menu-admin.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table{\r\n    margin-top:2%;\r\n}\r\n.perso{\r\n    width:50%;\r\n}\r\nth{\r\n    text-align: center;\r\n    font-size: 120%;\r\n}\r\ntd{\r\n    text-align: center;\r\n    font-size:105%;\r\n}\r\nh5{\r\n    text-align: center;\r\n    margin-left: 10%;\r\n}\r\nlabel{\r\n    margin-left:5%;\r\n    font-family:'Lucida Sans Unicode';\r\n    text-align: center;\r\n    width: 30%;\r\n}\r\n.progress{\r\n    margin-left: 7%;\r\n}\r\ninput{\r\n    border-radius: 20px;\r\n    width: 40%;\r\n    display: flex;\r\n    flex-direction:column;\r\n    border: none;\r\n    background: white;\r\n}\r\nform{\r\n    background:#e1e1e1;\r\n    border-radius: 10%;\r\n    width:30%;\r\n    margin-top: 2%;\r\n    margin-left:34%;\r\n    padding: 4% 4% 1% 0;\r\n    font-family:'Lucida Sans Unicode';\r\n}\r\nbutton{\r\n    text-decoration: none;\r\n    margin-left:30%;\r\n    color: rgb(0, 0, 0);\r\n    padding: 2% 6%;\r\n    background: rgb(18, 147, 233);\r\n    border-radius: 10px;\r\n    font-family:'Lucida Sans Unicode';\r\n    font-size: small;\r\n    text-align: center;\r\n}\r\nbutton:link{\r\n    color:black;\r\n}\r\nbutton:hover{\r\n    background: #0a1aff;\r\n}\r\ninput{\r\n    width: 100%;\r\n    margin-left:5%;\r\n    margin-bottom: 0%;\r\n    padding: 2%;\r\n    font-family:'Lucida Sans Unicode';\r\n    \r\n}\r\ninput:focus{\r\n    border: 1px solid #2f49da;\r\n}\r\n.add{\r\n    margin-left: 20%;\r\n}\r\n.contorno{\r\n    text-align: center;\r\n    margin-left: 7%;\r\n}\r\na{\r\n    color:white\r\n}\r\n.error{\r\n    margin-left:5%;\r\n    margin-top:0%;\r\n    font-size:90%;\r\n    color:red;\r\n}"

/***/ }),

/***/ "./src/app/admin/menu-admin/menu-admin.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/menu-admin/menu-admin.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<table *ngIf=\"!editState\" class=\"table table-bordered\">\r\n    <thead>\r\n        <tr>\r\n            <th>Imágen</th>\r\n            <th>Producto</th>\r\n            <th>Precio</th>\r\n            <th>Editar</th>\r\n            <th>Eliminar</th>\r\n        </tr>\r\n    </thead>\r\n    <tr  *ngFor=\"let plato of platos\">\r\n        <td><img class=\"rounded mx-auto d-block\" width=100 src=\"{{plato.image}}\"></td>\r\n        <td><p>{{plato.nombre}}</p></td>\r\n        <td><p>{{plato.precio}} BsS.</p></td>\r\n        <td><a class=\"btn btn-primary other\" (click)=\"edit($event,plato)\">Editar</a></td>\r\n        <td><a class=\"btn btn-primary other\" (click)=\"delete($event,plato)\">Eliminar</a></td>\r\n    </tr>\r\n</table>\r\n\r\n<div *ngIf=\"editState\">\r\n    <form (ngSubmit)=\"updatePlato(platoToEdit)\">\r\n        <h5>Editando: {{platoToEdit.nombre}}</h5>\r\n        <div *ngIf=editingImage>\r\n            <img src=\"{{editingImage}}\" class=\"rounded mx-auto d-block\" width=100>\r\n        </div><br>\r\n            <label>Nombre:</label> <input type=\"text\" maxlength=\"20\" [(ngModel)]=\"platoToEdit.nombre\" #nombre=\"ngModel\" placeholder=\"Nombre del plato\" [ngModelOptions]=\"{standalone: true}\">\r\n            <label>Precio:</label> <input type=\"number\" placeholder=\"Precio\"[(ngModel)]=\"platoToEdit.precio\" #precio=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\r\n            <label>Personalizable:</label> <input type=\"checkbox\" [(ngModel)]=\"platoToEdit.personal\" #personal=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\r\n          <div *ngIf=\"platoToEdit.personal\">\r\n            <label>Contornos:</label>\r\n            <div *ngFor=\"let contorno of platoToEdit.contornos\">\r\n                <div *ngIf=contorno.nombre >\r\n                    <input type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"contorno.nombre\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <input type=\"number\" placeholder=\"Precio\" [(ngModel)]=\"contorno.carga\" [ngModelOptions]=\"{standalone: true}\"><br>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <input type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"addingContorno\" [ngModelOptions]=\"{standalone: true}\">\r\n                <input type=\"number\" placeholder=\"Precio\" [(ngModel)]=\"cargaContorno\" [ngModelOptions]=\"{standalone: true}\"><br>\r\n                <p class=\"error\" *ngIf=\"errorContorno.length>0\">{{errorContorno}}</p>\r\n                <a (click)=\"addContorno()\" class=\"btn btn-primary contorno\">Agregar</a>\r\n                <a (click)=\"deleteContorno()\" class=\"btn btn-primary contorno\">Eliminar Último</a>\r\n            </div>\r\n          </div>\r\n            <label>Habilitado:</label> <input type=\"checkbox\" [(ngModel)]=\"platoToEdit.activo\" #activo=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\r\n            <label>Imágen:</label> <input type=\"file\" (change)=\"uploadFoto($event)\">\r\n            <div class=\"progress\">\r\n              <div class=\"progress-bar\" role=\"progressbar\" [style.width]=\"(uploadProgress | async) + '%'\" [attr.aria-valuenow]=\"(uploadProgress | async)\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>\r\n            <p class=\"error\" *ngIf=\"error.length>0\">{{error}}</p>\r\n          <button type=\"submit\" class=\"btn btn-primary\">Guardar cambios</button>\r\n      </form>\r\n      <a (click)=\"clearEditing()\" class=\"btn btn-primary\">Volver</a>\r\n</div>\r\n<input type=\"text\" [(ngModel)]=\"campoText\" #campo=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"search($event)\" placeholder=\"Busca un plato\">\r\n<td *ngIf=\"!editState\"><a (click)=\"goAdd()\" class=\"btn btn-primary add\">Agregar</a></td>"

/***/ }),

/***/ "./src/app/admin/menu-admin/menu-admin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/menu-admin/menu-admin.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAdminComponent", function() { return MenuAdminComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_plato_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/plato.service */ "./src/app/core/plato.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuAdminComponent = /** @class */ (function () {
    function MenuAdminComponent(platoService, router, afStorage) {
        this.platoService = platoService;
        this.router = router;
        this.afStorage = afStorage;
        this.platos = [];
        this.editState = false;
        this.error = '';
        this.errorContorno = '';
    }
    MenuAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.platoService.getPlatos()
            .subscribe(function (data) {
            _this.platos = data;
        });
    };
    MenuAdminComponent.prototype.delete = function (event, plato) {
        this.platoService.deletePlato(plato);
    };
    MenuAdminComponent.prototype.edit = function (event, plato) {
        this.editState = true;
        this.last = true;
        this.advance = true;
        this.platoToEdit = plato;
        this.addingContorno = '';
        this.cargaContorno = 0;
        this.platoToEdit.contornos.push({
            nombre: this.addingContorno,
            carga: this.cargaContorno,
            elegido: false
        });
        this.editingImage = plato.image;
    };
    MenuAdminComponent.prototype.updatePlato = function (plato) {
        if (this.advance) {
            if (plato.precio > 0 && plato.nombre != '') {
                plato.nombre = plato.nombre.toLowerCase();
                var i = 0;
                while (i < plato.contornos.length) {
                    if (plato.contornos[i].carga === 0) {
                        plato.contornos.splice(i, 1);
                    }
                    i++;
                }
                plato.image = this.editingImage;
                this.platoService.updatePlato(plato);
                this.clearEditing();
            }
            else {
                this.error = 'Campos inválidos';
            }
        }
        else {
            this.error = 'Se está cargando una imágen';
        }
    };
    MenuAdminComponent.prototype.addContorno = function () {
        if (this.cargaContorno > 0 && this.addingContorno != "") {
            this.platoToEdit.contornos.push({
                nombre: this.addingContorno,
                carga: this.cargaContorno,
                elegido: false
            });
            this.addingContorno = "";
            this.cargaContorno = 0;
            this.errorContorno = "";
        }
        else {
            this.errorContorno = "Campos inválidos";
        }
    };
    MenuAdminComponent.prototype.deleteContorno = function () {
        this.platoToEdit.contornos.pop();
        if (this.last) {
            this.platoToEdit.contornos.pop();
            this.last = false;
        }
        this.errorContorno = '';
    };
    MenuAdminComponent.prototype.clearEditing = function () {
        this.editState = false;
        this.platoToEdit = null;
        this.error = '';
        this.editingImage = '';
    };
    MenuAdminComponent.prototype.goAdd = function () {
        this.router.navigate(['/menu-admin/add-plato']);
    };
    MenuAdminComponent.prototype.search = function (e) {
        var _this = this;
        var v = this.campoText.toLowerCase();
        this.platoService.searchPlatos(v)
            .subscribe(function (data) {
            _this.platos = data;
        });
    };
    MenuAdminComponent.prototype.uploadFoto = function (e) {
        var _this = this;
        var file = e.target.files[0];
        if (file) {
            if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg') {
                this.advance = false;
                var id = 'menu-images/' + file.name;
                this.ref = this.afStorage.ref(id);
                this.uploadTask = this.ref.put(file);
                this.uploadProgress = this.uploadTask.percentageChanges();
                this.ref.getDownloadURL().subscribe(function (data) {
                    _this.editingImage = data;
                    _this.isFoto = true;
                    _this.error = '';
                    _this.advance = true;
                });
            }
            else {
                this.error = 'El archivo no es una imágen';
            }
        }
        else {
            this.error = '';
        }
    };
    MenuAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-menu-admin',
            template: __webpack_require__(/*! ./menu-admin.component.html */ "./src/app/admin/menu-admin/menu-admin.component.html"),
            styles: [__webpack_require__(/*! ./menu-admin.component.css */ "./src/app/admin/menu-admin/menu-admin.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_core_plato_service__WEBPACK_IMPORTED_MODULE_1__["PlatoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])
    ], MenuAdminComponent);
    return MenuAdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _admin_menu_admin_add_plato_add_plato_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/menu-admin/add-plato/add-plato.component */ "./src/app/admin/menu-admin/add-plato/add-plato.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_navigation_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/navigation/navbar/navbar.component */ "./src/app/login/navigation/navbar/navbar.component.ts");
/* harmony import */ var _login_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/home/home.component */ "./src/app/login/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_navigation_navbar_login_navbar_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/navigation/navbar-login/navbar-login.component */ "./src/app/login/navigation/navbar-login/navbar-login.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _login_home_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/home/menu/menu.component */ "./src/app/login/home/menu/menu.component.ts");
/* harmony import */ var _login_home_cuenta_cuenta_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/home/cuenta/cuenta.component */ "./src/app/login/home/cuenta/cuenta.component.ts");
/* harmony import */ var _login_home_help_help_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/home/help/help.component */ "./src/app/login/home/help/help.component.ts");
/* harmony import */ var _login_navigation_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/navigation/navbar-admin/navbar-admin.component */ "./src/app/login/navigation/navbar-admin/navbar-admin.component.ts");
/* harmony import */ var _admin_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/menu-admin/menu-admin.component */ "./src/app/admin/menu-admin/menu-admin.component.ts");
/* harmony import */ var _admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/home-admin/home-admin.component */ "./src/app/admin/home-admin/home-admin.component.ts");
/* harmony import */ var _admin_envios_envios_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/envios/envios.component */ "./src/app/admin/envios/envios.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
        ],
        component: _login_navigation_navbar_login_navbar_login_component__WEBPACK_IMPORTED_MODULE_7__["NavbarLoginComponent"]
    },
    {
        path: '',
        children: [
            { path: 'form', redirectTo: '/form', pathMatch: 'full' },
            { path: 'form', component: _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"] },
        ],
        component: _login_navigation_navbar_login_navbar_login_component__WEBPACK_IMPORTED_MODULE_7__["NavbarLoginComponent"]
    },
    {
        path: '',
        children: [
            { path: 'home', redirectTo: '/home', pathMatch: 'full', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
            { path: 'home', component: _login_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
        ],
        component: _login_navigation_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
    },
    {
        path: '',
        children: [
            { path: 'menu', redirectTo: '/menu', pathMatch: 'full', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
            { path: 'menu', component: _login_home_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
        ],
        component: _login_navigation_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
    },
    {
        path: '',
        children: [
            { path: 'ayuda', redirectTo: '/ayuda', pathMatch: 'full', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
            { path: 'ayuda', component: _login_home_help_help_component__WEBPACK_IMPORTED_MODULE_11__["HelpComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
        ],
        component: _login_navigation_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
    },
    {
        path: '',
        children: [
            { path: 'user', redirectTo: '/user', pathMatch: 'full', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
            { path: 'user', component: _login_home_cuenta_cuenta_component__WEBPACK_IMPORTED_MODULE_10__["CuentaComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
        ],
        component: _login_navigation_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
    },
    {
        path: '',
        children: [
            { path: 'menu-admin', redirectTo: '/menu-admin', pathMatch: 'full', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
            { path: 'menu-admin', component: _admin_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_13__["MenuAdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
        ],
        component: _login_navigation_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_12__["NavbarAdminComponent"],
    },
    {
        path: '',
        children: [
            { path: 'home-admin', redirectTo: '/home-admin', pathMatch: 'full', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
            { path: 'home-admin', component: _admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_14__["HomeAdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
        ],
        component: _login_navigation_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_12__["NavbarAdminComponent"],
    },
    {
        path: '',
        children: [
            { path: 'envios', redirectTo: '/envios', pathMatch: 'full', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
            { path: 'envios', component: _admin_envios_envios_component__WEBPACK_IMPORTED_MODULE_15__["EnviosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
        ],
        component: _login_navigation_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_12__["NavbarAdminComponent"],
    },
    {
        path: '',
        children: [
            { path: 'menu-admin/add-plato', redirectTo: 'menu-admin/add-plato', pathMatch: 'full', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
            { path: 'menu-admin/add-plato', component: _admin_menu_admin_add_plato_add_plato_component__WEBPACK_IMPORTED_MODULE_1__["AddPlatoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
        ],
        component: _login_navigation_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_12__["NavbarAdminComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'uMakeIt';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_navigation_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/navigation/navbar/navbar.component */ "./src/app/login/navigation/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_home_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/home/menu/menu.component */ "./src/app/login/home/menu/menu.component.ts");
/* harmony import */ var _login_home_cuenta_cuenta_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/home/cuenta/cuenta.component */ "./src/app/login/home/cuenta/cuenta.component.ts");
/* harmony import */ var _login_home_help_help_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/home/help/help.component */ "./src/app/login/home/help/help.component.ts");
/* harmony import */ var _login_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/home/home.component */ "./src/app/login/home/home.component.ts");
/* harmony import */ var _login_navigation_navbar_login_navbar_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/navigation/navbar-login/navbar-login.component */ "./src/app/login/navigation/navbar-login/navbar-login.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _login_navigation_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/navigation/navbar-admin/navbar-admin.component */ "./src/app/login/navigation/navbar-admin/navbar-admin.component.ts");
/* harmony import */ var _admin_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/menu-admin/menu-admin.component */ "./src/app/admin/menu-admin/menu-admin.component.ts");
/* harmony import */ var _admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/home-admin/home-admin.component */ "./src/app/admin/home-admin/home-admin.component.ts");
/* harmony import */ var _admin_envios_envios_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/envios/envios.component */ "./src/app/admin/envios/envios.component.ts");
/* harmony import */ var _admin_menu_admin_add_plato_add_plato_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/menu-admin/add-plato/add-plato.component */ "./src/app/admin/menu-admin/add-plato/add-plato.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























//Servicios

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig, 'uMakeIt'),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"].enablePersistence(),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorageModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"],
                ngx_paypal__WEBPACK_IMPORTED_MODULE_8__["NgxPayPalModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _login_navigation_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _login_home_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                _login_home_cuenta_cuenta_component__WEBPACK_IMPORTED_MODULE_15__["CuentaComponent"],
                _login_home_help_help_component__WEBPACK_IMPORTED_MODULE_16__["HelpComponent"],
                _login_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _login_navigation_navbar_login_navbar_login_component__WEBPACK_IMPORTED_MODULE_18__["NavbarLoginComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_19__["FormComponent"],
                _login_navigation_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_20__["NavbarAdminComponent"],
                _admin_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_21__["MenuAdminComponent"],
                _admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_22__["HomeAdminComponent"],
                _admin_envios_envios_component__WEBPACK_IMPORTED_MODULE_23__["EnviosComponent"],
                _admin_menu_admin_add_plato_add_plato_component__WEBPACK_IMPORTED_MODULE_24__["AddPlatoComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clientes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes.service */ "./src/app/core/clientes.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(fauth, clientesService, router) {
        this.fauth = fauth;
        this.clientesService = clientesService;
        this.router = router;
        this.error = '';
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.fauth.auth.signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Login succesful');
            _this.uid = email;
            _this.error = '';
            _this.clientesService.getCliente(email)
                .subscribe(function (data) {
                var cliente = data[0];
                if (cliente.admin) {
                    _this.router.navigate(['/home-admin']);
                }
                else {
                    _this.router.navigate(['/home']);
                }
            });
        }).catch(function (err) {
            console.log('Error al iniciar sesión: ', err.message);
            _this.error = err.message;
        });
    };
    //Metódo de signup con el email y el password
    AuthService.prototype.signUp = function (email, password, user) {
        var _this = this;
        this.fauth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('User added');
            _this.error = '';
            _this.clientesService.addCliente(user);
            _this.router.navigate(['/home']);
        }).catch(function (err) {
            console.log('Error al añadir usuario: ', err.message);
            _this.error = err.message;
        });
    };
    AuthService.prototype.signUpAdmin = function (email, pass) {
        var _this = this;
        this.fauth.auth.createUserWithEmailAndPassword(email, pass)
            .then(function (value) {
            console.log('Admin added');
            _this.error = '';
            var cliente = {
                email: email,
                admin: true
            };
            _this.clientesService.addCliente(cliente);
        }).catch(function (err) {
            console.log('Error al añadir admin: ', err.message);
            _this.error = err.message;
        });
    };
    AuthService.prototype.logout = function () {
        this.uid = '';
        this.fauth.auth.signOut();
    };
    AuthService.prototype.changePassword = function (newPass) {
        var _this = this;
        this.fauth.auth.currentUser.updatePassword(newPass)
            .then(function (value) {
            console.log('Password changed');
            _this.error = '';
        }).catch(function (err) {
            _this.error = err.message;
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _clientes_service__WEBPACK_IMPORTED_MODULE_1__["ClientesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/carousel-images.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/carousel-images.service.ts ***!
  \*************************************************/
/*! exports provided: Image, CarouselImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselImagesService", function() { return CarouselImagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Image = /** @class */ (function () {
    function Image() {
    }
    return Image;
}());

var CarouselImagesService = /** @class */ (function () {
    function CarouselImagesService(afs) {
        this.afs = afs;
        this.carouselCollection = afs.collection('carousel-images', function (ref) { return ref.orderBy('image', 'asc'); });
        this.carouselImages = this.carouselCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) { return actions.map(function (ref) {
            var data = ref.payload.doc.data();
            var id = ref.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    }
    CarouselImagesService.prototype.addImage = function (carousel) {
        this.carouselCollection.add(carousel);
        console.log("Image added to carousel");
    };
    CarouselImagesService.prototype.getImages = function () {
        return this.carouselImages;
    };
    CarouselImagesService.prototype.deleteImage = function (image) {
        this.carouselImageDoc = this.afs.doc("carousel-images/" + image.id);
        this.carouselImageDoc.delete();
        console.log("Image deleted");
    };
    CarouselImagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], CarouselImagesService);
    return CarouselImagesService;
}());



/***/ }),

/***/ "./src/app/core/clientes.service.ts":
/*!******************************************!*\
  !*** ./src/app/core/clientes.service.ts ***!
  \******************************************/
/*! exports provided: ClientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesService", function() { return ClientesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientesService = /** @class */ (function () {
    function ClientesService(afs) {
        this.afs = afs;
        this.clientesCollection = afs.collection('clientes', function (ref) { return ref.orderBy('email', 'asc'); });
        this.clientes = this.clientesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) { return actions.map(function (ref) {
            var data = ref.payload.doc.data();
            var id = ref.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    }
    //Add new cliente
    ClientesService.prototype.addCliente = function (cliente) {
        this.clientesCollection.add(cliente);
        console.log("Cliente added");
    };
    //Update cliente
    ClientesService.prototype.updateCliente = function (cliente) {
        this.clienteDoc = this.afs.doc("clientes/" + cliente.id);
        this.clienteDoc.update(cliente);
        console.log("Cliente " + cliente.email + " updated");
    };
    //Get cliente by its email
    ClientesService.prototype.getCliente = function (email) {
        return this.afs.collection('clientes', function (ref) {
            return ref.orderBy('email').startAt(email);
        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) { return actions.map(function (ref) {
            var data = ref.payload.doc.data();
            var id = ref.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    ClientesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ClientesService);
    return ClientesService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuthModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestoreModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/envios.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/envios.service.ts ***!
  \****************************************/
/*! exports provided: EnviosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnviosService", function() { return EnviosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnviosService = /** @class */ (function () {
    function EnviosService(afs) {
        this.afs = afs;
    }
    //Get envios from server
    EnviosService.prototype.getEnvios = function () {
        this.enviosCollection = this.afs.collection('envios', function (ref) { return ref.orderBy('fecha', 'asc'); });
        this.envios = this.enviosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            data.id = id;
            return data;
        }); }));
        return this.envios;
    };
    ;
    //Get envio by its id
    EnviosService.prototype.getEnvio = function (id) {
        return (this.afs.doc("envios/" + id).valueChanges());
    };
    //Add new envio
    EnviosService.prototype.addEnvio = function (envio) {
        var wow = this.afs.createId();
        envio.id = wow;
        this.enviosCollection = this.afs.collection('envios', function (ref) { return ref.orderBy('fecha', 'asc'); });
        this.enviosCollection.doc(wow).set(envio);
        console.log("Envio added");
        return wow;
    };
    //Delete envio
    EnviosService.prototype.deleteEnvio = function (envio) {
        this.envioDoc = this.afs.doc("envios/" + envio.id);
        this.envioDoc.delete();
        console.log("Envio deleted");
    };
    //Update envio
    EnviosService.prototype.updateEnvio = function (envio) {
        this.envioDoc = this.afs.doc("envios/" + envio.id);
        this.envioDoc.update(envio);
        console.log("Envío " + envio.id + " actualizado");
    };
    EnviosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], EnviosService);
    return EnviosService;
}());



/***/ }),

/***/ "./src/app/core/plato.service.ts":
/*!***************************************!*\
  !*** ./src/app/core/plato.service.ts ***!
  \***************************************/
/*! exports provided: PlatoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatoService", function() { return PlatoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlatoService = /** @class */ (function () {
    function PlatoService(afs) {
        this.afs = afs;
    }
    //Get platos from server
    PlatoService.prototype.getPlatos = function () {
        console.log("Platos fetched");
        this.platosCollection = this.afs.collection('menu', function (ref) { return ref.orderBy('nombre', 'asc'); });
        this.platos = this.platosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        return this.platos;
    };
    ;
    //Get platos by searchterm
    PlatoService.prototype.searchPlatos = function (campo) {
        return this.afs.collection('menu', function (ref) {
            return ref.orderBy('nombre').startAt(campo).endAt(campo + '\uf8ff');
        }).valueChanges();
    };
    //Get plato by its id
    PlatoService.prototype.getPlato = function (id) {
        return this.platoDoc = this.afs.doc("menu/" + id);
    };
    //Add new plato
    PlatoService.prototype.addPlato = function (plato) {
        this.platosCollection.add(plato);
        console.log("Plato added");
    };
    //Delete plato
    PlatoService.prototype.deletePlato = function (plato) {
        this.platoDoc = this.afs.doc("menu/" + plato.id);
        this.platoDoc.delete();
        console.log("Plato deleted");
    };
    //Update plato
    PlatoService.prototype.updatePlato = function (plato) {
        this.platoDoc = this.afs.doc("menu/" + plato.id);
        this.platoDoc.update(plato);
        console.log("Plato updated");
    };
    PlatoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], PlatoService);
    return PlatoService;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    text-align: center;\n    width:34%;\n    margin-left:33.5%;\n    margin-bottom:5%;\n    font-family:'Lucida Sans Unicode';\n    border-bottom:solid orangered 2px;\n    ;\n}\nimg{\n    border-style: solid;\n    border-width: 2px;\n    border-color: orangered;\n}\nlabel{\n    margin-left:5%;\n    font-family:'Lucida Sans Unicode';\n}\ninput{\n    border-radius: 20px;\n    width: 50%;\n    display: flex;\n    flex-direction:column;\n    border: none;\n    background: white;\n}\nform{\n    background:#f1f1f1;\n    border-radius: 10%;\n    width:40%;\n    margin-left:31%;\n    padding: 4% 4% 1% 0;\n    font-family:'Lucida Sans Unicode';\n}\nbutton{\n    text-decoration: none;\n    margin-left:30%;\n    color: rgb(0, 0, 0);\n    padding: 2% 6%;\n    background: rgb(18, 147, 233);\n    border-radius: 20px;\n    font-family:'Lucida Sans Unicode';\n    font-size: small;\n    text-align: center;\n}\nbutton:link{\n    color:black;\n}\nbutton:hover{\n    background: #0a1aff;\n}\ninput{\n    width: 100%;\n    margin-left:5%;\n    margin-bottom: 0%;\n    padding: 2%;\n    font-family:'Lucida Sans Unicode';\n    \n}\ninput:focus{\n    border: 1px solid #2f49da;\n}\np{\n    margin-left:5%;\n    margin-top:0%;\n    font-size:90%;\n    color:red;\n}"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <img class=\"rounded-circle mx-auto d-block\" width=150 src=\"../../assets/logo.jpg\">\r\n</div>\r\n<br>\r\n\r\n<h1>Nuevo Usuario</h1>\r\n<form (ngSubmit)=\"register($event,formNew)\" #formNew=\"ngForm\">\r\n  <label>Cédula de identidad</label>\r\n  <input type=\"number\" (keyup)=\"advance($event)\" [(ngModel)]=\"user.cedula\" #cedula=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Introduzca su número de cédula\" maxlength=\"20\"><br><br>\r\n  <label>Correo electrónico</label>\r\n  <input type=\"text\" (keyup)=\"advance($event)\" [(ngModel)]=\"user.email\" #email=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Introduzca su correo electrónico\"><br><br>\r\n  <div *ngIf=\"authService.error\">\r\n    <p *ngIf=\"authService.error == errMes2\">Lo ingresado no es un correo</p>\r\n    <p *ngIf=\"authService.error == errMes1\">El correo ya está en uso</p>\r\n  </div>\r\n  <label>Nombre de Usuario</label>\r\n  <input type=\"text\" (keyup)=\"advance($event)\" [(ngModel)]=\"user.displayName\" #displayName=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Introduzca su nombre de usuario\" maxlength=\"20\"><br><br>\r\n  <label>Teléfono</label>\r\n  <input type=\"number\" (keyup)=\"advance($event)\" [(ngModel)]=\"user.telefono\" #telefono=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Introduzca su número de teléfono\" maxlength=\"12\"><br><br>\r\n  <label>Dirección</label>\r\n  <input type=\"text\" (keyup)=\"advance($event)\" [(ngModel)]=\"dir\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Introduzca su dirección\" maxlength=\"30\"><br><br>\r\n  <label>Contraseña</label>\r\n  <input type=\"password\" (keyup)=\"validarPass($event)\" [(ngModel)]=\"pass\" #password=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Elija una contraseña\"  maxlength=\"20\"><br>\r\n  <p *ngIf=\"validPass && pass.length>0\">La contraseña debe ser mayor a 8 caracteres</p><br>\r\n  <label>Confirmar Contraseña</label>\r\n  <input type=\"password\" (keyup)=\"validarConfirPass($event)\" [(ngModel)]=\"passConfirm\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Confirma la contraseña\" maxlength=\"20\"><br>\r\n  <p *ngIf=\"validConfirPass && passConfirm.length>0\">Las contraseñas no coinciden</p><br>\r\n  <div *ngIf=\"authService.error\">\r\n    <p *ngIf=\"authService.error == errMes3\">{{errMes3}}</p>\r\n    <p *ngIf=\"authService.error == errMes4\">Error de conexión, inténtelo cuando su conexión sea más estable</p>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary bt\" role=\"button\">Crear cuenta</button>\r\n</form>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent(authService) {
        this.authService = authService;
        //Cliente a agregar
        this.user = {
            email: '',
            displayName: '',
            cedula: 0,
            telefono: 0,
            direccion: '',
            envios: [''],
            admin: false
        };
        this.dir = '';
        this.passConfirm = '';
        this.pass = '';
        this.validPass = false;
        this.validConfirPass = false;
        this.canAdvance = false;
        this.errMes1 = 'The email address is already in use by another account.';
        this.errMes2 = 'The email address is badly formatted.';
        this.errMes3 = 'Los campos son inválidos';
        this.errMes4 = 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.';
    }
    FormComponent.prototype.ngOnInit = function () {
        this.authService.error = '';
        this.dir = '';
        this.passConfirm = '';
    };
    FormComponent.prototype.advance = function (e) {
        if ((!this.validConfirPass) && (!this.validPass) && (this.user.displayName != '') &&
            (this.user.cedula > 0) && (this.dir != '') && (this.user.email != '') && (this.user.telefono > 0)) {
            this.canAdvance = true;
        }
        else {
            this.canAdvance = false;
        }
    };
    FormComponent.prototype.validarConfirPass = function (e) {
        if (this.pass != this.passConfirm) {
            this.validConfirPass = true;
        }
        else {
            this.validConfirPass = false;
        }
        this.advance(e);
    };
    FormComponent.prototype.validarPass = function (e) {
        if (this.pass.length < 8) {
            this.validPass = true;
        }
        else {
            this.validPass = false;
        }
        this.validarConfirPass(e);
        this.advance(e);
    };
    FormComponent.prototype.register = function (e, f) {
        if (this.canAdvance) {
            this.user.direccion = this.dir;
            this.authService.signUp(this.user.email, this.pass, this.user);
        }
        else {
            this.authService.error = this.errMes3;
        }
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
        console.log(this.authService.fauth.auth.currentUser);
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.fauth.auth.currentUser !== null) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/home/cuenta/cuenta.component.css":
/*!********************************************************!*\
  !*** ./src/app/login/home/cuenta/cuenta.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin-top:2%;\r\n    margin-left:20%;\r\n    width: 50%;\r\n}\r\nbutton{\r\n    width:30%;\r\n    margin-top:2%;\r\n    margin-bottom:2%;\r\n    margin-left:37.5%;\r\n    text-align:center;\r\n}\r\n.card-header{\r\n    display: flex;\r\n    background-color: white;\r\n    border-bottom: solid rgb(235, 64, 11);\r\n    width: 90%;\r\n    font-size: 130%;\r\n}\r\n.card-body{\r\n    display: flex;\r\n    background-color: white;\r\n    border-bottom: solid rgb(252, 138, 32);\r\n    width: 90%;\r\n    font-size: 130%;\r\n}\r\n.card-footer{\r\n    display: flex;\r\n    background-color: white;\r\n    border-bottom: solid rgb(235, 64, 11);\r\n    width: 90%;\r\n    font-size: 130%;\r\n}\r\np{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/login/home/cuenta/cuenta.component.html":
/*!*********************************************************!*\
  !*** ./src/app/login/home/cuenta/cuenta.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<div *ngIf=\"cliente\" class=\"container\">\r\n    <div class=\"card\">\r\n      <h2>{{cliente.displayName}}</h2>\r\n      <div class=\"card-header\">Número de contacto: {{cliente.telefono}}</div>\r\n      <div class=\"card-body\">Correo: {{cliente.email}}</div> \r\n      <div class=\"card-footer\">Dirección: {{cliente.direccion}}</div>\r\n      <button (click)=\"setCambiarTrue()\" class=\"btn btn-primary\">Cambiar Clave</button>\r\n      <div *ngIf=cambiandoClave>\r\n        <label>Nueva contraseña:</label><br>\r\n        <input type=\"password\" (keyup)=\"validarPass($event)\" [(ngModel)]=\"newPass\" #password=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Elija una contraseña\"  maxlength=\"20\"><br>\r\n        <p *ngIf=\"validPass && newPass.length>0\">La contraseña debe ser mayor a 8 caracteres</p><br>\r\n        <label>Confirmar Contraseña:</label><br>\r\n        <input type=\"password\" (keyup)=\"validarConfirPass($event)\" [(ngModel)]=\"passConfirm\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Confirma la contraseña\" maxlength=\"20\"><br>\r\n        <p *ngIf=\"validConfirPass && passConfirm.length>0\">Las contraseñas no coinciden</p><br>\r\n        <button (click)=\"cambiarClave()\" class=\"btn btn-primary bt\">Guardar</button>\r\n      </div>\r\n    </div>\r\n\r\n  <h2>Ordenes:</h2>\r\n  <div *ngIf=\"cliente.envios.length !== 0\">\r\n    Previas:\r\n    <div *ngFor=\"let envio of envios; index as i\">\r\n        Orden:\r\n        <div *ngFor=\"let plato of envio.platos\">\r\n          Plato:<br>\r\n          {{plato.nombre}}<br>\r\n          {{plato.precio}} Bs.<br>\r\n          <div *ngIf=\"plato.contornos\">\r\n            <div *ngFor=\"let contorno of plato.contornos\">\r\n              <div *ngIf=\"contorno.elegido\">\r\n                Contorno:\r\n                {{contorno.nombre}}<br>\r\n                {{contorno.carga}} Bs.<br>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <img class=\"rounded mx-auto d-block\" width=100 src=\"{{plato.image}}\"><br>\r\n        </div><br>\r\n        {{envio.fecha.toDate() | date}}<br>\r\n        <p>Total: {{envio.precio}} Bs.</p><br>\r\n        <div *ngIf=\"envio.confirmada\">\r\n          <a class=\"btn btn-primary\" (click)=\"reordenar(envio,i)\">Reordenar</a>\r\n        </div>\r\n        <div *ngIf=\"!envio.confirmada\">\r\n          Esperando confirmación\r\n        </div><br><br>\r\n    </div>\r\n    <div *ngIf=\"envioReordenado\">\r\n      <table class=\"table table-bordered\">\r\n          <thead>\r\n          <tr>\r\n              <th>Imágen</th>\r\n              <th>Producto</th>\r\n              <th>Precio</th>\r\n              <th>Personalizar</th>\r\n          </tr>\r\n          </thead>\r\n          <tr *ngFor=\"let plato of envioReordenado.platos; index as i\">\r\n              <td><img class=\"rounded mx-auto d-block\" width=100 src=\"{{plato.image}}\"></td>\r\n              <td>{{plato.nombre}}</td>\r\n              <td>{{plato.precio}} Bs.</td>\r\n              <td>\r\n                <div *ngIf=\"plato.personal\">\r\n                <div *ngFor=\"let contorno of plato.contornos\" >\r\n                  <a>{{contorno.nombre}} ({{contorno.carga}} Bs.)<input (click)=\"select(contorno)\" checked=\"contorno.elegido\" type=\"checkbox\"></a>\r\n                </div>\r\n                </div>\r\n                <div *ngIf=\"plato.personal == false\">\r\n                  No personalizable\r\n                </div>\r\n              </td>\r\n          </tr>\r\n      </table>\r\n      <p>Total: {{envioReordenado.precio}} Bs.</p>\r\n      <div  class=\"row\">\r\n        <div class=\"col-md-6\"><button (click)=\"eliminarReorden()\" class=\"btn btn-primary\">Eliminar</button></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<p *ngIf=\"paypalLoad\">Se está cargando el botón</p>\r\n<div id=\"paypal-button-container\"></div>"

/***/ }),

/***/ "./src/app/login/home/cuenta/cuenta.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/login/home/cuenta/cuenta.component.ts ***!
  \*******************************************************/
/*! exports provided: CuentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaComponent", function() { return CuentaComponent; });
/* harmony import */ var _core_envios_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../core/envios.service */ "./src/app/core/envios.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/clientes.service */ "./src/app/core/clientes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CuentaComponent = /** @class */ (function () {
    function CuentaComponent(auth, clientesService, enviosService) {
        var _this = this;
        this.auth = auth;
        this.clientesService = clientesService;
        this.enviosService = enviosService;
        this.passConfirm = '';
        this.newPass = '';
        this.validPass = false;
        this.validConfirPass = false;
        this.canAdvance = false;
        this.cambiandoClave = false;
        this.addScript = false;
        this.paypalLoad = true;
        this.paypalConfig = {
            env: 'sandbox',
            client: {
                sandbox: 'AZLQoirNWCHZM05je0pi0cPrKTmL9XJmfVVzpa5SducLULNI91Ii0AOxQt9BNeWWLAMblzOM-JDVwCIR',
                production: '<insert-production-client-id>'
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [{
                                amount: { total: _this.envioReordenado.precio, currency: 'USD' }
                            }]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                _this.envioReordenado.owner_ref = "clientes/" + _this.cliente.id;
                _this.envioReordenado.direccion = _this.cliente.direccion;
                _this.envioReordenado.telefono = _this.cliente.telefono;
                _this.envioReordenado.cedula = _this.cliente.cedula;
                _this.envioReordenado.fecha = new Date();
                _this.envioReordenado.confirmada = false;
                _this.envios.splice(_this.pos, 1);
                var id = _this.enviosService.addEnvio(_this.envioReordenado);
                _this.cliente.envios.push(id);
                _this.clientesService.updateCliente(_this.cliente);
                _this.envioReordenado = null;
            }
        };
    }
    CuentaComponent.prototype.ngOnInit = function () {
        this.envioReordenado = null;
        this.cliente = null;
        this.getEnvios();
    };
    CuentaComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.addScript) {
            this.addPaypalScript().then(function () {
                paypal.Button.render(_this.paypalConfig, '#paypal-button-container');
                _this.paypalLoad = false;
            });
        }
    };
    CuentaComponent.prototype.addPaypalScript = function () {
        if (!this.addScript) {
            this.addScript = true;
            return new Promise(function (resolve, reject) {
                var scripttagElement = document.createElement('script');
                scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
                scripttagElement.onload = resolve;
                document.body.appendChild(scripttagElement);
            });
        }
    };
    CuentaComponent.prototype.getEnvios = function () {
        var _this = this;
        this.envios = [];
        this.clientesService.getCliente(this.auth.uid)
            .subscribe(function (data) {
            _this.cliente = data[0];
            var i = 0;
            while (i < _this.cliente.envios.length) {
                if (_this.cliente.envios[i] != "") {
                    _this.enviosService.getEnvio(_this.cliente.envios[i])
                        .subscribe(function (data) {
                        _this.envios.push(data);
                    });
                }
                i++;
            }
        });
    };
    CuentaComponent.prototype.advance = function (e) {
        if ((!this.validConfirPass) && (!this.validPass)) {
            this.canAdvance = true;
        }
        else {
            this.canAdvance = false;
        }
    };
    CuentaComponent.prototype.validarConfirPass = function (e) {
        if (this.newPass != this.passConfirm) {
            this.validConfirPass = true;
        }
        else {
            this.validConfirPass = false;
        }
        this.validarPass(e);
        this.advance(e);
    };
    CuentaComponent.prototype.validarPass = function (e) {
        if (this.newPass.length < 8) {
            this.validPass = true;
        }
        else {
            this.validPass = false;
        }
        this.validarConfirPass(e);
        this.advance(e);
    };
    CuentaComponent.prototype.setCambiarTrue = function () {
        this.cambiandoClave = true;
    };
    CuentaComponent.prototype.cambiarClave = function () {
        if (this.advance) {
            this.auth.changePassword(this.newPass);
            if (this.auth.error == '') {
                this.cambiandoClave = false;
            }
        }
    };
    CuentaComponent.prototype.reordenar = function (envio, i) {
        this.envioReordenado = envio;
        this.pos = i;
    };
    CuentaComponent.prototype.eliminarReorden = function () {
        this.envioReordenado = null;
    };
    CuentaComponent.prototype.calcPrecio = function () {
        var i = 0;
        var j;
        this.envioReordenado.precio = 0;
        while (i < this.envioReordenado.platos.length) {
            this.envioReordenado.precio += this.envioReordenado.platos[i].precio; // Precio del plato
            j = 0;
            while (j < this.envioReordenado.platos[i].contornos.length) {
                if (this.envioReordenado.platos[i].contornos[j].elegido) {
                    this.envioReordenado.precio += this.envioReordenado.platos[i].contornos[j].carga; //Precio del añadido
                }
                j++;
            }
            i++;
        }
    };
    CuentaComponent.prototype.select = function (contorno) {
        contorno.elegido = !contorno.elegido;
        this.calcPrecio();
    };
    CuentaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-cuenta',
            template: __webpack_require__(/*! ./cuenta.component.html */ "./src/app/login/home/cuenta/cuenta.component.html"),
            styles: [__webpack_require__(/*! ./cuenta.component.css */ "./src/app/login/home/cuenta/cuenta.component.css")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            src_app_core_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ClientesService"],
            _core_envios_service__WEBPACK_IMPORTED_MODULE_0__["EnviosService"]])
    ], CuentaComponent);
    return CuentaComponent;
}());



/***/ }),

/***/ "./src/app/login/home/help/help.component.css":
/*!****************************************************!*\
  !*** ./src/app/login/home/help/help.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/home/help/help.component.html":
/*!*****************************************************!*\
  !*** ./src/app/login/home/help/help.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet> \r\n\r\n<div class=\"container\">\r\n  <h2>Preguntas Frecuentes</h2>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">¿Donde está ubicado el restaurant?: Nos puedes encontrar en... </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"card bg-primary text-white\">\r\n    <div class=\"card-body\">¿En cuanto tiempo llegará mi pedido?: Estimamos un tiempo de 30min para todas las entregas dentro del área</div>\r\n  </div>\r\n  <br>\r\n  <div class=\"card bg-success text-white\">\r\n    <div class=\"card-body\">¿Puedo editar los ingredientes de mi pedido?: Puedes hacerlo con la opción en el menú.</div>\r\n  </div>\r\n  <br>\r\n  <div class=\"card bg-info text-white\">\r\n    <div class=\"card-body\">¿Es seguro el consumo de sus productos?: Los ingredientes que usamos pasan por un riguroso control de calidad y nos preocupamos mucho de la frescura y preparación de los mismos</div>\r\n  </div>\r\n  <br>\r\n  <div class=\"card bg-warning text-white\">\r\n    <div class=\"card-body\">¿Que tipo de comida ofrecen?: Nos especializamos en servir platos a base de deliciosos y frescos pescados y mariscos</div>\r\n  </div>\r\n  <br>\r\n  <div class=\"card bg-danger text-white\">\r\n    <div class=\"card-body\">¿Alguna otra duda? Puedes comunicarte con nosotros a través de nuestras redes sociales o por el numero 0282-1234567</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/home/help/help.component.ts":
/*!***************************************************!*\
  !*** ./src/app/login/home/help/help.component.ts ***!
  \***************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/login/home/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/login/home/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/login/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/login/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel {\r\n    margin-top:2%;\r\n    margin-left:30%;\r\n    width:40%;\r\n    height:auto;\r\n}\r\n\r\nh3, p{\r\n    color:rgb(54, 54, 54);\r\n}\r\n\r\nimg{\r\n    width:100%;\r\n}"

/***/ }),

/***/ "./src/app/login/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/login/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<ngb-carousel *ngIf=\"images\" [showNavigationIndicators]=\"showNavigationIndicators\">\r\n    <div *ngFor=\"let image of images; index as i\">\r\n        <ng-template ngbSlide>\r\n            <img src=\"{{image.image}}\" alt=\"{{i}}\">\r\n        </ng-template>\r\n    </div>\r\n</ngb-carousel>"

/***/ }),

/***/ "./src/app/login/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/login/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_carousel_images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/carousel-images.service */ "./src/app/core/carousel-images.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(carouselImagesService) {
        this.carouselImagesService = carouselImagesService;
        this.showNavigationIndicators = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getImages();
    };
    HomeComponent.prototype.getImages = function () {
        var _this = this;
        this.carouselImagesService.getImages().subscribe(function (data) {
            _this.images = data;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/login/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/login/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_core_carousel_images_service__WEBPACK_IMPORTED_MODULE_1__["CarouselImagesService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/home/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/login/home/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table{\r\n    margin-top:2%;\r\n}\r\nth{\r\n    text-align: center;\r\n}\r\ntd{\r\n    text-align: center;\r\n    width:10%;\r\n}\r\nimg{\r\n    padding:0;\r\n    margin-right:0;\r\n}\r\na{\r\n    color:white;\r\n}"

/***/ }),

/***/ "./src/app/login/home/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/login/home/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n\r\n<table *ngIf=\"platos.length !== 0\" class=\"table table-bordered\">\r\n    <thead>\r\n        <tr>\r\n            <th>Imágen</th>\r\n            <th>Producto</th>\r\n            <th>Precio</th>\r\n            <th>Contornos</th>\r\n            <th>Ordenar</th>\r\n        </tr>\r\n    </thead>\r\n    <tr *ngFor=\"let plato of platos\">\r\n        <td *ngIf=\"plato.activo\"><img class=\"rounded mx-auto d-block\" width=100 src=\"{{plato.image}}\"></td>\r\n        <td *ngIf=\"plato.activo\">{{plato.nombre}}</td>\r\n        <td *ngIf=\"plato.activo\">{{plato.precio}} Bs.</td>\r\n        <td *ngIf=\"plato.activo\">\r\n            <div *ngIf=\"plato.personal\" class=\"dropdown\">\r\n                <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\r\n                Contornos</button>\r\n                <div class=\"dropdown-menu\">\r\n                    <div *ngFor=\"let contorno of plato.contornos\" >\r\n                      <a class=\"dropdown-item\">{{contorno.nombre}} ({{contorno.carga}} Bs.)</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"plato.personal == false\">\r\n                No personalizable\r\n            </div>\r\n        </td>\r\n        <td *ngIf=\"plato.activo\"><a (click)=\"agregar(plato)\"  class=\"btn btn-primary\">Ordenar</a></td>\r\n    </tr>\r\n</table>\r\n<div *ngIf=\"platos.length === 0\">\r\n    No hay platos por ese nombre!!\r\n</div><br><br>\r\n<input type=\"text\" [(ngModel)]=\"campoText\" #campo=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"search($event)\" placeholder=\"Busca un plato\">\r\n<div *ngIf=\"envio.platos.length !== 0\">\r\n    Orden:\r\n    <div>\r\n        <table *ngIf=\"platos.length !== 0\" class=\"table table-bordered\">\r\n            <thead>\r\n            <tr>\r\n                <th>Imágen</th>\r\n                <th>Producto</th>\r\n                <th>Precio</th>\r\n                <th>Personalizar</th>\r\n                <th>Eliminar</th>\r\n            </tr>\r\n            </thead>\r\n            <tr *ngFor=\"let plato of envio.platos; index as i\">\r\n                <td><img class=\"rounded mx-auto d-block\" width=100 src=\"{{plato.image}}\"></td>\r\n                <td>{{plato.nombre}}</td>\r\n                <td>{{plato.precio}} Bs.</td>\r\n                <td>\r\n                    <div *ngIf=\"plato.personal\">\r\n                    <div *ngFor=\"let contorno of plato.contornos\" >\r\n                        <a>{{contorno.nombre}} ({{contorno.carga}} Bs.)<input (click)=\"select(contorno)\" type=\"checkbox\"></a>\r\n                    </div>\r\n                    </div>\r\n                    <div *ngIf=\"plato.personal == false\">\r\n                        No personalizable\r\n                    </div>\r\n                </td>\r\n                <td><a (click)=\"eliminar(i)\" class=\"btn btn-primary\">Eliminar</a></td>\r\n            </tr>\r\n        </table>\r\n        <p>Total: {{envio.precio}} Bs.</p>\r\n        \r\n    </div>\r\n</div>\r\n<p *ngIf=\"paypalLoad\">Se está cargando el botón</p>\r\n<div id=\"paypal-button-container\"></div>\r\n"

/***/ }),

/***/ "./src/app/login/home/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/login/home/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _core_envios_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../core/envios.service */ "./src/app/core/envios.service.ts");
/* harmony import */ var _core_clientes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/clientes.service */ "./src/app/core/clientes.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_plato_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/plato.service */ "./src/app/core/plato.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuComponent = /** @class */ (function () {
    function MenuComponent(platoService, authService, clientesService, enviosService) {
        var _this = this;
        this.platoService = platoService;
        this.authService = authService;
        this.clientesService = clientesService;
        this.enviosService = enviosService;
        this.platos = [];
        this.campoText = '';
        this.envio = {
            id: '',
            owner_ref: '',
            precio: 0,
            fecha: new Date(),
            platos: [],
            direccion: '',
            confirmada: false,
            telefono: 0,
            cedula: 0
        };
        this.addScript = false;
        this.paypalLoad = true;
        this.paypalConfig = {
            env: 'sandbox',
            client: {
                sandbox: 'AZLQoirNWCHZM05je0pi0cPrKTmL9XJmfVVzpa5SducLULNI91Ii0AOxQt9BNeWWLAMblzOM-JDVwCIR',
                production: '<insert-production-client-id>'
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [{
                                amount: { total: _this.envio.precio, currency: 'USD' }
                            }]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                _this.envio.owner_ref = "clientes/" + _this.ordena.id;
                _this.envio.direccion = _this.ordena.direccion;
                _this.envio.telefono = _this.ordena.telefono;
                _this.envio.cedula = _this.ordena.cedula;
                _this.envio.fecha = new Date();
                var id = _this.enviosService.addEnvio(_this.envio);
                _this.ordena.envios.push(id);
                _this.clientesService.updateCliente(_this.ordena);
                _this.envio.platos = [];
            }
        };
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPlatos();
        this.clientesService.getCliente(this.authService.uid)
            .subscribe(function (data) {
            _this.ordena = data[0];
            console.log("Cliente fetched");
        });
    };
    MenuComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.addScript) {
            this.addPaypalScript().then(function () {
                paypal.Button.render(_this.paypalConfig, '#paypal-button-container');
                _this.paypalLoad = false;
            });
        }
    };
    MenuComponent.prototype.addPaypalScript = function () {
        if (!this.addScript) {
            this.addScript = true;
            return new Promise(function (resolve, reject) {
                var scripttagElement = document.createElement('script');
                scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
                scripttagElement.onload = resolve;
                document.body.appendChild(scripttagElement);
            });
        }
    };
    MenuComponent.prototype.getPlatos = function () {
        var _this = this;
        this.platoService.getPlatos()
            .subscribe(function (data) {
            _this.platos = data;
        });
    };
    MenuComponent.prototype.search = function (e) {
        var _this = this;
        var aux = this.campoText.toLowerCase();
        this.platoService.searchPlatos(aux)
            .subscribe(function (data) {
            _this.platos = data;
        });
    };
    //Agregar plato a la orden
    MenuComponent.prototype.agregar = function (plato) {
        this.envio.platos.push(plato);
        this.calcPrecio();
    };
    //Eliminar plato de la orden
    MenuComponent.prototype.eliminar = function (i) {
        this.envio.platos.splice(i, 1);
        this.calcPrecio();
    };
    MenuComponent.prototype.calcPrecio = function () {
        var i = 0;
        var j;
        this.envio.precio = 0;
        while (i < this.envio.platos.length) {
            this.envio.precio += this.envio.platos[i].precio; // Precio del plato
            j = 0;
            while (j < this.envio.platos[i].contornos.length) {
                if (this.envio.platos[i].contornos[j].elegido) {
                    this.envio.precio += this.envio.platos[i].contornos[j].carga; //Precio del añadido
                }
                j++;
            }
            i++;
        }
    };
    MenuComponent.prototype.select = function (contorno) {
        contorno.elegido = !contorno.elegido;
        this.calcPrecio();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/login/home/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/login/home/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_core_plato_service__WEBPACK_IMPORTED_MODULE_3__["PlatoService"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _core_clientes_service__WEBPACK_IMPORTED_MODULE_1__["ClientesService"],
            _core_envios_service__WEBPACK_IMPORTED_MODULE_0__["EnviosService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    text-align: center;\r\n    max-width: 25%;\r\n    margin-left:37%;\r\n    margin-bottom:4%;\r\n    font-size: 2rem;\r\n    font-family:'Lucida Sans Unicode';\r\n    border-bottom:solid orangered 2px;\r\n}\r\n\r\nimg{\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: orangered;\r\n}\r\n\r\nlabel{\r\n    margin-left:5%;\r\n    font-size: 1rem;\r\n    font-family:'Lucida Sans Unicode';\r\n}\r\n\r\ninput{\r\n    border-radius: 20px;\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction:column;\r\n    border: none;\r\n    background: white;\r\n}\r\n\r\nform{\r\n    background:#f1f1f1;\r\n    border-radius: 5%;\r\n    width:30%;\r\n    margin-left:35%;\r\n    padding: 4% 4% 1% 0;\r\n    font-family:'Lucida Sans Unicode';\r\n}\r\n\r\nbutton{\r\n    text-decoration: none;\r\n    color: whitesmoke;\r\n    padding: 2% 2%;\r\n    background: rgb(18, 147, 233);\r\n    border-radius: 20px;\r\n    font-family:'Lucida Sans Unicode';\r\n    font-size: 100%;\r\n}\r\n\r\n.log{\r\n    margin-left:43%;\r\n    margin-bottom: 4%;\r\n}\r\n\r\n.register{\r\n    margin-left:35%;\r\n}\r\n\r\na:link{\r\n    color:black;\r\n}\r\n\r\na:hover{\r\n    background: #0a1aff;\r\n}\r\n\r\ninput{\r\n    width: 100%;\r\n    margin-left:5%;\r\n    margin-bottom: 0%;\r\n    padding: 2%;\r\n    font-family:'Lucida Sans Unicode';    \r\n}\r\n\r\ninput:focus{\r\n    border: 1px solid #2f49da;\r\n}\r\n\r\np{\r\n    margin-left:5%;\r\n    margin-top:0%;\r\n    font-size:90%;\r\n    color:red;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <img class=\"rounded-circle mx-auto d-block\" width=150 src=\"https://firebasestorage.googleapis.com/v0/b/u-make-it.appspot.com/o/logo.jpg?alt=media&token=a18b8ebe-8fa5-4f38-abcc-690ae9ee2758\">\r\n</div>\r\n<br>\r\n<h1>Inicio de Sesión</h1>\r\n<form (submit)=\"login($event)\">\r\n  <label>Correo electrónico</label>\r\n  <input type=\"text\" placeholder=\"Nombre de Usuario\" [(ngModel)]=\"user.email\" [ngModelOptions]=\"{standalone: true}\" maxlength=\"20\"><br>\r\n  <div *ngIf=\"auth.error\">\r\n      <p *ngIf=\"auth.error == errMes2\">Lo ingresado no es un correo</p>\r\n  </div>\r\n  <label>Contraseña</label>\r\n  <input type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"pass\" [ngModelOptions]=\"{standalone: true}\" maxlength=\"20\"><br>\r\n  <div *ngIf=\"auth.error\">\r\n    <p *ngIf=\"auth.error == errMes1\">No existe un usuario registrado por ese correo</p>\r\n    <p *ngIf=\"auth.error == errMes3\">La contraseña y el usuario no coinciden</p>\r\n    <p *ngIf=\"auth.error == errMes4\">{{errMes4}}</p>\r\n    <p *ngIf=\"auth.error == errMes5\">Error de conexión, inténtelo cuando su conexión sea más estable</p>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary bt log\" role=\"button\">Entrar</button><br>\r\n  <button type=\"button\" class=\"btn btn-primary bt register\" routerLink=\"/form\" role=\"button\">Registrarse</button><br>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
        //Cliente a pasar
        this.user = {
            email: '',
            displayName: '',
            cedula: 0,
            telefono: 0,
            direccion: '',
            envios: [''],
            admin: false
        };
        this.llenar = false;
        this.errMes1 = 'There is no user record corresponding to this identifier. The user may have been deleted.';
        this.errMes2 = 'The email address is badly formatted.';
        this.errMes3 = 'The password is invalid or the user does not have a password.';
        this.errMes4 = 'Faltan campos por llenar';
        this.errMes5 = 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.auth.error = '';
    };
    LoginComponent.prototype.login = function (e) {
        if (this.user.email.length > 0 && this.pass.length > 0) {
            this.auth.login(this.user.email, this.pass);
        }
        else {
            this.auth.error = 'Faltan campos por llenar';
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/navigation/navbar-admin/navbar-admin.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/login/navigation/navbar-admin/navbar-admin.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container1{\r\n    width: 100%;\r\n    background: rgb(219, 20, 20);\r\n}\r\n\r\np{\r\n    font-size: 150%;\r\n    color: white;\r\n}\r\n\r\nnav{\r\n    padding:0;\r\n}\r\n\r\nul{\r\n    background: rgb(219, 20, 20);\r\n    color:rgb(85, 47, 47);\r\n    width: 100%;\r\n}\r\n\r\nli{\r\n    padding: 0;\r\n    background: rgb(219, 20, 20);\r\n    color:white;\r\n}\r\n\r\n.name{\r\n    padding: 0;\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n\r\nli:hover{\r\n    cursor: pointer;\r\n}\r\n\r\na:hover{\r\n    background: rgb(136, 12, 12);\r\n}\r\n\r\nimg{\r\n    width: 90%;\r\n}\r\n\r\na{\r\n    text-align: center;\r\n    font-size: 150%;\r\n    color:white;\r\n    margin: 0;\r\n}"

/***/ }),

/***/ "./src/app/login/navigation/navbar-admin/navbar-admin.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/login/navigation/navbar-admin/navbar-admin.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container1 row\">\r\n  \r\n  <nav class=\"navbar navbar-expand-sm bg-light\">\r\n    <ul class=\"navbar-nav\">\r\n      <div class=\"col-md-1\">\r\n        <li><img src=\"https://firebasestorage.googleapis.com/v0/b/u-make-it.appspot.com/o/logo.jpg?alt=media&token=a18b8ebe-8fa5-4f38-abcc-690ae9ee2758\"></li>\r\n      </div>\r\n      <div class=\"col-md-2 name\">\r\n        <li><p>Modo Admin</p></li>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <li class=\"nav-item\"><a class=\"nav-link\" (click)=\"toHome()\"><strong>Inicio</strong></a></li>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <li class=\"nav-item\"><a class=\"nav-link\" (click)=\"toMenu()\"><strong>Menú</strong></a></li>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <li class=\"nav-item\"><a class=\"nav-link\" (click)=\"toEnvios()\"><strong>Envíos pendientes</strong></a></li>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"\" (click)=\"logout()\"><strong>Salir</strong></a></li>\r\n      </div>\r\n    </ul>\r\n  </nav>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/login/navigation/navbar-admin/navbar-admin.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/login/navigation/navbar-admin/navbar-admin.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavbarAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarAdminComponent", function() { return NavbarAdminComponent; });
/* harmony import */ var _admin_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../admin/menu-admin/menu-admin.component */ "./src/app/admin/menu-admin/menu-admin.component.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarAdminComponent = /** @class */ (function () {
    function NavbarAdminComponent(auth, router, menuAdmin) {
        this.auth = auth;
        this.router = router;
        this.menuAdmin = menuAdmin;
    }
    NavbarAdminComponent.prototype.ngOnInit = function () {
    };
    NavbarAdminComponent.prototype.toHome = function () {
        this.router.navigate(['/home-admin']);
    };
    NavbarAdminComponent.prototype.toMenu = function () {
        this.router.navigate(['/menu-admin']);
    };
    NavbarAdminComponent.prototype.toEnvios = function () {
        this.router.navigate(['/envios']);
    };
    NavbarAdminComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavbarAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar-admin',
            template: __webpack_require__(/*! ./navbar-admin.component.html */ "./src/app/login/navigation/navbar-admin/navbar-admin.component.html"),
            styles: [__webpack_require__(/*! ./navbar-admin.component.css */ "./src/app/login/navigation/navbar-admin/navbar-admin.component.css")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _admin_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_0__["MenuAdminComponent"]])
    ], NavbarAdminComponent);
    return NavbarAdminComponent;
}());



/***/ }),

/***/ "./src/app/login/navigation/navbar-login/navbar-login.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/login/navigation/navbar-login/navbar-login.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/navigation/navbar-login/navbar-login.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/login/navigation/navbar-login/navbar-login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/login/navigation/navbar-login/navbar-login.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/login/navigation/navbar-login/navbar-login.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavbarLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarLoginComponent", function() { return NavbarLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarLoginComponent = /** @class */ (function () {
    function NavbarLoginComponent() {
    }
    NavbarLoginComponent.prototype.ngOnInit = function () {
    };
    NavbarLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar-login',
            template: __webpack_require__(/*! ./navbar-login.component.html */ "./src/app/login/navigation/navbar-login/navbar-login.component.html"),
            styles: [__webpack_require__(/*! ./navbar-login.component.css */ "./src/app/login/navigation/navbar-login/navbar-login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarLoginComponent);
    return NavbarLoginComponent;
}());



/***/ }),

/***/ "./src/app/login/navigation/navbar/navbar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/login/navigation/navbar/navbar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container1{\r\n    width: 100%;\r\n    background: rgb(219, 20, 20);\r\n}\r\n\r\np{\r\n    font-size: 150%;\r\n    color: white;\r\n}\r\n\r\nnav{\r\n    padding:0;\r\n}\r\n\r\nul{\r\n    background: rgb(219, 20, 20);\r\n    color:rgb(85, 47, 47);\r\n    width: 100%;\r\n}\r\n\r\nli{\r\n    padding: 0;\r\n    background: rgb(219, 20, 20);\r\n    color:white;\r\n}\r\n\r\n.name{\r\n    padding: 0;\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n\r\nli:hover{\r\n    cursor: pointer;\r\n}\r\n\r\na:hover{\r\n    background: rgb(136, 12, 12);\r\n}\r\n\r\nimg{\r\n    width: 90%;\r\n}\r\n\r\na{\r\n    text-align: center;\r\n    font-size: 150%;\r\n    color:white;\r\n    margin: 0;\r\n}"

/***/ }),

/***/ "./src/app/login/navigation/navbar/navbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/login/navigation/navbar/navbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container1 row\">\r\n\r\n  <nav class=\"navbar navbar-expand-sm bg-light\">\r\n    <ul class=\"navbar-nav\">\r\n      <div class=\"col-md-1 col-sm-3\">\r\n      <li><img src=\"https://firebasestorage.googleapis.com/v0/b/u-make-it.appspot.com/o/logo.jpg?alt=media&token=a18b8ebe-8fa5-4f38-abcc-690ae9ee2758\"></li>\r\n      </div>\r\n      <div class=\"col-md-2 col-sm-3\">\r\n      <li class=\"nav-item\"><a class=\"nav-link\" (click)=\"toHome()\"><strong>Inicio</strong></a></li>\r\n      </div>\r\n      <div class=\"col-md-2 col-sm-3\">\r\n      <li class=\"nav-item\"><a class=\"nav-link\" (click)=\"toMenu()\"><strong>Ordenar</strong></a></li>\r\n      </div>\r\n      <div class=\"col-md-2 col-sm-3\">\r\n      <li class=\"nav-item\"><a class=\"nav-link\" (click)=\"toUser()\"><strong>Usuario</strong></a></li>\r\n      </div>\r\n      <div class=\"col-md-2 col-sm-3\">\r\n      <li class=\"nav-item\"><a class=\"nav-link\" (click)=\"toHelp()\"><strong>Ayuda</strong></a></li>\r\n      </div>\r\n      <div class=\"col-md-2 col-sm-3\">\r\n      <li class=\"nav-item\"><a class=\"nav-link\" (click)=\"logout()\"><strong>Salir</strong></a></li>\r\n      </div>\r\n      <div class=\"col-md-1 col-sm-3\">\r\n      <li *ngIf=\"auth.uid\" class=\"name\">Usuario: {{auth.uid}}</li>\r\n      </div>\r\n    </ul>\r\n  </nav>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/login/navigation/navbar/navbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/login/navigation/navbar/navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toHome = function () {
        this.router.navigate(['/home']);
    };
    NavbarComponent.prototype.toMenu = function () {
        this.router.navigate(['/menu']);
    };
    NavbarComponent.prototype.toUser = function () {
        this.router.navigate(['/user']);
    };
    NavbarComponent.prototype.toHelp = function () {
        this.router.navigate(['/ayuda']);
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/login/navigation/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/login/navigation/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // Initialize Firebase
    firebaseConfig: {
        apiKey: 'AIzaSyBTf-X_9FF9j9RHj91aNvVHX7yHCCOB1Yc',
        authDomain: 'u-make-it.firebaseapp.com',
        databaseURL: 'https://u-make-it.firebaseio.com',
        projectId: 'u-make-it',
        storageBucket: 'u-make-it.appspot.com',
        messagingSenderId: '960372428269'
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\samue\Desktop\Universidad\HTML\Proyectos\uMakeItProyecto\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map