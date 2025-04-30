import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './user';

export interface IProfile extends Document {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  address?: string;
  dateOfBirth?: Date;
  user: IUser['_id'];
  createdAt: Date;
  updatedAt: Date;
}

const ProfileSchema = new Schema<IProfile>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  }
}, {
  timestamps: true,
});

export default mongoose.model<IProfile>('Profile', ProfileSchema);