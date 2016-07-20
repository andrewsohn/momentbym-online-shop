import { bind, ViewContainerRef } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router';

// import { Sorter } from './shared/utils/sorter';
import { DataService } from './services/data.service';
import { SubPageService } from './services/subPage.service';

import { ContentPrinter } from "./util/contentPrinter";
import { AppProperty } from "./app.properties";

export const APP_PROVIDERS = [
//	Config Properties
	AppProperty,
	ContentPrinter,
	ViewContainerRef,
//    Sorter,
    DataService,
    SubPageService,
//    TrackByService,
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    //bind(LocationStrategy).toClass(HashLocationStrategy)
];