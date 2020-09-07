import React from 'react'
import App from '../App'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = () => {
    const { docs } = useFirestore('gallery1')
    
    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.url} alt="uploaded pic" />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;