import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../../services/auth.service';
import { Favorite } from 'src/app/model/favorite';
import { Collection } from 'src/app/constants/enum';
import { firstValueFrom } from 'rxjs'

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
      userId: this.authService.getUserData.uid,
    };
    this.firestore.collection(Collection.FAVORITES).add(favorite);
    this.item.isFavorite = true;
    this.fetchFavorite.emit();
  }

  removeFavorite(id: string) {
    firstValueFrom(this.firestore
      .collection<Favorite>(Collection.FAVORITES, (ref) =>
        ref.where('exerciseId', '==', id).where('userId', '==', this.userId)
      )
      .get()).then((querySnapshot) => {
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
}
