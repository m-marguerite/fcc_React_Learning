import { MoodBoardItem } from "./MoodBoardItem";

export const MoodBoard = () => {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem
          color="#87CEEB"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="A peaceful path leading to new adventures"
        />
        <MoodBoardItem
          color="#7ec850"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Calm waves and relaxing seaside vibes"
        />
        <MoodBoardItem
          color="#ffb347"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Fresh green landscapes and natural energy"
        />
      </div>
    </div>
  );
};
