"use client"
import React from 'react';
import { useDropzone } from 'react-dropzone';

function FileUpload(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path} className="list-none">
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container mx-auto p-6">
      <div {...getRootProps({ className: 'dropzone border-dashed border-2 p-4 sm:w-1/5 md:w-1/6 lg:w-1/20' })}>
        <input {...getInputProps()} />
        <p className="text-gray-600">Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside className="mt-4">
        <h4 className="text-lg font-bold">Files</h4>
        <ul className="mt-2">{files}</ul>
      </aside>
    </section>
  );
}

export default FileUpload;
