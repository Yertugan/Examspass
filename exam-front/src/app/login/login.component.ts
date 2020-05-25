import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user-services/user.service';
import { User } from '../shared/models/user';
import { ActivatedRoute } from '@angular/router';
import {AuthenticationService} from '../shared/services/auth-services/authentication.service';
import {first} from 'rxjs/operators';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  creds: User = {
    username: '',
    password: ''
  };

  constructor(private router: Router,
              private authService: AuthenticationService,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.creds).then(result => {
      this.userService.setCurrentUser(result['user']);
      console.log('I logged in', result);
      localStorage.setItem('token', result['token']);
      this.router.navigateByUrl('');
    });
  }
}


/*

export class LoginComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
}
=======
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
>>>>>>> master

  get f() { return this.loginForm.controls; }

<<<<<<< HEAD
 */


/*
  creds: User = {
    username: '',
    password: ''
  };
=======
  ngOnInit() {
    this.authenticationService.login('rus', '213123');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
>>>>>>> master

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

<<<<<<< HEAD
  onSubmit() {
    this.authService.login(this.creds).then(result => {
      this.userService.setCurrentUser(result['user']);
      console.log('I logged in', result);
      localStorage.setItem('token', result['token']);
    });
=======
    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
>>>>>>> master
  }
}
<<<<<<< HEAD
*/
/*
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
  }
*/
