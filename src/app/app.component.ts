import { Component } from '@angular/core';

import {FavoriteChangedEventArgs} from './favorite/favorite.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular hello-world';
  post = {
    title:"Angular",
    isFavorite:false
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log('Favorite Changed: ', eventArgs);
  }
}
