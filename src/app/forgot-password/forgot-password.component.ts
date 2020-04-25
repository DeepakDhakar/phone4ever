import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  email: string;
  constructor(private  authService:  AuthService) { }

  ngOnInit() {}

  forgotPassword(){
    this.authService.sendPasswordResetEmail(this.email);
  }

}
