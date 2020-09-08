import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isFavorite:boolean

  onClick(){
    this.isFavorite = !this.isFavorite
    console.log(this.isFavorite)
  }

}
