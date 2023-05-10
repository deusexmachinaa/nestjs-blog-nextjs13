import { Injectable, Post } from '@nestjs/common';
import { Posts } from './posts.entity';
import { v4 } from 'uuid';

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
    return this.posts.find((post: Posts) => post.id == id);
  }

  createPost(title: string, content: string) {
    const newPost = {
      id: v4(),
      title,
      content,
    };
    this.posts.push(newPost);
    return this.posts;
  }

  deletePost(id: number) {
    return this.posts.filter((post) => post.id != id);
  }
}
