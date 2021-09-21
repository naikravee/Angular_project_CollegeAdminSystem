import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public user: SocialUser = new SocialUser;

  constructor(private authService: SocialAuthService,
    private fb: FormBuilder) { }

  ngOnInit(): void { }

  get username () {
    return this.loginForm.get('username') as FormControl;
  }

  get password () {
    return this.loginForm.get('password') as FormControl;
  }

  // username = new FormControl('',[Validators.required, Validators.minLength(5)]);

  // password = new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}')]);


  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}')]]
  });

 
}
