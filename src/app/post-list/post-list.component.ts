import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Post, PostService } from '../../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService
      .getAll()
      .pipe(first())
      .subscribe((r) => {
        this.posts = r;
      });
  }
}
