import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ExerciseService } from 'src/app/services/exercise.service';
import { Favorite } from 'src/app/model/favorite';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

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
  userId = '';
  cards: any[] = []; // replace with your card data
  page = 1;
  pageSize = 8;
  favoriteList: string[] = [];
  favorites$!: Observable<Favorite[]>;
  constructor(
    private exerciseService: ExerciseService,
    public firestore: AngularFirestore,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userId = this.authService.getUserData.uid;

    //TODO: To be uncommented
    // this.getFavoritesByUserId().subscribe((data) => {
    //   this.favoriteList = data.map((f) => f.exerciseId);
    // });
  }


   //TODO: To be commented
  getBodyExercises(bodyPart: string) {
    const localData = localStorage.getItem('data');
    if (!localData)
      this.exerciseService.getBodyPartExercises(bodyPart).subscribe((data) => {
        this.data = data;
        this.data.forEach((element) => {
          element.isFavorite = false;
          if (this.favoriteList.includes(element.id)) element.isFavorite = true;
        });

        this.data.sort(function (x, y) {
          return Number(y.isFavorite) - Number(x.isFavorite);
        });
        localStorage.setItem('data', JSON.stringify(this.data))
      });
    else {
      this.data = JSON.parse(localData)
    }
  }

   //TODO: To be uncommented
  // getBodyExercises(bodyPart: string) {
  //   this.exerciseService.getBodyPartExercises(bodyPart).subscribe((data) => {
  //     this.data = data;
  //     this.data.forEach((element) => {
  //       element.isFavorite = false;
  //       if (this.favoriteList.includes(element.id)) element.isFavorite = true;
  //     });

  //     this.data.sort(function (x, y) {
  //       return Number(y.isFavorite) - Number(x.isFavorite);
  //     });
  //   });
  // }

  getFavoritesByUserId() {
    return this.firestore
      .collection<Favorite>('favorites', (ref) =>
        ref.where('playerId', '==', this.userId)
      )
      .valueChanges();
  }
}
