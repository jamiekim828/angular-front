import { Component } from '@angular/core';
import { Post } from './posts/post.model';
// move this Post type to post.model.ts file
// now we can import and use it
// interface Post {
//   title: string;
//   content: string;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  storedPosts: Post[] = [];

  onPostAdded(post: Post) {
    this.storedPosts.push(post);
  }
}
