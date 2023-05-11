import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { createPost, deletePost } from './dto/post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getPosts() {
    return this.postsService.getPosts();
  }

  @Get(':id')
  getPost(@Param('id') id: number) {
    return this.postsService.getPost(id);
  }

  @Post()
  createPost(@Body() newPost: createPost) {
    return this.postsService.createPost(newPost.title, newPost.content);
  }

  @Delete(':id')
  deletePost(@Param() deletePost: deletePost) {
    return this.postsService.deletePost(deletePost.id);
  }
}
