import { Component, OnInit } from '@angular/core';
import {Books} from '../books';
import {BooksService} from '../books.service';
import {Category} from '../сategory';
import {CategoriesService} from '../categories.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  books: Books[] = [];
  category!: Category[];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.booksService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

}
