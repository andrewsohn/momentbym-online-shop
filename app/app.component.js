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
var data_service_1 = require('./services/data.service');
var subPage_service_1 = require('./services/subPage.service');
var gnb_directive_1 = require('./directives/gnb.directive');
var app_providers_1 = require('./app.providers');
var app_properties_1 = require("./app.properties");
var AppComponent = (function () {
    function AppComponent(dataService, subPageService) {
        this.dataService = dataService;
        this.subPageService = subPageService;
        this.pages = [];
        this.leftGnb = [];
        this.rightGnb = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(app_properties_1.AppProperty);
        // this.title = 'Customers';
        // this.filterText = 'Filter Customers:';
        // this.displayMode = DisplayModeEnum.Card;
        this.dataService.getPages()
            .subscribe(function (pages) {
            _this.pages = pages;
            _this.leftGnb = pages.slice(0, 3);
            console.log(_this.leftGnb);
            _this.rightGnb = pages.slice(3, pages.length);
        });
        this.subPageService.getMain()
            .subscribe();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: app_properties_1.AppProperty.GNB_SEL,
            templateUrl: "components/gnb.component.html",
            directives: [gnb_directive_1.GnbDirective],
            providers: [app_providers_1.APP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, subPage_service_1.SubPageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//Dynamic loading (old router but coming to new router)
// { 
//   path: '/customers/:id/...', 
//   name: 'Customer',  
//   loader: () => window['System'].import('app/+customer')
//                 .then((module: any) => module.CustomerComponent) 
// }
//# sourceMappingURL=app.component.js.map