import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css'],
})
export class ReactiveRegisterComponent implements OnInit {
  userForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      terms: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  get name(): string {
    return this.userForm.value.name;
  }

  get email(): string {
    return this.userForm.value.email;
  }

  get password(): string {
    return this.userForm.value.password;
  }

  onFormSubmit(): void {
    const formattedForm: string = `Hi ${this.name}, your mail ${this.email} has been register with your psw ${this.password}`;
    console.log(formattedForm);
  }
}
