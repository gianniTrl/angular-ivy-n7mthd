import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Post, PostService } from '../../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post: Post;
  loaded: boolean = false;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.postService
      .get(this.route.snapshot.paramMap.get('id'))
      .pipe(first())
      .subscribe((r) => {
        this.post = r;
        this.loaded = true;
      });
  }
}
