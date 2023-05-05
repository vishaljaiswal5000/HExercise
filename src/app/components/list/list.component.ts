import { Component, Input, OnInit } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() set inputString(value: string) {
    if (value != '') this.getBodyExercises(value);
  }
  data: any[] = [];


  cards: any[] = []; // replace with your card data
  page = 1;
  pageSize = 5;

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit(): void {}

  getBodyExercises(bodyPart: string) {
    this.exerciseService.getBodyPartExercises(bodyPart).subscribe((data) => {
      this.data = data;
    });
  }
}
