import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {User} from '../model/User';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: Partial<User>;
  avatarDefault = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRTUteh9yefJkzgW2Pa1jEMEs8YKY5cfat09zZZdeyX-V-Vhpe';
  success: boolean;
  message: string;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }, {validator: comparePassword}),
      avatar: [''],
      username: ['', [Validators.required, Validators.minLength(3),
        Validators.maxLength(50), Validators.pattern(/^[_A-z0-9]*[_A-z0-9]*$/)]],
    });
    this.user = {
      id: Math.round(Math.random() * 1000),
      username: '',
      password: '',
      name: 'user',
      email: '',
      avatar: this.avatarDefault
    };
  }

  onSubmit() {
    console.log(this.user);
    if (this.registerForm.valid) {
      this.userService.registerGuest(this.user)
        .subscribe(
          next => {
            this.success = next.success;
            this.message = next.message;
            alert('Đăng ký tài khoản thành công');
            this.router.navigateByUrl('/home-for-host');
          },
          error => {
            console.log(error);
          }
        );
    }
  }
}
