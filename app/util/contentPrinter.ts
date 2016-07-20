import { Directive, Component, Injectable, DynamicComponentLoader, Injector, ViewContainerRef, ComponentRef } from "@angular/core";
import { IPage } from "../services/interfaces";
import { SubPageService } from '../services/subPage.service';

export class ContentPrinter {
	headerSelector: string = "[contents-container]";
	headerTempUrl: string = "./app/components/subLayout.component.html";
	cssUrl: string = "/wds/New-WDS/css/design.css";

	getMainPage(templateUrl: string, selector: string, directives = []) {
		@Component({ selector: selector, "templateUrl": templateUrl, "directives": directives })
        class MainContentComponent { }
        return MainContentComponent;
	}

	getSubPage(templateUrl: string, selector: string, pageData: IPage, directives = []) {
		let headerSel = this.headerSelector;
		let headerTemp = this.headerTempUrl;


		@Directive({
			selector: "[menuBtn]"
			,
			host: {
				'(click)': 'clicked($event)'
			}
		})
		class SubLayoutDirective {
			onClassName: string = "on";

			constructor(private subPageService: SubPageService) {}

			clicked(event) {
				event.preventDefault();
				console.log(event);
				this.subPageService.getContent(this.subPageService.findPageData(event.target.id));
			}
		}
		
		@Component({
			"selector": headerSel,
			"templateUrl": headerTemp,
			"directives": [SubLayoutDirective]
		})
        class SubLayoutComponent {
			page: IPage;
			parentPageData: IPage[] = [];

			constructor(private contentPrinter: ContentPrinter, private loader: DynamicComponentLoader, viewContainerRef: ViewContainerRef, private subPageService: SubPageService, private injector: Injector) {
				this.page = pageData;
				this.parentPageData.push(subPageService.findParentPageData(this.page.page_data.code));

				let subLayoutContentComponent = this.contentPrinter.getSubContent(templateUrl, selector, directives);
				
				this.loader.loadAsRoot(subLayoutContentComponent, selector, injector);
			}
        }
        return SubLayoutComponent;
    }

    getSubContent(templateUrl: string, selector: string, directives = []) {
		let cssUrl = this.cssUrl;
		@Component({
			selector: selector, "templateUrl": templateUrl, "directives": directives, "styleUrls": [cssUrl]
		})
        class SubContentComponent {}

        return SubContentComponent;
    }
}