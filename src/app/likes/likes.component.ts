import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {

  @Input('is-liked') isSelected;
  @Input('likes-count') totalLikes;

  onClick(){
    this.totalLikes += this.isSelected ? -1: 1;
    this.isSelected = !this.isSelected;
  }

}
