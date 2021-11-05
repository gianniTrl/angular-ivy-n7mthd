import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-template-register',
  templateUrl: './template-register.component.html',
  styleUrls: ['./template-register.component.css'],
})
export class TemplateRegisterComponent implements OnInit {
  user: User;

  constructor() {}

  ngOnInit() {
    this.user = {
      name: '',
      email: '',
      password: '',
    };
  }

  onFormSubmit(): void {
    const formattedName =
      'Hi ' +
      this.user.name +
      '. You mail ' +
      this.user.email +
      ' has been registered with your password ' +
      this.user.password;
    console.log(formattedName);
  }
}
