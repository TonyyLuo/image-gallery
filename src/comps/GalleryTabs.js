import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const GalleryTabs = ({ docs }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);

  const [galleryId, setGalleryId] = useState("Sketches");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(docs[newValue].name);
    setGalleryId(docs[newValue].name);
  };

  return (
    <div>
      <h2>{galleryId}</h2>

      <UploadForm galleryId={galleryId} />
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

      <ImageGrid setSelectedImg={setSelectedImg} galleryId={galleryId} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default GalleryTabs;
