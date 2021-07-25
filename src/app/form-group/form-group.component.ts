import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^[a-zA-Z0-9äöüÄÖÜ]*$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  isEmailEmpty: boolean = false;
  isPasswordEmpty: boolean = false;
  isUsernameEmpty: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.email.valid && this.password.valid && this.username.valid) {
      console.log("data was sent");
    }
    if (this.email.value === '') {
      this.isEmailEmpty = true;
    }
    if (this.password.value === '') {
      this.isPasswordEmpty = true;
    }
    if (this.password.value === '') {
      this.isUsernameEmpty = true;
    }
  }

  get email() {
    return this.profileForm.controls.email;
  }
  get username() {
    return this.profileForm.controls.username;
  }

  get password() {
    return this.profileForm.controls.password;
  }

  showError(){
    const {dirty, touched, errors} = this.username
    return dirty && touched && errors
  }
}
