import React from "react";

type Props = { file: string };

const PDFViewer = ({ file }: Props) => {
  return (
    <iframe
      src={`https://docs.google.com/gview?url=${file}&embedded=true`}
      className="w-full h-full"
    ></iframe>
  );
};

export default PDFViewer;
