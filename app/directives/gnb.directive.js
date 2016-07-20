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
var subPage_service_1 = require('../services/subPage.service');
var GnbDirective = (function () {
    function GnbDirective(el, _renderer, subPageService, dataService) {
        this._renderer = _renderer;
        this.subPageService = subPageService;
        this.dataService = dataService;
        this.pages = [];
        this.onClassName = "on";
        this.renderer = _renderer;
        this.pages = dataService.pages;
    }
    GnbDirective.prototype.clicked = function (event) {
        var _this = this;
        event.preventDefault();
        if (event.target.classList.contains("long")) {
            var isOn = (event.target.parentElement.classList.contains(this.onClassName)) ? false : true;
            if (isOn && event.target.parentElement.parentElement.querySelectorAll("li.on").length > 0) {
                var others = event.target.parentElement.parentElement.querySelectorAll("li.on");
                others.forEach(function (val, key) { return _this.renderer.setElementClass(val, _this.onClassName, false); });
            }
            this.renderer.setElementClass(event.target.parentElement, this.onClassName, isOn);
        }
        else {
            // 페이지 이동
            this.subPageService.getContent(this.subPageService.findPageData(event.target.id));
        }
    };
    GnbDirective = __decorate([
        core_1.Directive({
            selector: "[gnbBtn]",
            host: {
                '(click)': 'clicked($event)'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, subPage_service_1.SubPageService, data_service_1.DataService])
    ], GnbDirective);
    return GnbDirective;
}());
exports.GnbDirective = GnbDirective;
//# sourceMappingURL=gnb.directive.js.map