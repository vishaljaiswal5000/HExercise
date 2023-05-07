import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  // @ViewChild('username') userName!: ElementRef<HTMLInputElement>;
  // @ViewChild('userpassword') userPassword!: ElementRef<HTMLInputElement>;

  // get enableLogIn() {
  //   //if (this.userName.)
  //   return this.userName;
  // }

  inputPassword = '';
  hide = true;
  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {}

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  onSubmit() {
    this.authService.SignIn(
      this.signInForm.value.email,
      this.signInForm.value.password
    );
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
