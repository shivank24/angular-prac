import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles:[
    `
    .glyphicon {
      color:green;
    }

    .glyphicon-star {
      background: black;
    }
    `
  ]
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isSelected:boolean=true;
  @Output('change') click=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isSelected = !this.isSelected;
    this.click.emit({
      newValue: this.isSelected
    });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
