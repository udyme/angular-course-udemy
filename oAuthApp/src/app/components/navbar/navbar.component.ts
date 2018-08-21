import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService) {
    authService.handleAuthentication();
  }
  
  isAuthenticated(): boolean {
    let r = this.authService.isAuthenticated();
    console.log("isAuthenticated");
    console.log(r);
    return r;
  }

  salir() {
    this.authService.logout();
  }

  login() {
    this.authService.login();
  }

  is

}
