import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private  authService:  AuthService, private router: Router) { }

  ngOnInit() {}
  register(){

  }
  loginUser(){
    this.authService.login(this.email, this.password);
  }
  loginUserGoogle(){
  this.authService.loginWithGoogle();
  // this.router.navigate(["/home"]);
}
}
