import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControlOptions } from '@angular/forms';

@Component({
  selector: 'app-input-form-group',
  templateUrl: './input-form-group.component.html',
  styleUrls: ['./input-form-group.component.css'],
})
export class InputFormGroupComponent implements OnInit {
  @Input() control:FormControl = new FormControl('');
  @Input() label: string = ''
  @Input() isEmpty: boolean = false
  constructor() {
    console.log(this.control)
  }

  ngOnInit(): void {}

  showError(){
    const {dirty, touched, errors} = this.control
    return dirty && touched && errors
  }

  get errors(){
    return this.control.errors
  }
}
