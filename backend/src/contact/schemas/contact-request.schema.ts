import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContactRequestDocument = HydratedDocument<ContactRequest>;

@Schema({ timestamps: true, collection: 'contact_requests' })
export class ContactRequest {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, trim: true, lowercase: true })
  email: string;

  @Prop({ required: true, trim: true })
  phone: string;

  @Prop({ required: true, trim: true })
  service: string;
}

export const ContactRequestSchema =
  SchemaFactory.createForClass(ContactRequest);
