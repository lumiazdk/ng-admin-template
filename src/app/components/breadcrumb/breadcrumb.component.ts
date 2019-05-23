import { Component } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: []
})
export class BreadcrumbComponent {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(public BreadcrumbService: BreadcrumbService) { }
}
