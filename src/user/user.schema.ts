import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  userName: string;

  @Prop()
  name: string;

  @Prop()
  dob: string;

  @Prop()
  bio: string;

  @Prop()
  email: string;

  @Prop()
  ph: string;

  @Prop()
  password: string;

  @Prop()
  isPrivate: boolean;

  @Prop()
  isActive: boolean;

  @Prop()
  address: string;

  @Prop()
  profilePic: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  followers: User[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  followings: User[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  pendingFollowers: User[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  pendingFollowings: User[];
}

export const UserSchema = SchemaFactory.createForClass(User);
