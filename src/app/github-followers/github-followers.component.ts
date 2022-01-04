import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers;

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit(): void {

    // combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ])
    // .subscribe(combined=>{
    //   console.log(combined)
    //   let id = combined[0].get('id');
    //   let page = combined[1].get('page');

    //   // this.service.getAll({id:id, page: page})
    //   this.service.getAll()
    //   .subscribe(followers=>{
    //     this.followers=followers
    //     console.log(followers)
    //   })
    // });

    // OR

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined=>{
        console.log(combined)
        // required params
        let id = combined[0].get('id');
        // optional params
        let page = combined[1].get('page');

        // this.service.getAll({id:id, page: page})
        return this.service.getAll();
      })
    )
    .subscribe(
      followers => this.followers = followers
    );
  }

}
