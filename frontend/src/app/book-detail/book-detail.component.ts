import { Component, OnInit } from '@angular/core';
import {Authors} from '../authors';
import {Books} from '../books';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../books.service';
import {Category} from '../сategory';
import {CategoriesService} from '../categories.service';
import {Comment} from '../comment';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book!: Books;
  comments!: Comment[];


  constructor(private route: ActivatedRoute, private bookService: BooksService, private commentService: CommentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      //@ts-ignore
      const id = +params.get('id');
      this.getBook(id);
      this.getComments(id);
    });
  }

  getBook(id: number): void {
    this.bookService.getBook(id).subscribe((book) => {
      this.book = book;
    });
  }

  getComments(id: number): void {
    this.commentService.getCommentsByBook(id).subscribe((comments) =>{
      this.comments = comments;
    });
  }

}
