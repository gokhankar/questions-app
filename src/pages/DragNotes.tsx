import { useEffect, useState } from "react";
import NoteComponent, { Note } from "../components/NoteComponent";

const DragNotes = () => {
  const notes = [
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 2,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];

  const createRandomPositon = (): { x: number; y: number } => {
    const maxX: number = window.innerWidth - 200;
    const maxY: number = window.innerHeight - 200;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    return {
      x: x,
      y: y > 100 ? y : 100,
    };
  };
  const [notesAndPositions, setNotesAndPositions] = useState(
    notes.map((note) => {
      const position = createRandomPositon();

      return { note, position };
    })
  );

  // const noteRefs = useRef([])

  const addNoteAndPosition = (length: number) => {
    const position = createRandomPositon();
    const newNote: Note = { id: length + 1, text: "test" };
    setNotesAndPositions([...notesAndPositions, { note: newNote, position }]);
  };

  // const handleMouseDown = (e: React.MouseEvent) => {
  //   console.log(e);
  // };

  useEffect(() => {
    //localstorage
    const getFromLocalStorage = localStorage.getItem("notesandpositions");
    const savedNotes = getFromLocalStorage
      ? JSON.parse(localStorage.getItem("notesandpositions")!.toString())
      : notesAndPositions;
    console.log("savedNotes", savedNotes);

    const updatedNotesAndPositions: {
      note: Note;
      position: { x: number; y: number };
    }[] = [];
    savedNotes.map(
      (item: { note: Note; position: { x: number; y: number } }) =>
        updatedNotesAndPositions.push(item)
      // console.log(item)
    );
    console.log("updatedNotesAndPositions", updatedNotesAndPositions);

    setNotesAndPositions([...updatedNotesAndPositions]);

    //setNotes(updatedNotes);
    localStorage.setItem(
      "notesandpositions",
      JSON.stringify(notesAndPositions)
    );
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "notesandpositions",
      JSON.stringify(notesAndPositions)
    );
  }, [notesAndPositions]);
  return (
    <div className="drag-canvas">
      <button
        className="btn"
        onClick={() => addNoteAndPosition(notesAndPositions.length)}
      >
        Yeni not
      </button>
      {notesAndPositions.map(
        (item: { note: Note; position: { x: number; y: number } }) => (
          <NoteComponent
            key={item.note.id}
            item={item.note}
            // onMouseDown={handleMouseDown(e)}
            // ref={
            //   noteRefs.current[item.note.id]
            //   ?noteRefs.current[item.note.id]:
            //   (noteRefs.current[item.note.id]=createRef())
            //   }
            initialPosition={{
              x: item.position.x,
              y: item.position.y,
            }}
          />
        )
      )}
    </div>
  );
};

export default DragNotes;
