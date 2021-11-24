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
    isFavorite:true
  }

  tweet = {
    body: "Body of tweet",
    likesCount: 100,
    isLiked: false,
  }

  courses;

  viewMode = 'map'

  canSave = true;

  task = {
    title: 'Review',
    assignee: null
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log('Favorite Changed: ', eventArgs);
  }

  onAdd(){
    this.courses.push({id:4, name:'course4'})
  }
  onDelete(course){
    let index = this.courses.indexOf(course)
    this.courses.splice(index, 1)
  }

  onLoad(){
    this.courses = [
      {id:1, name: 'course1'},
      {id:2, name: 'course2'},
      {id:3, name: 'course3'},
    ]
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }

  onButtonClick(arg){
    this[arg] = !this[arg]
  }
}
