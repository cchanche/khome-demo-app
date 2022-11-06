import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = HydratedDocument<User>;

/**
 * User schema
 *
 * Created collection will be named `users`
 */
@Schema()
export class User {
  @ApiProperty({
    description: "The user's first name",
  })
  @Prop({ required: true })
  firstName: string;

  @ApiProperty({
    description: "The user's last name",
  })
  @Prop()
  lastName: string;

  @ApiProperty({
    description: "The user's email",
  })
  @Prop({ required: true })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
