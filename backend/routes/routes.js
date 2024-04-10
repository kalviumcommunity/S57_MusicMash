import express from "express";
import { Singer, Song, User } from "../schema/index.js";
import {
  createUser,
  deleteSinger,
  deleteSong,
  getSinger,
  getSong,
  getSongs,
  updateSinger,
  updateSong,
} from "../controllers/index.js";

const router = express.Router();
export default router;
router.get("/singers", getSinger);

router.post("/singers", createUser);

router.delete("/singers", deleteSinger);

router.put("/singers/", updateSinger);

router.get("/songs", getSongs);

router.put("/songs/:id", updateSong);

router.get("/songs/:id", getSong);

router.delete("/songs/:id", deleteSong);
