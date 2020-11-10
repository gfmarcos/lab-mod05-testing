import { Component } from '@angular/core';
import { AuthService } from '../app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lab-mod04-angular';
  constructor(public authService: AuthService) {
  }
}
