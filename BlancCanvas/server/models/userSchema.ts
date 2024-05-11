import mongoose, { Document, Schema } from "mongoose";

interface UserData extends Document {
  username: string;
  email: string;
  password: string;
  mobile: number;
}

const userSchema: Schema<UserData> = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  mobile: Number,
});

const User = mongoose.model<UserData>("User", userSchema);
export { User };
