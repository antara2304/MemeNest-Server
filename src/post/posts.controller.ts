import {
  Body,
  Controller,
  Delete,
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

  @Get('all')
  async read(@Body() data: string): Promise<Posts[]> {
    // return this.postSvc.read(data['userId']);
    return this.postSvc.read(data['userName']);
  }

  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() data: Posts,
  ): Promise<Posts> {
    const encoded = file.buffer.toString('base64');
    data.media = `data:image/png;base64,${encoded}`;
    return this.postSvc.create(data);
  }

  @Put('update/:id')
  upadte(@Param('id') id: string, @Body() data) {
    this.postSvc.update(id, data);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    this.postSvc.delete(id);
  }
}
