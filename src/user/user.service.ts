import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(userData: User): Promise<User> {
    userData.password = await this.encryptPassword(userData.password);
    const newUser = new this.userModel(userData);
    return newUser.save();
  }

  async profile(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, userData: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, userData, { new: false });
  }

  async getUserData(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async delete(id) {
    return this.userModel.findOneAndDelete(id);
  }

  async encryptPassword(password) {
    const saltOrRounds = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }
}
