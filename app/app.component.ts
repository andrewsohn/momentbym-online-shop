import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service';
import { SubPageService } from './services/subPage.service';
import { IAppData, IPage, IPageData, IGuide } from './services/interfaces';

import { GnbDirective } from './directives/gnb.directive';
import { SubPageDirective } from './directives/subPage.directive';

import { APP_PROVIDERS } from './app.providers';
import { AppProperty } from "./app.properties";

@Component({
  moduleId: module.id,
  selector: AppProperty.GNB_SEL,
  templateUrl: "components/gnb.component.html",
  directives: [GnbDirective],
  providers: [APP_PROVIDERS]
})
export class AppComponent implements OnInit {
  pages: IPage[] = [];
  leftGnb: IPage[] = [];
  rightGnb: IPage[] = [];
  constructor(private dataService: DataService, private subPageService: SubPageService) {
  }
  ngOnInit() {
    console.log(AppProperty);
    // this.title = 'Customers';
    // this.filterText = 'Filter Customers:';
    // this.displayMode = DisplayModeEnum.Card;

    this.dataService.getPages()
      .subscribe((pages: IPage[]) => {
        this.pages = pages;
        this.leftGnb = pages.slice(0, 3);
        console.log(this.leftGnb);
        this.rightGnb = pages.slice(3, pages.length);
      });
    this.subPageService.getMain()
    .subscribe();
  }
}

//Dynamic loading (old router but coming to new router)
// { 
//   path: '/customers/:id/...', 
//   name: 'Customer',  
//   loader: () => window['System'].import('app/+customer')
//                 .then((module: any) => module.CustomerComponent) 
// }
