import React from "react";
import useFirestore from "./hooks/useFirestore";
import Title from "./comps/Title";
import GalleryTabs from "./comps/GalleryTabs";

function App() {
  const { docs } = useFirestore("galleries", "asc");

  return (
    <div className="App">
      <Title />
      <GalleryTabs docs={docs} />
    </div>
  );
}

export default App;
