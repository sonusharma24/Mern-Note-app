import { RequestHandler } from "express"
import createHttpError from "http-errors"
import mongoose from "mongoose"
import note from "../models/note"
import NoteModel from "../models/note"


// get notes
export const getNotes :RequestHandler = async(req,res, next)=>{
    try{
        const notes = await NoteModel.find().exec()
        res.status(200).json(notes)
    }catch(error){
      next(error)
    }
}

// get note by id 
export const getNote:RequestHandler = async(req, res, next)=>{
    const noteId = req.params.noteId
    try {
        if(!mongoose.isValidObjectId(noteId)){
            throw createHttpError(400, "invaild note id")
        }
        const note = await NoteModel.findById(noteId).exec()
        if(!note){
            throw createHttpError(404,"note not found")
        }
        res.status(200).json(note)
    } catch (error) {
        next(error)
        
    }
}



interface createNoteBody{
    title? :string,
    text?:string
}

// create note 
export const createNote :RequestHandler<unknown, unknown, createNoteBody,unknown> = async(req, res, next)=>{
    const title = req.body.title;
    const text = req.body.text;
 

try {
    if(!title){
        throw createHttpError(400,"note must have title")
    }
    const newNote =await NoteModel.create({
        title:title,
        text:text
    })
    res.status(201).json(newNote)
    
} catch (error) {
    next(error)
}
}

interface updateNoteParams {
    noteId:string
}

interface updateNoteBody{
    title?:string,
    text?:string
}

export  const updateNote :RequestHandler<updateNoteParams, unknown, updateNoteBody, unknown> = async(req, res, next)=>{
    const noteId = req.params.noteId
    const newTitle = req.body.title
    const newText = req.body.text
    try {
        if(!mongoose.isValidObjectId(noteId)){
            throw createHttpError(400, "invalid note id")
        }
        if(!newTitle){
            throw createHttpError(400, "note must have a title")
        }

        const note=await NoteModel.findById(noteId).exec()

        if(!note){
            throw createHttpError(404, "note not found")
        }
        note.title=newTitle
        note.text=newText
        const updatedNote = await note.save()
        res.status(200).json(updatedNote)
    } catch (error) {

        next(error)
    }
}

// delete notes 
export const deleteNote :RequestHandler= async(req, res, next)=>{
    const noteId = req.params.noteId
    try {
        if(!mongoose.isValidObjectId(noteId)){
            throw createHttpError(400, "invalid note id")
        }
        const note = await NoteModel.findById(noteId).exec()

        if(!note){
            throw createHttpError(404, "note not found")
        }
        await note.deleteOne()
        res.sendStatus(204)
           
    } catch (error) {
        next(error)
    }
}