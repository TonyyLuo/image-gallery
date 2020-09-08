import React, { useState } from "react";
import useFirestore from "./hooks/useFirestore";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import GalleryTabs from "./comps/GalleryTabs";

function App() {
  const { docs } = useFirestore("galleries", "asc");

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <GalleryTabs docs={docs} />
    </div>
  );
}

export default App;
