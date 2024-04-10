import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
});

const songSchema = new mongoose.Schema({
  song: String,
  singer: { type: mongoose.Types.ObjectId, ref: "Singer" },
  image: String,
  popularity: String,
});

const singerSchema = new mongoose.Schema({
  song: [{ type: mongoose.Types.ObjectId, ref: "Song" }],
  name: String,
});

export const Song = mongoose.model("Song", songSchema);
export const Singer = mongoose.model("Singer", singerSchema);
export const User = mongoose.model("User", userSchema);
