import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/services/auth-services/authentication.service';
import {UserService} from '../shared/services/user-services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  me: any;
  name: string;
  surname: string;
  email: string;
  username: string;
  password: string;
  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.userService.currentUserChange.subscribe(value => {
      this.me = value;
      this.name = value.name;
      this.surname = value.surname;
      this.email = value.email;
      this.username = value.username;
    });
  }

}
