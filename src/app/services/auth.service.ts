import { Injectable } from '@angular/core';
import { UserEntity } from '../model/UserEntity';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: UserEntity[];
  userAuth: UserEntity;
  /*  userAuthStatus: boolean; */
  constructor() {
    /* this.userAuthStatus = false; */
    this.users = [
      { username: 'marcos@marcos-garcia.com', password: '123456*' },
      { username: 'master8@lemoncode.net', password: '12345678' },
    ];
    this.userAuth = {
      username: '',
      password: '',
    };
  }
  login(username: string, password: string): boolean {
    for (const i in this.users) {
      if (
        this.users[i].username === username &&
        this.users[i].password === password
      ) {
        /* this.userAuthStatus = true; */
        localStorage.setItem('Usuario', this.users[i].username);
        return true;
      }
    }
    return false;
  }
  isLogged(): boolean {
    return this.isLocalStorage();
    /* return this.userAuthStatus; */
  }
  logOut(): void {
    /* this.userAuthStatus = false;
    this.userAuth.username = '';
    this.userAuth.password = ''; */
    localStorage.removeItem('Usuario');
  }
  getUsename(): string {
    return localStorage.getItem('Usuario');
  }

  isLocalStorage() {
    if (localStorage.getItem('Usuario')) {
      return true;
    }
    return false;
  }
}
