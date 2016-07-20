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
var data_service_1 = require('../services/data.service');
var gnb_directive_1 = require('../directives/gnb.directive');
var app_providers_1 = require('../app.providers');
var GnbComponent = (function () {
    function GnbComponent(dataService) {
        this.dataService = dataService;
        this.pages = [];
        console.log('main');
    }
    GnbComponent.prototype.ngOnInit = function () {
        // this.title = 'Customers';
        // this.filterText = 'Filter Customers:';
        // this.displayMode = DisplayModeEnum.Card;
        var _this = this;
        this.dataService.getPages()
            .subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    GnbComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "[gnb-container]",
            templateUrl: "./gnb.component.html",
            directives: [gnb_directive_1.GnbDirective],
            providers: [app_providers_1.APP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], GnbComponent);
    return GnbComponent;
}());
exports.GnbComponent = GnbComponent;
//# sourceMappingURL=gnb.component.js.map