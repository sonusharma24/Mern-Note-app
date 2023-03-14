import * as NotesController from "../controllers/notes"
import express  from "express"


const router =express.Router()
router.get("/",NotesController.getNotes )
router.post("/",NotesController.createNote )
router.get("/:noteId",NotesController.getNote )
router.patch("/:noteId", NotesController.updateNote)
router.delete("/:noteId", NotesController.deleteNote)
export default router
