import React from "react";

export type Note = {
  id: number;
  text: string;
};

interface Props {
  item: Note;
  initialPosition: { x: number; y: number };
  // onMouseDown: void;
}

const NoteComponent = ({
  item,
  initialPosition,
}: // onMouseDown
Props) => {
  console.log();
  return (
    <div
      className="note"
      // onMouseDown={(e:React.MouseEvent) => onMouseDown}
      style={{
        position: "absolute",
        left: `${initialPosition.x}px`,
        top: `${initialPosition.y}px`,
      }}
    >
      <p> &#128204; {item.text}</p>
    </div>
  );
};

export default NoteComponent;
