import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-userinfomation',
  templateUrl: './userinfomation.component.html',
  styleUrls: ['./userinfomation.component.css'],
})
export class UserinfomationComponent implements OnInit {
  userData: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    let id = route.snapshot.params['id'];
    http
      .get('https://jsonplaceholder.typicode.com/users/' + id)
      .subscribe((data) => {
        this.userData = data;
      });
  }

  ngOnInit(): void {}

  onBack(){
    this.router.navigateByUrl('/api')
  }
}
