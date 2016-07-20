"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
// import { Sorter } from './shared/utils/sorter';
var data_service_1 = require('./services/data.service');
var subPage_service_1 = require('./services/subPage.service');
var contentPrinter_1 = require("./util/contentPrinter");
var app_properties_1 = require("./app.properties");
exports.APP_PROVIDERS = [
    //	Config Properties
    app_properties_1.AppProperty,
    contentPrinter_1.ContentPrinter,
    core_1.ViewContainerRef,
    //    Sorter,
    data_service_1.DataService,
    subPage_service_1.SubPageService,
    //    TrackByService,
    common_1.FORM_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
];
//# sourceMappingURL=app.providers.js.map