import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection, sortOrder) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", sortOrder)
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
        var source = snap.metadata.fromCache ? "local cache" : "server";
        console.log(source);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
