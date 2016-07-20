import { Directive, ElementRef, Renderer } from '@angular/core';

import { SubPageService } from '../services/subPage.service';
import { IAppData, IPage, IPageData, IGuide } from '../services/interfaces';

@Directive({
  selector: "[contents-container]"
  // ,
  // host: {
  //   '(click)': 'clicked($event)'
  // }
})
export class SubPageDirective {
  renderer: Renderer;
  onClassName: string = "on";

  constructor(el: ElementRef, private _renderer: Renderer, private subPageService: SubPageService) {
    this.renderer = _renderer;
  }

  clicked(event) {
    if (event.target.classList.contains("long")) { // 하위 뎁스 가지고 있음
      let isOn: boolean = (event.target.parentElement.classList.contains(this.onClassName)) ? false : true;
      
      if (isOn && event.target.parentElement.parentElement.querySelectorAll("li.on").length > 0) {
        let others: any[] = event.target.parentElement.parentElement.querySelectorAll("li.on");
        others.forEach((val, key) => this.renderer.setElementClass(val, this.onClassName, false) );
      }

      this.renderer.setElementClass(event.target.parentElement, this.onClassName, isOn);

    } else {
      // 페이지 이동
      console.log(event.target.id);
      // this.subPageService.getContent(event.target.id)
      // .subscribe((page: IPage) => console.log('ok2'));
      
    }
  }
}