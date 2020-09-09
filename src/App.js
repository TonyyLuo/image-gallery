import React from "react";
import useFirestore from "./hooks/useFirestore";
import Title from "./comps/Title";
import Gallery from "./comps/Gallery";

function App() {
  const { docs } = useFirestore("galleries", "asc");

  return (
    <div className="App">
      <Title />
      {docs.length > 0 && <Gallery docs={docs} />}
    </div>
  );
}

export default App;
