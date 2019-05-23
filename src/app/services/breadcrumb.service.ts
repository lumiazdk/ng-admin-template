import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  breadcrumb = ['首页'];

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.

  }
  constructor() { }
  setbreadcrumb(breadcrumb) {
    this.breadcrumb = breadcrumb;
  }
  init() {
    if (localStorage.bread) {
      this.breadcrumb = JSON.parse(localStorage.bread);
    } else {
      localStorage.bread = JSON.stringify(this.breadcrumb);
    }
  }
}
