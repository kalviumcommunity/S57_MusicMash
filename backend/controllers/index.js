import { Singer } from "../schema/index.js";
import { Song } from "../schema/index.js";

export const getSinger = async (req, res) => {
  const user = await Singer.find();
  return res.json(user);
};

export const createUser = async (req, res) => {
  const { name } = await req.body;
  const user = await Singer.create({
    name,
  });
  return res.json(user);
};

export const deleteSinger = async (req, res) => {
  const { id } = await req.params;
  const user = await Singer.findByIdAndDelete({
    id,
  });
  return res.json("deleted");
};

export const updateSinger = async (req, res) => {
  const { name } = await req.body;
  const user = await Singer.findOneAndUpdate({
    name,
  });
  return res.json(user);
};
export const getSongs = async (req, res) => {
  const user = await Song.find();
  return res.json(user);
};

export const updateSong = async (req, res) => {
  const { song, image, singer } = req.body;
  const user = await Song.findOneAndUpdate(id, {
    song,
    image,
    singer,
  });
  return res.json(user);
};

export const getSong = async (req, res) => {
  const user = await Song.findById(req.params.id);
  return res.json(user);
};
export const deleteSong = async (req, res) => {
  const { name } = await req.body;
  const user = await Song.findOneAndDelete({
    name,
  });
  return res.json("deleted");
};
