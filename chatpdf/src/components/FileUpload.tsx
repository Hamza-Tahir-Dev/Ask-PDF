"use client"
import React , {useState} from 'react';
import { useDropzone } from 'react-dropzone';
import PDFView from './PDFViewer';


function FileUpload(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };
  const files = acceptedFiles.map(file => (
    <li key={file.path} className="list-none">
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="mt-[-10px] p-2 bg-white rounded-xl">
      <div {...getRootProps({ className: 'dropzone border-dashed border-2 p-4 sm:w-1/5 md:w-1/6 lg:w-1/20' })}>
      <input type="file" onChange={handleFileChange} />
       {file &&  <PDFView file={file}/> }
        {/* <p className="text-gray-600">Drag 'n' drop some files here, or click to select files</p> */}
      </div>
      <aside className="mt-4">
        <h4 className="text-lg font-bold">Files</h4>
        <ul className="mt-2">{files}</ul>
      </aside>
    </section>
  );
}

export default FileUpload;
