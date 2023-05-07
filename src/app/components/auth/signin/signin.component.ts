import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  @ViewChild('username') userName!: ElementRef<HTMLInputElement>;
  @ViewChild('userpassword') userPassword!: ElementRef<HTMLInputElement>;

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {}

  get enableLogIn() {
    //if (this.userName.)
    return this.userName;
  }
}
