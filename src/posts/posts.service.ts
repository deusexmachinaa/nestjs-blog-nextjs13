import { Injectable } from '@nestjs/common';
import { Posts } from './posts.entity';
import { v4 } from 'uuid';

@Injectable()
export class PostsService {
  // simulate a database
  private posts: Posts[] = [
    {
      id: '1',
      title: 'First post',
      content: 'This is the first post',
    },
    {
      id: '2',
      title: 'Second post',
      content: 'This is the second post',
    },
  ];

  getPosts(): Posts[] {
    return this.posts;
  }

  getPost(id: string): Posts {
    return this.posts.find((post: Posts) => post.id == id);
  }

  createPost(title: string, content: string): Posts[] {
    const newPost: Posts = {
      id: v4(),
      title,
      content,
    };
    this.posts.push(newPost);
    return this.posts;
  }

  deletePost(id: string) {
    this.posts.filter((post: Posts) => post.id != id);
    return this.posts;
  }

  updatePost(id: string, updatedPost): Posts {
    const index = this.posts.findIndex((post: Posts) => post.id == id);
    return (this.posts[index] = updatedPost);
  }
}
