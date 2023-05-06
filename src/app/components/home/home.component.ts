import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public selectedBodyPart: string = '';
  constructor(public authService:AuthService) {}

  ngOnInit(): void {}

  onBodyPartSelected(bodyPart: any) {
    this.selectedBodyPart = bodyPart;
  }
}
