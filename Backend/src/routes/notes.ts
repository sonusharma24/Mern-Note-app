import * as NotesController from "../controllers/notes"
import express  from "express"

const router =express.Router()
router.get("/",NotesController.getNotes )
router.post("/",NotesController.createNote )
router.get("/:noteId",NotesController.createNote )

export default router
