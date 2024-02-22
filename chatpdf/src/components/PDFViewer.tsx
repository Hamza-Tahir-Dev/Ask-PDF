import React from "react";
import PDFViewer from 'pdf-viewer-reactjs';

type Props = { file: any };

const PDFView = ({ file }: Props) => {
  return (
    <PDFViewer document={{ url: file }} />
  );
};

export default PDFView;
