import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface userResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  fetchUser() {
    return this.http.get<userResponse[]>('https://jsonplaceholder.typicode.com/users');
  }
}
