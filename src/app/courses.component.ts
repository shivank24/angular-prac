import { Component } from '@angular/core';
import { CoursesService} from './courses.service';

@Component({
    selector: 'courses',
    template:
    `
    <h2>{{"Title:" + getTitle() }}</h2>

    <ul>
        <li *ngFor="let course of courses"> 
            {{ course }}
        </li>
    </ul>

    <img src="{{ imageUrl }}"/>
    <img [src]="imageUrl"/>
    <p></p>
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
    <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue': 'red'">Save</button>
    <div (click)="onDivClick()">
        <button (click)="onClick($event)">Save</button>
    </div>
    <input [(ngModel)]='email' (keyup.enter)="onKeyUp()"/>
    <br/>
    {{ course.title | uppercase | lowercase}} <br/>
    {{ course.students | number}} <br/>
    {{ course.rating | number:'1.2-3'}} <br/>
    {{ course.price | currency:'AUD':true:'3.1-2'}} <br/>
    {{ course.releaseDate | date:'shortDate' }}
    <br/>
    {{ text | summary }}
    <span class="glyphicon glyphicon-star-empty"></span>
    <span class="glyphicon" [class.glyphicon-star]="isFavorite"></span>
    <!--<button class="glyphicon glyphicon-star-empty"></button> -->
    `
})
export class CoursesComponent{
    title = "List of courses";
    courses;
    imageUrl = "http://lorempixel.com/400/200/";
    colSpan=2;
    isActive = false;
    email = 'me@example.com';
    course = {
        title: 'Angular course',
        rating: 4.9745,
        students: 30123,
        price: 190.85,
        releaseDate: new Date(2016,1,14)
    };
    text = "Lorem fkeik cjbeakncol jbclkwnjec bjelcnwjenclwe cjwbelc"
    isFavorite = false

    constructor(service: CoursesService) {
        this.courses = service.getCourses()
    }

    getTitle(){
        return this.title
    }
    onClick($event){
        $event.stopPropagation()
        console.log('Button clicked')
        console.log($event)
        
    }
    onDivClick(){
        console.log('Div clicked')
    }
    onKeyUp(){
        console.log(this.email)
    }
}

//Text from courses-component
