import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email:string;
  password:string;
  constructor(private  authService:  AuthService) { }

  ngOnInit() {}
  createrUser(){
    this.authService.register(this.email, this.password);
  }
}
