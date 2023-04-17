import { Component, OnInit } from '@angular/core';
import { CategoriesService} from '../categories.service';
import {AppComponent} from '../app.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logged = false;
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
      this.app.logged = true;
    }
    if (!this.app.logged) {
      this.logged = false;
      localStorage.removeItem('token');
    }
  }

  constructor(private categoryService: CategoriesService, private location: Location, public app: AppComponent) {
  }

  login(username: string, password: string): void {
      this.categoryService.login(username, password).subscribe((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', username);
          this.app.logged = true;
          this.logged = true;
          this.categoryService.getUser(username)
            .subscribe(user => this.app.user = user);
          this.location.back();
        }
      });
  }
}
