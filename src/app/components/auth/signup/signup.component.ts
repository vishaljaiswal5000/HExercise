import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isHidden = true;
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
  ) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required,,Validators.minLength(6)],
      displayName: ['', Validators.required],
    });
  }
  ngOnInit() {}

  get email() {
    return this.signUpForm.get('email')?.value;
  }

  get password() {
    return this.signUpForm.get('password')?.value;
  }

  get displayName() {
    return this.signUpForm.get('displayName')?.value;
  }

  onSubmit() {
    this.authService.SignUp(this.email, this.password, this.displayName);
  }
}
