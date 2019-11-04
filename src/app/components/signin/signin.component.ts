import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { 
    if(this.authService.isLoggedIn === true) {
      this.router.navigate(['products'])
    }
  }

  ngOnInit() {
  }
}
