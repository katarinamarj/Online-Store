import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  logout() {
    this.authService.logout();
  }

  constructor(public authService: AuthService, public router: Router) { }
  
}
