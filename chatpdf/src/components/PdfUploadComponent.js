import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FilePdf } from 'lucide-react';

const PdfUploadComponent = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    accept: {"application/pdf": [".pdf"]},
    maxFiles:1,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles)
    },
     });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the PDF file here...</p>
      ) : (
        <p>Drag 'n' drop a PDF file here, or click to select one</p>
      )}
      <FilePdf size={64} />
    </div>
  );
};

export default PdfUploadComponent;
