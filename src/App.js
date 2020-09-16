import React from "react";
import useFirestore from "./hooks/useFirestore";
import Title from "./comps/Title";
import Gallery from "./comps/Gallery";
import LoginButton from "./comps/LoginButton";

function App() {
  const { docs } = useFirestore("galleries", "asc");

  return (
    <div className="App">
      <Title />
      <LoginButton />
      {docs.length > 0 && <Gallery docs={docs} />}
    </div>
  );
}

export default App;
