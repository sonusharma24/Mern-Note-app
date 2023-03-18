import React from "react";
import { Note as NoteModel } from "../models/note";
import { Card } from "react-bootstrap";
import styles from "../styles/Notes.module.css";

interface NoteProps {
  note: NoteModel;
}

const Notes = ({ note }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;
  return (
    <Card className={styles.noteCard}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{createdAt}</Card.Footer>
    </Card>
  );
};

export default Notes;
