import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }


  onLoadServers() {
    this.router.navigate(['/servers'])
  }

  onLoadServer(id: number) {
    this.router.navigate(['/server', id, 'edit'], {queryParams: {allowEdit: 2}, fragment: 'loading2'})
  }

  onLogin() {
    console.log('onLogin()');
    this.authService.login();
  }

  onLogout() {
    console.log('onLogout()');
    this.authService.logout();
  }
}
