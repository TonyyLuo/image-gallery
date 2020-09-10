import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import AddGalleryForm from "./AddGalleryForm";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Gallery = ({ docs }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);

  const [galleryId, setGalleryId] = useState(docs[0].name);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setGalleryId(docs[newValue].name);
  };

  return (
    <div>
      <h2 id="gallerytitle">{galleryId}</h2>

      <AddGalleryForm />

      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {docs && docs.map((doc) => <Tab label={doc.name} />)}
        </Tabs>
      </Paper>

      <UploadForm galleryId={galleryId} />

      <ImageGrid setSelectedImg={setSelectedImg} galleryId={galleryId} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Gallery;
