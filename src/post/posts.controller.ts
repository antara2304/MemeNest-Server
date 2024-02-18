import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from './posts.schema';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('post')
export class PostsController {
  constructor(private postSvc: PostsService) {}

  @Post('create')
  async create(data: Posts): Promise<Posts> {
    return this.postSvc.create(data);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() data: Posts,
  ): Promise<Posts> {
    console.log(file);
    data.media = file;
    console.log(data);
    return this.postSvc.create(data);
  }
}
