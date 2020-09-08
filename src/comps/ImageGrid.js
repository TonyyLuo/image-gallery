import React from 'react'
import App from '../App'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'
import { projectFirestore , projectStorage } from '../firebase/config'

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('gallery1')


    const deleteImage = (event) => {
        if (event.target.classList.contains('delete-img')) {
            // let id = event.target.parentElement.getAttribute('data-key')
            // projectFirestore.collection('gallery1').doc(id).delete()
            
            console.log(event.target.parentElement.getAttribute('data-url'))
            let url = event.target.parentElement.getAttribute('data-url')
            let image = projectStorage.ref.child(url)
            image.delete()
        }
    }
    
    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id} data-key={doc.id} data-url={doc.url}
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={(event) => {
                        if (!event.target.classList.contains('delete-img')){
                            setSelectedImg(doc.url)
                        }
                    }}
                >
                    <motion.img src={doc.url} alt="uploaded pic" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                    <div className="delete-img" onClick={deleteImage}>Delete</div>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;