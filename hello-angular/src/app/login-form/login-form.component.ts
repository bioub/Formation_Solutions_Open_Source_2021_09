import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  credentials = {
    username: 'romain',
    password: '123456',
    rememberMe: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

  verifyCredentials(event: Event) {
    event.preventDefault();
    console.log(this.credentials);
  }
}
