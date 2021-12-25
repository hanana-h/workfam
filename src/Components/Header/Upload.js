import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
function Upload() {

    const [showImage, setShowImage] = useState('')
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        setShowImage(acceptedFiles[0].name)

    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })


    return (
        <div style={{display:'flex',justifyContent:'center',backgroundColor:'#FFFFF', margin:'10px',padding:10, border:'1px dashed'}}>
            <div {...getRootProps()} style={{backgroundColor:'#FFFFF'}}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p >DROP FILES HERE OR CLICK TO UPLOAD</p> :
                        <div><p>DROP FILES HERE OR CLICK TO UPLOAD</p>
                        <p>Drag Files and Folders to Upload or Click here to browse Image from your Computer</p>
                        <button style={{padding:5}}>Click to add image from your computer</button>
                        {showImage ?
                        <img src={showImage}/> : ''}
                        </div>
                }
            </div>
        </div>
    );
}

export default Upload;





