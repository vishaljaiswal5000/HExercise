import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() fetchFavorite = new EventEmitter<void>();
  userId = '';
  constructor(
    public firestore: AngularFirestore,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserData.uid;
  }

  toggleFavorite() {
    if (this.item.isFavorite) {
      this.removeFavorite(this.item.id);
    } else {
      this.addFavorite(this.item.id);
    }
  }
  addFavorite(id: string) {
    const favorite: Favorite = {
      exerciseId: id,
      playerId: this.authService.getUserData().uid,
    };
    this.firestore.collection('favorites').add(favorite);
    this.item.isFavorite = true;
    this.fetchFavorite.emit();
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
            this.item.isFavorite = false;
            this.fetchFavorite.emit();
          });
        }
      })
      .catch((error) => {
        console.error('Error removing favorite: ', error);
      });
  }

  // isFavorite(id: string) {
  //   return this.favorites$.pipe(
  //     map((favorites) =>
  //       favorites.some((f) => {
  //         console.log(f.exerciseId + '------>' + id);
  //         return f.exerciseId === id;
  //       })
  //     )
  //   );
  // }

  // getFavorites() {
  //   return this.firestore
  //     .collection<Favorite>('favorites', (ref) =>
  //       ref
  //         .where('playerId', '==', this.userId)
  //         .where('exerciseId', '==', this.item.id)
  //     )
  //     .valueChanges({ idField: 'id' });
  // }
}
