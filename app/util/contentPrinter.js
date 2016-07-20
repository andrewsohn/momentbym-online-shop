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
var core_1 = require("@angular/core");
var subPage_service_1 = require('../services/subPage.service');
var ContentPrinter = (function () {
    function ContentPrinter() {
        this.headerSelector = "[contents-container]";
        this.headerTempUrl = "./app/components/subLayout.component.html";
        this.cssUrl = "/wds/New-WDS/css/design.css";
    }
    ContentPrinter.prototype.getMainPage = function (templateUrl, selector, directives) {
        if (directives === void 0) { directives = []; }
        var MainContentComponent = (function () {
            function MainContentComponent() {
            }
            MainContentComponent = __decorate([
                core_1.Component({ selector: selector, "templateUrl": templateUrl, "directives": directives }), 
                __metadata('design:paramtypes', [])
            ], MainContentComponent);
            return MainContentComponent;
        }());
        return MainContentComponent;
    };
    ContentPrinter.prototype.getSubPage = function (templateUrl, selector, pageData, directives) {
        if (directives === void 0) { directives = []; }
        var headerSel = this.headerSelector;
        var headerTemp = this.headerTempUrl;
        var SubLayoutDirective = (function () {
            function SubLayoutDirective(subPageService) {
                this.subPageService = subPageService;
                this.onClassName = "on";
            }
            SubLayoutDirective.prototype.clicked = function (event) {
                event.preventDefault();
                console.log(event);
                this.subPageService.getContent(this.subPageService.findPageData(event.target.id));
            };
            SubLayoutDirective = __decorate([
                core_1.Directive({
                    selector: "[menuBtn]",
                    host: {
                        '(click)': 'clicked($event)'
                    }
                }), 
                __metadata('design:paramtypes', [subPage_service_1.SubPageService])
            ], SubLayoutDirective);
            return SubLayoutDirective;
        }());
        var SubLayoutComponent = (function () {
            function SubLayoutComponent(contentPrinter, loader, viewContainerRef, subPageService, injector) {
                this.contentPrinter = contentPrinter;
                this.loader = loader;
                this.subPageService = subPageService;
                this.injector = injector;
                this.parentPageData = [];
                this.page = pageData;
                this.parentPageData.push(subPageService.findParentPageData(this.page.page_data.code));
                var subLayoutContentComponent = this.contentPrinter.getSubContent(templateUrl, selector, directives);
                this.loader.loadAsRoot(subLayoutContentComponent, selector, injector);
            }
            SubLayoutComponent = __decorate([
                core_1.Component({
                    "selector": headerSel,
                    "templateUrl": headerTemp,
                    "directives": [SubLayoutDirective]
                }), 
                __metadata('design:paramtypes', [ContentPrinter, core_1.DynamicComponentLoader, core_1.ViewContainerRef, subPage_service_1.SubPageService, core_1.Injector])
            ], SubLayoutComponent);
            return SubLayoutComponent;
        }());
        return SubLayoutComponent;
    };
    ContentPrinter.prototype.getSubContent = function (templateUrl, selector, directives) {
        if (directives === void 0) { directives = []; }
        var cssUrl = this.cssUrl;
        var SubContentComponent = (function () {
            function SubContentComponent() {
            }
            SubContentComponent = __decorate([
                core_1.Component({
                    selector: selector, "templateUrl": templateUrl, "directives": directives, "styleUrls": [cssUrl]
                }), 
                __metadata('design:paramtypes', [])
            ], SubContentComponent);
            return SubContentComponent;
        }());
        return SubContentComponent;
    };
    return ContentPrinter;
}());
exports.ContentPrinter = ContentPrinter;
//# sourceMappingURL=contentPrinter.js.map