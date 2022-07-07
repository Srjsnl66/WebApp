import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private webService: WebService) { }

  isLoggedIn() {
    let y = localStorage.getItem("userid");
    if ( y == null || y == "") return false;
    return true;
  }

  loggedInRole() {
    return localStorage.getItem("userRole")
  }

  doLogin(credential: any) {
    return this.webService.post('/api/user', credential);
  }

  loggedIn(userid: string, role: string) {
    localStorage.setItem("userid", userid);
    localStorage.setItem("userRole", role);
  }
}
