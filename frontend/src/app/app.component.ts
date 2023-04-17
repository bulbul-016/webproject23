import {Component, OnInit} from '@angular/core';
import {CategoriesService} from './categories.service';
import {User} from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project';
  logged = false;
  user!: User;
  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }
  searchAuthor(): void{
    this.logged = false;
  }
  logOut(): void{
    this.logged = false;
    localStorage.removeItem('token');
  }
}
