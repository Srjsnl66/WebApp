import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public loginService: LoginService) { 
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onLogout() {
    localStorage.setItem("userid", "");
    localStorage.setItem("userRole", "");
    this.router.navigate(['/login']);
  }

  goHome() {
    console.log(this.loginService.loggedInRole());
    if(this.loginService.loggedInRole() == 'user'){
      this.router.navigate(['/user']);
    } else if (this.loginService.loggedInRole() == 'admin') {
      this.router.navigate(['/admin']);
    }
  }

  goPost() {
    this.router.navigate(['/user/posts']);
  }
}
