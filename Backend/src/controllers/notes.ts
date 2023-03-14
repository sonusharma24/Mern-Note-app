import { RequestHandler } from "express"
import createHttpError from "http-errors"
import mongoose from "mongoose"
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

export  const updateNote :RequestHandler = async(req, res, next)=>{
    try {
        
    } catch (error) {

        
    }
}