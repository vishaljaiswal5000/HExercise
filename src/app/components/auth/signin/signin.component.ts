import { Component,  OnInit,  } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  isHidden = true;
  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required,Validators.minLength(6)],
    });
  }
  ngOnInit() {}

  get email() {
    return this.signInForm.get('email')?.value;
  }

  get password() {
    return this.signInForm.get('password')?.value;
  }

  onSubmit() {
    this.authService.SignIn(
      this.email,
      this.password
    );
  }
}
