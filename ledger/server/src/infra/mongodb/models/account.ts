import mongoose, { Document, Schema } from 'mongoose';
import {IUser} from "./user";

export interface IAccount extends Document {
  accountNumber: string;
  accountType: 'SAVINGS' | 'CHECKING';
  balance: number;
  owner: IUser["_id"];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const AccountSchema = new Schema<IAccount>({
  accountNumber: {
    type: String,
    required: true,
    unique: true,
  },
  accountType: {
    type: String,
    required: true,
    enum: ['SAVINGS', 'CHECKING'],
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  // In your Account model, update the owner field:
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model<IAccount>('Account', AccountSchema);