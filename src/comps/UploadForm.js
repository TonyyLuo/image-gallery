import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = ({ galleryId }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const imageTypes = ["image/png", "image/jpeg"];

  const changeHandler = (event) => {
    let selected = event.target.files[0];

    //if we have a file and it is an image type
    if (selected && imageTypes.includes(selected.type)) {
      setFile(selected); //assign selected to file variable
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <form className="uploadForm">
      <label className="uploadLabel">
        <input className="uploadInput" type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error"> {error} </div>}
        {file && <div>{file.name}</div>}
        {file && (
          <ProgressBar file={file} setFile={setFile} galleryId={galleryId} />
        )}
      </div>
    </form>
  );
};

export default UploadForm;
