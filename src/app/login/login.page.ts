import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  submitted: boolean;
  email: string;
  password: string;
  loginError: boolean;
  errorMessage: string;

  constructor(private router: Router, public sessionService: SessionService, private userService: UserService) {
    this.submitted = false;
  }

  ngOnInit() {
  }


  clear() {
    this.email = "";
    this.password = "";
  }

  userLogin(userLoginForm: NgForm) {
    this.submitted = true;

    if (userLoginForm.valid) {
      this.sessionService.setEmail(this.email);
      this.sessionService.setPassword(this.password);

      this.userService.userLogin(this.email, this.password).subscribe(
        response => {
          let user: User = response;

          if (user != null) {
            this.sessionService.setIsLogin(true);
            this.sessionService.setCurrentUser(user);
            this.loginError = false;
          }
          else {
            this.loginError = true;
          }
        },
        error => {
          this.loginError = true;
          this.errorMessage = error
        }
      );
    }
    else {
    }
  }



  userLogout(): void {
    this.sessionService.setIsLogin(false);
    this.sessionService.setCurrentUser(null);
  }



  back() {
    this.router.navigate(["/index"]);
  }

}
