import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/IBook';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  readonly IP = "localhost"
  readonly PORT = "8081"

  readonly ENDPOINT_GET_BOOK_LIST = "/book/getList"
  readonly ENDPOINT_ADD_BOOK_LIST = "/book/createBook"
  readonly ENDPOINT_DELETE_BOOK_LIST = "/book/deleteBook"
  readonly ENDPOINT_UPDATE_BOOK_LIST = "/book/updateBook"
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };


  constructor(private http: HttpClient) { }

  getBookAuthor() {
    return this.http.get<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_GET_BOOK_LIST}`, this.httpOptions)
  }

  addBook(book: any) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_ADD_BOOK_LIST}`,book, this.httpOptions)
  }

  updateBook(id: number) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_UPDATE_BOOK_LIST}`, this.httpOptions)
  }

  deleteBook(id: number) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_DELETE_BOOK_LIST}`, this.httpOptions)
  }
}
