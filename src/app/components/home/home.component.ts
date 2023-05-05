import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public selectedBodyPart: string = '';
  constructor() {}

  ngOnInit(): void {}

  onBodyPartSelected(bodyPart: any) {
    this.selectedBodyPart = bodyPart;
  }
}
