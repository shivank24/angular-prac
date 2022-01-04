import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // prefer when user navigates and component destroyed
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id)

    // prefer when component not destroyed
    this.route.paramMap
    .subscribe(params => {
      console.log(params)
      let id = params.get('id');
      console.log(id)
    })
  }

  submit(){
    this.router.navigate(
      ['/followers'],
      {queryParams:{page: 1, order: 'newest'}}
    )
  }

}
