import { Component, OnInit } from '@angular/core';
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
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
