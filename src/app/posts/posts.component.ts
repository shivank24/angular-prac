import { Component, OnInit} from '@angular/core';
import { AppError } from '../common/app-errors';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts;
  
  constructor(private service: PostsService){
  }

  ngOnInit(){
    this.service.getAll()
      .subscribe(posts=>this.posts = posts)
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value }
    // optimistic updates
    // this.posts.splice(0,0,post)
    input.value = ''
    
    this.service.create(post)  
      .subscribe(newPost=>{
        post['id'] = newPost['id']
        //pessimistic updates
        this.posts.splice(0,0,post)
    },
    (error: AppError)=>{
      if (error instanceof BadInput){
        alert('bad data')
        // show validation errors in form
        // this.form.setErrors(error.originalError)
      }
      else
        throw error; 
    })
  }

  updatePost(post){
    this.service.update(post)
      .subscribe(updatedPost=>{
        console.log(updatedPost)
      })
  }

  deletePost(post){
    this.service.delete(post.id)
      .subscribe(() => {
        let index = this.posts.indexOf(post)
        this.posts.splice(index,1)
      }, 
      (error: AppError)=>{
        if (error instanceof NotFoundError){
          console.log(error)
          alert('Post not found')
        }
        else
          throw error; 
      })
  }
}
