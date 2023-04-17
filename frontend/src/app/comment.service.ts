import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Comment} from './comment';
import {Observable} from 'rxjs';
import {Category} from './сategory';
import {Books} from './books';
import {AuthToken} from './authtoken';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

BASE_URL = 'http://127.0.0.1:8000';

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

constructor(private http: HttpClient) { }
  /*getComments(): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.BASE_URL}/api/comments/`);
  }*/

  getCommentsByBook(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.BASE_URL}/api/authors/${id}/books`);
  }

  // addComment(category: Category): Observable<Category> {
  //   return this.http.<Category>(`${this.BASE_URL}/api/genres/`, category, this.httpOptions);
  // }
}
