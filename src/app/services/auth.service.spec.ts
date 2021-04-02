/* import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 */

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    localStorage.clear();
    service = new AuthService();
  });
  afterEach(() => {
    localStorage.clear();
  });

  it('login() si las credenciales son correctas', () => {
    expect(service.login('master8@lemoncode.net', '12345678')).toBeTruthy();
  });

  it('login() si las credenciales NO son correctas', () => {
    expect(service.login('ohasda', '982423908')).toBeFalsy();
  });

  it('logOut() limpiar localStorage', () => {
    localStorage.setItem('Usuario', 'clave');
    service.logOut();
    expect(localStorage.getItem('Usuario')).toBeFalsy();
  });

  it('isLogged() si usuario está logueado', () => {
    localStorage.setItem('Usuario', 'clave');
    expect(service.isLogged()).toBeTruthy();
  });

  it('isLogged() si usuario NO está logueado', () => {
    expect(service.isLogged()).toBeFalsy();
  });

  it('getUsename() devuelve usuario logueado', () => {
    localStorage.setItem('Usuario', 'clave');
    expect(service.getUsename()).toBeTruthy();
  });
});
