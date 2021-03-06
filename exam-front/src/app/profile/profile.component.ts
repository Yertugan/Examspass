import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user-services/user.service';
import {AuthenticationService} from '../shared/services/auth-services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  me: any;

  @Input('active') active: string;
  name: string;
  ok: boolean;
  admin = false;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (!this.authenticationService.isAuthenticated()) {
      this.router.navigateByUrl('');
    }
    this.userService.currentUserChange.subscribe(value => {
      this.me = value;
      //this.admin = value.isAdmin;
      this.name = value.username;
      if (this.name === 'admin')
      {
        this.ok = true;
      }
      console.log(this.name);
      console.log(this.admin);
    });

    if (this.active === undefined) {
      this.active = 'profile';
    }
  }
}
