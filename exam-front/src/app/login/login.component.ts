import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user-services/user.service';
import { User } from '../shared/models/user'
import { ActivatedRoute } from '@angular/router'
import {AuthenticationService} from "../shared/services/auth-services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
}
/*


  creds: User = {
    username: '',
    password: ''
  };

  constructor(private router: Router,
              private authService: AuthenticationService,
              private userService: UserService) {}

  ngOnInit() {}

  onSubmit() {
    this.authService.login(this.creds).then(result => {
      this.userService.setCurrentUser(result['user']);
      console.log('I logged in', result);
      localStorage.setItem('token', result['token']);
      this.router.navigateByUrl('');
    });
  }

}
*/
