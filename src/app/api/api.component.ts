import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIService, userResponse } from '../services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class APIComponent implements OnInit {
  users: userResponse[] = [];

  constructor(private apiService: APIService) {
    this.apiService.fetchUser().subscribe((data) => {
      this.users = data
    });
  }

  ngOnInit(): void {}

  fetchData() {
    console.log('object');
  }
}
