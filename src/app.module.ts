import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [PostsModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class AppModule {}
