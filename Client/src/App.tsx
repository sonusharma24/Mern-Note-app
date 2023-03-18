import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Notes from "./components/Notes";
import { Note } from "./models/note";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await fetch("/api/notes");
        const notesData = await response.json();
        setNotes(notesData);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    };
    getNotes();
  }, []);

  return (
    <Container>
      <Row xs={1} md={2} xl={3} className="g-4">
        {notes.map((note) => (
          <Col>
            <Notes note={note} key={note._id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
