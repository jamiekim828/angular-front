import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  // post create event
  @Output() postCreate = new EventEmitter<Post>();

  // save button
  onAddPost(form: NgForm) {
    // validation
    if (form.invalid) {
    }
    // new post type here
    const post: Post = {
      title: form.value.title,
      content: form.value.content,
    };

    // post goes to app-post-list -> how to listen? with Output -> app component onPostAdded
    // -> post-list bind the post to get it with @Input
    this.postCreate.emit(post);
  }
}
