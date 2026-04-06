import { Router } from "express";
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesControllers.js";

const router = Router();

router.get("/", getAllNotes)

router.post("/", createNote)

router.put("/:id", updateNote)

router.delete("/:id", deleteNote)

export default router;