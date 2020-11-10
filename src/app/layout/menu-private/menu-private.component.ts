import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-private',
  templateUrl: './menu-private.component.html',
  styleUrls: ['./menu-private.component.scss'],
})
export class MenuPrivateComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  logOut() {
    this.authService.logOut();
    this.router.navigate(['']);
  }

  ngOnInit(): void {}
}
