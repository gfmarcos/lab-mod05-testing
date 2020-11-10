import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  sendError: boolean;

  constructor(public authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(
      this.authService.userAuth.username,
      this.authService.userAuth.password
    )
      ? this.router.navigate(['/dashboard'])
      : (this.sendError = true);
  }

  ngOnInit(): void {
    console.log("INCIO LOGIN")
  }
}
