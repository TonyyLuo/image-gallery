import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { projectFirestore, projectStorage } from "../firebase/config";

const ImageGrid = ({ setSelectedImg, galleryId }) => {
  const { docs } = useFirestore(galleryId, "desc");

  const deleteImage = (event) => {
    if (event.target.classList.contains("delete-img")) {
      let id = event.target.parentElement.getAttribute("data-key");
      projectFirestore.collection(galleryId).doc(id).delete();

      let delUrl = event.target.parentElement.getAttribute("data-url");
      let deleteRef = projectStorage.refFromURL(delUrl);

      deleteRef
        .delete()
        .then(function () {})
        .catch(function (error) {
          console.log("error deleting file");
        });
    }
  };

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            data-key={doc.id}
            data-url={doc.url}
            layout
            whileHover={{ opacity: 1 }}
            onClick={(event) => {
              if (!event.target.classList.contains("delete-img")) {
                setSelectedImg(doc.url);
              }
            }}
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <div className="delete-img" onClick={deleteImage}>
              Delete
            </div>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
