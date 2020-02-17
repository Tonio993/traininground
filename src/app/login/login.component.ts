import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { NavbarService } from '../core/navbar/navbar.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private navbar: NavbarService) {}

  ngOnInit() { }

  onLogin(user: string, password: string) {
    this.auth.emailSignIn(user, password).then(user => {
      if (user) {
        this.router.navigate(['/']);
      }
    });
  }

  onSignup(user: string, password: string) {
    this.auth.emailSignUp(user, password);
  }

  onLogout() {
    this.auth.emailSignOut();
  }

}