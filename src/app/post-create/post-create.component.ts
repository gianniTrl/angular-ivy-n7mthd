import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Post, PostService } from '../../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup;
  loaded: boolean = false;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.has('id')) {
      this.postService
        .get(this.route.snapshot.paramMap.get('id'))
        .pipe(first())
        .subscribe((r: Post) => {
          this.initPostForm(r);
        });
    } else {
      this.initPostForm();
    }
  }

  initPostForm(post?: Post): void {
    this.postForm = new FormGroup({
      title: new FormControl(post?.title || '', [
        Validators.required,
        Validators.minLength(5),
      ]),
      body: new FormControl(post?.body || '', [
        Validators.required,
        Validators.minLength(5),
      ]),
      id: new FormControl(post?.id || ''),
      userId: new FormControl(post?.userId || ''),
    });
    this.loaded = true;
  }

  onPostFormSubmit(): void {
    const payload: Post = {
      title: this.postForm.value.title,
      body: this.postForm.value.body,
      id: this.postForm.value.id,
      userId: this.postForm.value.userId,
    };
    if (this.route.snapshot.paramMap.has('id')) {
      this.postService.edit(payload).subscribe((r) => console.log(r));
    } else {
      this.postService.create(payload).subscribe((r) => console.log(r));
    }
  }
}
