import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { UserCredential, getAuth } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  inputPassword = '';
  hide = true;
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      displayName: ['', Validators.required],
    });
  }
  ngOnInit() {}

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  onSubmit() {
    // handle form submission
    this.authService.SignUp(
      this.signUpForm.controls['email'].value,
      this.signUpForm.controls['password'].value,
      this.signUpForm.controls['displayName'].value
    );
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
