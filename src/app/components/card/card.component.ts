import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Favorite } from 'src/app/model/favorite';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item: any;
  favorites$: Observable<Favorite[]>;
  userId = this.authService.getUserData().uid;
  constructor(
    public firestore: AngularFirestore,
    public authService: AuthService
  ) {
    this.favorites$ = this.getFavorites();
  }

  ngOnInit(): void {}

  addFavorite(id: string) {
    const favorite: Favorite = {
      exerciseId: id,
      playerId: this.authService.getUserData().uid,
    };
    this.firestore.collection('favorites').add(favorite);
  }

  removeFavorite(id: string) {
    this.firestore
      .collection<Favorite>('favorites', (ref) =>
        ref.where('exerciseId', '==', id).where('playerId', '==', this.userId)
      )
      .get()
      .toPromise()
      .then((querySnapshot) => {
        if (querySnapshot) {
          querySnapshot.forEach((doc) => {
            doc.ref.delete();
          });
        }
      })
      .catch((error) => {
        console.error('Error removing favorite: ', error);
      });
  }

  isFavorite(id: string) {
    return this.favorites$.pipe(
      map((favorites) => favorites.some((f) => f.exerciseId === id))
    );
  }

  getFavorites() {
    return this.firestore
      .collection<Favorite>('favorites', (ref) =>
        ref.where('playerId', '==', this.userId)
      )
      .valueChanges({ idField: 'id' });
  }
}
