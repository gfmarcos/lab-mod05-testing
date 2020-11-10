import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header-private',
  templateUrl: './header-private.component.html',
  styleUrls: ['../../layout/header-public/header-public.component.scss'],
})
export class HeaderPrivateComponent implements OnInit {
  constructor(public authService: AuthService) {}


  ngOnInit(): void {}
}
