import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Data} from '../Data'

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class APIComponent implements OnInit {

  users:any

  constructor(public data: DataService, private http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (data) => {
        this.users = data
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}

  fetchData() {
    console.log('object');
  }
}
