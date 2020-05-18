import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user-services/user.service';
import { User } from '../shared/models/user'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;

  form: FormGroup;
  loading = false;
  user: User;
  userId: string;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.userId = param.get('id');
      if (this.userId) {
        this.userService.getCurrentUser()
          .then(res => {
            this.user = res;
            this.form = new FormGroup({
              username: new FormControl(this.user.username, Validators.required),
              name: new FormControl(this.user.name, Validators.required),
              surname: new FormControl(this.user.surname, Validators.required),
              email: new FormControl(this.user.email, Validators.required),
              password: new FormControl(this.user.password, Validators.required),

            });
          });
      } else {
        this.createForm();
      }
    });

  }

  createForm() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
       name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('profile_pic').setValue(file);
    }
  }

  onSubmit() {
    const input = new FormData();

    input.append('username', this.form.get('username').value);
    input.append('name', this.form.get('name').value);
    input.append('surname', this.form.get('surname').value);
    input.append('email', this.form.get('email').value);
    input.append('password', this.form.get('password').value);
    this.loading = true;

    if (this.userId) {
      this.userService.updateUser(input, this.userId)
        .then(
          res => {
            this.userService.setCurrentUser(res);
            this.router.navigate(['/profile', this.userId, {outlets: {userPage: 'profile'}}]);
          },
          err => {
            console.error(err);
          });
    } else {
      this.userService.createUser(input)
        .then(
          res => {
            console.log(res);
            this.router.navigateByUrl('login');
          },
          err => {
            console.error(err);
          }
        );
    }
  }

  delete() {
    this.userService.deleteUser(this.userId)
      .then(
        res => {
          this.userService.destroyCurrentUser();
          this.router.navigateByUrl('registration');
        },
        err => {
          console.error(err);
        }
      );
  }

}
