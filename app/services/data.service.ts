import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { IAppData, IPage, IPageData, IGuide } from './interfaces';
import { SubPageService } from './subPage.service';

@Injectable()
export class DataService {
    _baseUrl: string = "../data/";
    pageData: IAppData;
    lastFileUpdate: string = "";
    pages: IPage[];

    constructor(private http: Http, private subPageService: SubPageService) { }

    getPages(): Observable<IPage[]> {
        if (!this.pages) {
            return this.http.get(this._baseUrl + 'lnbData.json')
                        .map((res: Response) => {
                            // this.lnbs = res.json();
                            this.pageData = res.json();
                            this.lastFileUpdate = this.pageData.lastFileUpdate;
                            this.pages = this.pageData.pageList;
                            this.subPageService.setPages(this.pages);
                            return this.pages;
                        })
                        .catch(this.handleError);
        }
        else {
            // return cached data
            return this.createObservable(this.pages);
        }
    }

    private createObservable(data: any): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
