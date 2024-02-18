import { Injectable } from '@nestjs/common';
import { Posts } from './posts.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Posts.name) private postModel: Model<Posts>) {}
  async create(data: Posts): Promise<Posts> {
    console.log(data);
    const newPost = new this.postModel(data);
    return newPost.save();
  }
  async update() {}
  async delete() {}

  async reaction() {}

  async comment() {}
}
