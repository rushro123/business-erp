import {Schema, model} from 'mongoose';

import mongoose from "mongoose";
import argon2 from "argon2";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      maxlength: [100, "Max length is 100"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Please provide email"],
      maxlength: [100, "Max length is 100"],
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },

    password: {
      type: String,
      required: [true, "Please provide password"],
      minlength: [6, "Minimum 6 characters"],
      select: false, 
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await argon2.hash(this.password);
});
userSchema.methods.comparePassword = async function (candidatePassword: string):Promise<boolean> {
  return await argon2.verify(this.password, candidatePassword);
};
const User = model("User", userSchema);
export default User;