import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {
  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  isUsernameEmpty: boolean = false;
  isPasswordEmpty: boolean = false;
  constructor() {
  }

  ngOnInit(): void {}

  onSubmit(){
    if(this.username.valid && this.password.valid){
      console.log(typeof this.username.value)
    }
    if(this.username.value === ''){
      this.isUsernameEmpty = true
    }
    if(this.password.value === ''){
      this.isPasswordEmpty = true
    }
  }

  get username(){
    return this.profileForm.controls.username
  }

  get password(){
    return this.profileForm.controls.password
  }
}
