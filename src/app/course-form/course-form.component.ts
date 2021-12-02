import { Component} from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent{

  coursesCategory = [
    {
      id:1,
      name:"Development" 
    },
    {
      id:2,
      name:"Arts" 
    },
    {
      id:3,
      name:"Languages" 
    },
  ]

  log(f){
    console.log(f);
  }

  create(f){
    console.log(f);
    console.log(f.value);
  }


}
