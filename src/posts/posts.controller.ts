import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { createPostDto, deletePostDto, updatePostDto } from './dto/post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getPosts() {
    return this.postsService.getPosts();
  }

  @Get(':id')
  getPost(@Param('id') id: string) {
    return this.postsService.getPost(id);
  }

  @Post()
  createPost(@Body() newPost: createPostDto) {
    return this.postsService.createPost(newPost.title, newPost.content);
  }

  @Delete(':id')
  deletePost(@Param() deletedPost: deletePostDto) {
    return this.postsService.deletePost(deletedPost.id);
  }

  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() updatedPost: updatePostDto) {
    return this.postsService.updatePost(id, updatedPost);
  }
}
