import { Component } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <h2> {{ "Title: " + getTitle() }} </h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
        
    </ul>

    <img src="{{ imageUrl }}"/>
    <img [src]="imageUrl" />                    <!--#property binding-->


    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>          <!--attribute binding-->
        </tr>
    </table>


    <button class="btn btn-primary" [class.active]="isActive">Save</button>         <!-- class binding -->
    <button [style.backgroundColor]="isActive ? 'blue': 'white' ">Save</button>     <!-- style binding -->
    <br>

    <div (click)="onDivClicked()">                                                  <!-- event bubbling -->
        <button (click)="onSave($event)" >Save</button>                             <!-- event binding -->
    </div>

    <br>

    <input #email (keyup.enter)="onKeyUp(email.value)" />                           <!--event filtering, template variable -->
    <input [(ngModel)]="newEmail" (keyup.enter)="onEnter()"/>                       <!-- two way binding -->
    <br>

    {{course.title | uppercase | lowercase}}<br>
    {{course.students | number}} <br>
    {{course.rating | number:'2.1-1'}} <br>
    {{course.price | currency:'AUD':true:'3.2-2'}} <br>
    {{course.releaseDate | date:'shortDate'}} <br>

    {{text | summary:50}}

    `
})
export class CoursesComponent{
    title = "List of courses";
    courses;
    imageUrl = 'http://lorempixel.com/400/200/'
    colSpan=2;
    isActive=true;
    newEmail="me@example.com";

    course = {
        title: "The Complete Angular",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016,3,1)
    }

    text = "ambcjhebckjca cbjbceucibeabckae caeoccacl"

    constructor(service: CoursesService){
        this.courses = service.getCourses()
    }

    getTitle(){
        return "List of many courses"
    }

    onSave($event){
        $event.stopPropagation();                                               // stop event bubbling
        console.log('button was clicked', $event);
    }

    onDivClicked(){
        console.log('Div  was clicked');
    }

    onKeyUp(email){
        console.log('Enter was pressed:', email)
    }

    onEnter(){
        console.log(this.newEmail)
    }
    
}