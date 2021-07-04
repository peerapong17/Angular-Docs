import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  name: string = '';
  email: string = '';
  status: string = '';
  skills: string = '';
  constructor() {}

  ngOnInit(): void {}

  onSubmit(){
    console.log(this.name)
    console.log(this.email)
    console.log(this.status)
    console.log(this.skills)
  }
}

