import React from "react";
import useFirestore from "../hooks/useFirestore";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const GalleryTabs = ({ setSelectedImg }) => {
  const { docs } = useFirestore("galleries", "asc");

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(docs);
  };

  return (
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
  );
};

export default GalleryTabs;
