import mongoose, { Document, Schema } from 'mongoose';

export interface IAccount extends Document {
  accountNumber: string;
  accountType: 'SAVINGS' | 'CHECKING';
  balance: number;
  owner: string;
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
  owner: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  }
}, {
  timestamps: true,
});

export default mongoose.model<IAccount>('Account', AccountSchema);