import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/user/user.schema';

export type PostsDocument = HydratedDocument<Posts>;

@Schema()
export class Posts {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;

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
        userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        msg: String,
      },
    ],
    default: [],
  })
  comment: { userID: string; msg: string }[];

  @Prop()
  reaction: { userID: string; like: boolean }[];
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
