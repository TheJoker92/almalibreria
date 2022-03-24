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
  readonly ENDPOINT_DELETE_BOOK = "/book/deleteBook"
  readonly ENDPOINT_UPDATE_BOOK = "/book/updateBook"

  readonly ENDPOINT_GET_LOAN_LIST = "/loan/getList"
  readonly ENDPOINT_ADD_LOAN = "/loan/createLoan"
  readonly ENDPOINT_DELETE_LOAN_LIST = "/loan/deleteLoan"
  readonly ENDPOINT_UPDATE_LOAN = "/loan/updateLoan"

  readonly ENDPOINT_GET_USER_LIST = "/user/getList"
  readonly ENDPOINT_ADD_USER_LIST = "/user/createUser"
  readonly ENDPOINT_DELETE_USER = "/user/deleteUser"
  readonly ENDPOINT_UPDATE_USER = "/user/updateUser"
  readonly ENDPOINT_LOGIN = "/user/login"

  readonly ENDPOINT_GET_AUTHOR_LIST = "/author/getList"
  readonly ENDPOINT_ADD_AUTHOR_LIST = "/author/createAuthor"
  readonly ENDPOINT_DELETE_AUTHOR_LIST = "/author/deleteAuthor"
  readonly ENDPOINT_UPDATE_AUTHOR_LIST = "/author/updateAuthor"
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };


  constructor(private http: HttpClient) { }
  
  //CRUD BOOK

  getBooks() {
    return this.http.get<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_GET_BOOK_LIST}`, this.httpOptions)
  }

  addBook(book: any) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_ADD_BOOK_LIST}`, book, this.httpOptions)
  }

  updateBook(id: number) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_UPDATE_BOOK}`, this.httpOptions)
  }

  deleteBook(payload: any) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_DELETE_BOOK}`, payload, this.httpOptions)
  }


  //CRUD LOAN
  getLoans() {
    return this.http.get<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_GET_LOAN_LIST}`, this.httpOptions)
  }

  addLoan(payload: any) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_ADD_LOAN}`, payload, this.httpOptions)
  }

  updateLoan(payload: any) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_UPDATE_LOAN}`, payload , this.httpOptions)
  }

  deleteLoan(payload: any) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_DELETE_LOAN_LIST}`, payload, this.httpOptions)
  }

  //CRUD USER
  getUsers(){
    return this.http.get<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_GET_USER_LIST}`, this.httpOptions)
  }

  addUser(payload: any) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_ADD_USER_LIST}`, payload, this.httpOptions)
  }

  updateUser(payload: any) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_UPDATE_USER}`, payload , this.httpOptions)
  }

  deleteUser(payload: any) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_DELETE_USER}`, payload, this.httpOptions)
  }

  login(payload: any) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_LOGIN}`, payload, this.httpOptions)
  }

  //CRUD AUTHOR
  getAuthors() {
    return this.http.get<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_GET_AUTHOR_LIST}`, this.httpOptions)
  }

  addAuthor(loan: any) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_ADD_AUTHOR_LIST}`, loan, this.httpOptions)
  }

  updateAuthor(payload: any) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_UPDATE_AUTHOR_LIST}`, payload , this.httpOptions)
  }

  deleteAuthor(payload: any) {
    return this.http.post<any>(`http://${this.IP}:${this.PORT}${this.ENDPOINT_DELETE_AUTHOR_LIST}`, payload, this.httpOptions)
  }

}
