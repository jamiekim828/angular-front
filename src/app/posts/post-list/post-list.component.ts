import { Component, Input } from '@angular/core';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent {
  // posts = [
  //   { title: 'First Post', content: "This is the first post's content" },
  //   { title: 'Second Post', content: "This is the second post's content" },
  // ];

  @Input() posts: Post[] = [];
  // get the posts from post-create component and write it in the app component html to bind it
}
