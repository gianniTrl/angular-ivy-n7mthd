import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.service';

@Pipe({
  name: 'post',
})
export class PostPipe implements PipeTransform {
  transform(value: Post, args?: any): any {
    return value.id + ' - ' + value.title;
  }
}
