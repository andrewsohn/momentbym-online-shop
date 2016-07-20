import { Component, Injectable, DynamicComponentLoader, Injector, ViewContainerRef, ComponentRef } from '@angular/core';
import { Http, Response } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ContentPrinter } from "../util/contentPrinter";
import { IAppData, IPage, IPageData, IGuide } from './interfaces';



@Injectable()
export class SubPageService {
    prefix: string = "./app/pages/";
    suffix: string = ".pages.html";
    selector: string = "[contents-container]";
    subSelector: string = "[wds-body]";
    page: IPage;
    pages: IPage[] = [];

    constructor(private contentPrinter: ContentPrinter, private loader: DynamicComponentLoader, private injector: Injector, private viewContainerRef: ViewContainerRef) {}

    setPages(pages: IPage[]) {
        this.pages = pages;
    }

    getContent(page: IPage): Observable<IPage> {
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
    }

    getMain(): Observable<IPage> {
        return this.createObservable(this.toComponent("main"));
    }
    // private findCustomerObservable(code: string): Observable<IPage> {
        
    // }

    private createObservable(data: any): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }

    private toComponent(code: string) {
        let path = this.prefix + code + this.suffix;
        let fakeHeadComponent;

        if (code === 'main'){
            fakeHeadComponent = this.contentPrinter.getMainPage(path, this.selector);
        }else{
            fakeHeadComponent = this.contentPrinter.getSubPage(path, this.subSelector, this.page);
        }

        this.loader.loadAsRoot(fakeHeadComponent, this.selector, this.injector)
            .then((compRef: ComponentRef<IPage>) => {
                compRef.changeDetectorRef.detectChanges();
                return compRef;
            });
        
    }

    findPageData(code: string) {
        console.log(code)
        let firstDepthCode = (code.length > 5) ? code.substr(0, 5) : code;
        let firstDepth = this.pages.find(x => x.page_data.code === firstDepthCode);

        //deeper than 1 depth GNB
        return (code.length > 5) ? firstDepth.children.find(x => x.page_data.code === code) : firstDepth;
    }

    findParentPageData(code: string) {
        let firstDepthCode = (code.length > 5) ? code.substr(0, 5) : code;
        
        return this.pages.find(x => x.page_data.code === firstDepthCode);
    }
    // private handleError(error: any) {
    //     console.error(error);
    //     return Observable.throw(error.json().error || 'Server error');
    // }

}
