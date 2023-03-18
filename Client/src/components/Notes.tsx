import React from "react";
import { Note as NoteModel } from "../models/note";
import { Card } from "react-bootstrap";
import styles from "../styles/Notes.module.css";
import { formatDate } from "../utils/formatDate";

interface NoteProps {
  note: NoteModel;
}

const Notes = ({ note }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;
  let createdUpdatedText: string;

  if (updatedAt > createdAt) {
    createdUpdatedText = `Updated ${formatDate(updatedAt)}`;
  } else {
    createdUpdatedText = `created ${formatDate(createdAt)}`;
  }

  return (
    <Card className={styles.noteCard}>
      <Card.Body className={styles.cardBody}>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{createdUpdatedText}</Card.Footer>
    </Card>
  );
};

export default Notes;
