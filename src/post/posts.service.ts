import { Injectable } from '@nestjs/common';
import { Posts } from './posts.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Posts.name) private postModel: Model<Posts>) {}
  async create(data: Posts): Promise<Posts> {
    const newPost = new this.postModel(data);
    return newPost.save();
  }

  async read(userName): Promise<Posts[]> {
    // userId = Types.ObjectId(userId);
    console.log(userName);
    // return this.postModel.find({ userId }).exec();
    // const data = await this.postModel
    //   .aggregate([{ $match: { userID: { $eq: { $toObjectId: userId } } } }])
    //   .exec();
    // console.log(data);
    return this.postModel.find({ userName }).exec();
  }
  async update(id: string, data): Promise<Posts> {
    return this.postModel.findByIdAndUpdate(id, data, { new: false }).exec();
  }
  async delete(id) {
    return this.postModel.findByIdAndDelete(id).exec();
  }
}
