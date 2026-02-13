import { Schema, model, Document } from 'mongoose';

// 1. Create an interface for the document (what each user document looks like)
interface IUser extends Document {
  username: string;
  password: string;     // ← almost never number! passwords are strings
  // createdAt?: Date;  // ← you can add these later
  // updatedAt?: Date;
}

// 2. Create the Schema
const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true, // ← automatically adds createdAt & updatedAt
  }
);

// 3. Create the model
const User = model<IUser>('User', userSchema);

// 4. Export it (default or named — both are fine)
export default User;

// ───────────────────────────────────────────────
//   Alternative: if you prefer named export
// export const UserModel = model<IUser>('User', userSchema);