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
var subPage_service_1 = require('../services/subPage.service');
var SubHeadDirective = (function () {
    function SubHeadDirective(el, _renderer, subPageService) {
        this._renderer = _renderer;
        this.subPageService = subPageService;
        this.onClassName = "on";
        this.renderer = _renderer;
    }
    SubHeadDirective.prototype.clicked = function (event) {
        console.log(event);
        // if (event.target.classList.contains("long")) { // 하위 뎁스 가지고 있음
        //   let isOn: boolean = (event.target.parentElement.classList.contains(this.onClassName)) ? false : true;
        //   if (isOn && event.target.parentElement.parentElement.querySelectorAll("li.on").length > 0) {
        //     let others: any[] = event.target.parentElement.parentElement.querySelectorAll("li.on");
        //     others.forEach((val, key) => this.renderer.setElementClass(val, this.onClassName, false) );
        //   }
        //   this.renderer.setElementClass(event.target.parentElement, this.onClassName, isOn);
        // } else {
        //   // 페이지 이동
        //   console.log(event.target.id);
        //   // this.subPageService.getContent(event.target.id)
        //   // .subscribe((page: IPage) => console.log('ok2'));
        // }
    };
    SubHeadDirective = __decorate([
        core_1.Directive({
            selector: "a",
            host: {
                '(click)': 'clicked($event)'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, subPage_service_1.SubPageService])
    ], SubHeadDirective);
    return SubHeadDirective;
}());
exports.SubHeadDirective = SubHeadDirective;
//# sourceMappingURL=subHead.directive.js.map