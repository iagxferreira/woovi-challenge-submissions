import mongoose, { Document, Schema } from 'mongoose';

export interface ITransaction extends Document {
  transactionId: string;
  fromAccount: Schema.Types.ObjectId;
  toAccount: Schema.Types.ObjectId;
  amount: number;
  type: 'DEPOSIT' | 'WITHDRAWAL' | 'TRANSFER';
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const TransactionSchema = new Schema<ITransaction>({
  transactionId: {
    type: String,
    required: true,
    unique: true,
  },
  fromAccount: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  toAccount: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  type: {
    type: String,
    required: true,
    enum: ['DEPOSIT', 'WITHDRAWAL', 'TRANSFER'],
  },
  status: {
    type: String,
    required: true,
    enum: ['PENDING', 'COMPLETED', 'FAILED'],
    default: 'PENDING',
  },
  description: {
    type: String,
    required: false,
  }
}, {
  timestamps: true,
});

export default mongoose.model<ITransaction>('Transaction', TransactionSchema);