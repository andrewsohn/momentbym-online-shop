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
//Grab everything with import 'rxjs/Rx';
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var contentPrinter_1 = require("../util/contentPrinter");
var SubPageService = (function () {
    function SubPageService(contentPrinter, loader, injector, viewContainerRef) {
        this.contentPrinter = contentPrinter;
        this.loader = loader;
        this.injector = injector;
        this.viewContainerRef = viewContainerRef;
        this.prefix = "./app/pages/";
        this.suffix = ".pages.html";
        this.selector = "[contents-container]";
        this.subSelector = "[wds-body]";
        this.pages = [];
    }
    SubPageService.prototype.setPages = function (pages) {
        this.pages = pages;
    };
    SubPageService.prototype.getContent = function (page) {
        this.page = page;
        return this.createObservable(this.toComponent(page.page_data.code));
        //     // } else {
        //     //     //Query the existing customers to find the target customer
        //     //     return Observable.create((observer: Observer<ICustomer>) => {
        //     //         this.getCustomers().subscribe((customers: ICustomer[]) => {
        //     //             this.customers = customers;
        //     //             const cust = this.filterCustomers(id);
        //     //             observer.next(cust);
        //     //             observer.complete();
        //     //         })
        //     //     })
        //     //         .catch(this.handleError);
        //     // }
    };
    SubPageService.prototype.getMain = function () {
        return this.createObservable(this.toComponent("main"));
    };
    // private findCustomerObservable(code: string): Observable<IPage> {
    // }
    SubPageService.prototype.createObservable = function (data) {
        return Observable_1.Observable.create(function (observer) {
            observer.next(data);
            observer.complete();
        });
    };
    SubPageService.prototype.toComponent = function (code) {
        var path = this.prefix + code + this.suffix;
        var fakeHeadComponent;
        if (code === 'main') {
            fakeHeadComponent = this.contentPrinter.getMainPage(path, this.selector);
        }
        else {
            fakeHeadComponent = this.contentPrinter.getSubPage(path, this.subSelector, this.page);
        }
        this.loader.loadAsRoot(fakeHeadComponent, this.selector, this.injector)
            .then(function (compRef) {
            compRef.changeDetectorRef.detectChanges();
            return compRef;
        });
    };
    SubPageService.prototype.findPageData = function (code) {
        console.log(code);
        var firstDepthCode = (code.length > 5) ? code.substr(0, 5) : code;
        var firstDepth = this.pages.find(function (x) { return x.page_data.code === firstDepthCode; });
        //deeper than 1 depth GNB
        return (code.length > 5) ? firstDepth.children.find(function (x) { return x.page_data.code === code; }) : firstDepth;
    };
    SubPageService.prototype.findParentPageData = function (code) {
        var firstDepthCode = (code.length > 5) ? code.substr(0, 5) : code;
        return this.pages.find(function (x) { return x.page_data.code === firstDepthCode; });
    };
    SubPageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [contentPrinter_1.ContentPrinter, core_1.DynamicComponentLoader, core_1.Injector, core_1.ViewContainerRef])
    ], SubPageService);
    return SubPageService;
}());
exports.SubPageService = SubPageService;
//# sourceMappingURL=subPage.service.js.map