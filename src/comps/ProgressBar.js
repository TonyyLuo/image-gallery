import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file)
    
    //set file to null when done upload
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])

    return (
        <div className="progress-bar" style={{width: progress + '%'}}></div>
    )
}

export default ProgressBar