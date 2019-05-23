import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userInfo = {
    name: 'zhudk'
  };
  constructor() { }
  getUserInfo() {
    console.log(this.userInfo);
  }
  setUserInfo(name) {
    this.userInfo.name = name;
  }
}
