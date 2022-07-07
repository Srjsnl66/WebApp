import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential = {
    username : '',
    password : ''
  }

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.doLogin(this.credential).subscribe(
      response => {
        let res = JSON.parse(JSON.stringify(response))
        console.log(res);
        if(res['role'] == 'admin') {
          this.loginService.loggedIn(res['id'], res['role']);
          this.router.navigate(['/admin']);
        } else if (res['role'] == 'user') {
          this.loginService.loggedIn(res['id'], res['role']);
          this.router.navigate(['/user']);
        }
      }, error => {
        console.log(error);
      }
    );
  }
}
