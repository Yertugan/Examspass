import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../shared/services/auth-services/authentication.service";
import {UserService} from '../shared/services/user-services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  me: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.currentUserChange.subscribe(value => {
      this.me = value;
    });
    this.userService.getCurrentUser().then(value => {
      this.userService.currentUserChange.next(value);
    });
  }

  logout() {
    this.userService.destroyCurrentUser();
    this.router.navigateByUrl('');
  }
}
