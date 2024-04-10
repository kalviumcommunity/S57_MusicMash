export const a = async () => {
  const e = await mongoose.connect(process.env.MONGO_URL);
  console.log("db");
};

export const gr = async () => {
  const singer = await Singer.create({
    name: "Drake",
  });
  const g = await Song.create({
    song: "aint no compolaint",
    popularity: "222222222",
    image: ";kasda",
  });
  singer.song = g.id;
  await singer.save();
};
