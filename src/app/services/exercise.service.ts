import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Urls } from '../constants/enum';


@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  constructor(private dataService: DataService) {}

  getBodyPartList(): Observable<any> {
    return this.dataService.get(Urls.HELIUM_EXERCISE_BODY_PARTS);
  }

  getBodyPartExercises(bodyPart: string): Observable<any> {
    const url = `${Urls.HELIUM_EXERCISE_BODY_EXERCISE}/${bodyPart}`;
    return this.dataService.get(url);
  }
}
