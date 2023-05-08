import { Injectable } from '@nestjs/common';
import { Posts } from './posts.entity';

@Injectable()
export class PostsService {
  // simulate a database
  private posts: Posts[] = [
    {
      id: 1,
      title: 'First post',
      content: 'This is the first post',
    },
    {
      id: 2,
      title: 'Second post',
      content: 'This is the second post',
    },
  ];

  getPosts() {
    return this.posts;
  }

  getPost(id: number) {
    return this.posts.find((post) => post.id == id);
  }
}
