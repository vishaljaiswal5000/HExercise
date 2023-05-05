import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExerciseService } from '../../services/exercise.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() bodyPartSelected = new EventEmitter<string>();
  public bodyParts$: Observable<string[]> = of([]);
  public selectedBodyPart:string ="";
  constructor(public exerciseService: ExerciseService) {}

  ngOnInit(): void {
    this.getBodyParts();
  }

  getBodyParts() {
    this.bodyParts$ = this.exerciseService.getBodyPartList();
  }

  onBodyPartSelected(){
    this.bodyPartSelected.emit(this.selectedBodyPart);
  }
}
