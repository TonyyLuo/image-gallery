import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { projectAuth } from "../firebase/config";

export default function LoginButton() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleNewGallery = () => {
    // if (galleryName !== "") {
    //   const collectionRef = projectFirestore.collection("galleries");
    //   const createdAt = timestamp();
    //   const name = galleryName;
    //   collectionRef.add({ name, createdAt });
    //   setErrorText("");
    //   setOpen(false);
    // } else {
    //   setErrorText("Please enter a gallery name");
    // }
    projectAuth.signInWithEmailAndPassword(email, password).then((cred) => {
      console.log(cred.user);
      setOpen(false);
    });
  };

  const handleClose = () => {
    setErrorText("");
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            required
            autoFocus
            margin="dense"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
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
