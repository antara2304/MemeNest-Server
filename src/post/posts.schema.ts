import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/user/user.schema';

export type PostsDocument = HydratedDocument<Posts>;

@Schema()
export class Posts {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;

  @Prop()
  userName: string;

  @Prop()
  description: string;

  @Prop()
  media: string;

  @Prop()
  location: string;

  @Prop()
  date: Date;

  @Prop({
    type: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        msg: String,
      },
    ],
    default: [],
  })
  comments: { userID: User; msg: string }[];

  @Prop({
    type: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        like: Boolean,
      },
    ],
    default: [],
  })
  reaction: { userId: User; like: boolean }[];
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
