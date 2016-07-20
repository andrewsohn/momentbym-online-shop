import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { IAppData, IPage, IPageData, IGuide } from '../services/interfaces';

import { GnbDirective } from '../directives/gnb.directive';
import { APP_PROVIDERS } from '../app.providers';

@Component({
	moduleId: module.id,
	selector: "[gnb-container]",
	templateUrl: "./gnb.component.html",
	directives: [GnbDirective],
	providers: [APP_PROVIDERS]
})
export class GnbComponent implements OnInit {

	pages: IPage[] = [];

	constructor(private dataService: DataService) { console.log('main'); }

	ngOnInit() {
		// this.title = 'Customers';
		// this.filterText = 'Filter Customers:';
		// this.displayMode = DisplayModeEnum.Card;

		this.dataService.getPages()
			.subscribe((pages: IPage[]) => {
				this.pages = pages;
			});

	}

}