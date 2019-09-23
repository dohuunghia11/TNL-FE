import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  redirectURL: string;
  constructor(private formBuilder: FormBuilder, private authenService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  login() {
    console.log(JSON.stringify(this.loginForm.value));
    console.log(this.loginForm.value);
    this.authenService.authenticate(this.loginForm.value).subscribe(
      next => {
        if (next.success) {
          const roles: string[] = [];
          for (const role of next.data.roles) {
            roles.push(role.authority);
          }
          localStorage.setItem('token', next.data.token);
          localStorage.setItem('currentUser', next.data.username);
          // localStorage.setItem('currentPassword', next.data.password);
          localStorage.setItem('roles', JSON.stringify(roles));
          const params = this.route.snapshot.queryParams;
          if (params.redirectURL) {
            this.redirectURL = params.redirectURL;
          }
          if (this.redirectURL) {
            this.router.navigateByUrl(this.redirectURL)
              .catch(() => this.router.navigate(['apartments']));
          } else {
            this.router.navigate(['apartments']);
          }
        } else {
          alert(next.message);
        }
      //   if (next.data.token) {
      //     this.router.navigateByUrl('apartments');
      //   }
      // },
      // error1 => {
      //   this.router.navigateByUrl('/api/login');
      //   console.log(error1);
      }, error => {
        this.router.navigateByUrl('/api/login');
        console.log(error);
      }
      );
  }
  logout() {
    localStorage.clear();
  }
}
