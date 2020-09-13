import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { projectFirestore, timestamp } from "../firebase/config";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [galleryName, setGalleryName] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleNewGallery = () => {
    if (galleryName != "") {
      const collectionRef = projectFirestore.collection("galleries");
      const createdAt = timestamp();
      const name = galleryName;
      collectionRef.add({ name, createdAt });
      setErrorText("");
      setOpen(false);
    } else {
      setErrorText("Please enter a gallery name");
    }
  };

  const handleClose = () => {
    setErrorText("");
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add New Gallery
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Gallery</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a name for the new gallery and upload the first image.
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            label="Gallery Name"
            onChange={(e) => setGalleryName(e.target.value)}
            fullWidth
          />
          <DialogContentText id="errorText">{errorText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleNewGallery} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
