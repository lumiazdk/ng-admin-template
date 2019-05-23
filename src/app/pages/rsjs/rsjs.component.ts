import { Component, OnInit } from '@angular/core';
import { range, Observable, fromEvent } from 'rxjs';
import { map, filter, throttleTime, scan, merge } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-rsjs',
  templateUrl: './rsjs.component.html',
  styleUrls: ['./rsjs.component.scss']
})
export class RsjsComponent implements OnInit {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ConfigService: ApiService, public UserService: UserService) { }
  condition = false;
  ngOnInit() {

  }
  register() {
    this.condition = !this.condition;
    this.UserService.setUserInfo('zhuzhu');
    this.ConfigService.register().subscribe(res => {
      console.log(res);
    });
  }
}
