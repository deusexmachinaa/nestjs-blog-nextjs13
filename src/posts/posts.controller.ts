import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { createTask } from './dto/post.dto'; 

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
  createPost(@Body() newTasks: createTask) {
    return this.postsService.createPost(newTasks.title, newTasks.content);
  }
}
