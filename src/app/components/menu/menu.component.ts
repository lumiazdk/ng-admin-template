import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(public route: ActivatedRoute, public router: Router, public BreadcrumbService: BreadcrumbService) { }
  mode = false;
  dark = false;
  menus = [
    {
      level: 1,
      title: '首页',
      icon: 'home',
      open: true,
      selected: false,
      disabled: false,
      url: '/',
      bread: ['首页']
    },
    {
      level: 1,
      title: 'rx',
      icon: 'home',
      open: true,
      selected: false,
      disabled: false,
      url: 'page/rx',
      bread: ['rx']

    },
  ];
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.BreadcrumbService.init();
  }
  nzClick(item) {
    if (item.url) {
      console.log(item);
      this.router.navigate([item.url]);
      this.BreadcrumbService.setbreadcrumb(item.bread);
      localStorage.bread = JSON.stringify(item.bread);
    }

  }
}
