import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser | undefined

  constructor() { }

  getUsername() {
    return this.user?.username
  }
}
