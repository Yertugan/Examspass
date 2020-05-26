import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../shared/services/auth-services/authentication.service';
import {UserService} from '../shared/services/user-services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentProfileComponent implements OnInit {

  me: any;

  @Input('active') active: string;
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
      this.admin = value.isAdmin;
    });

    if (this.active === undefined) {
      this.active = 'student_profile';
    }
  }

}
