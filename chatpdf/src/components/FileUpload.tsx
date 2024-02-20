'use client'
import { Inbox } from "lucide-react";
import React from "react";
import { useDropzone } from "react-dropzone";

type Props = {}

const FileUpload = (props : Props) => {
    const {getRootProps, getInputProps} = useDropzone()
    return (
        <div className="p-2 bg-white rounded-xl">
            <div {...getRootProps(
                {
                    className: 'border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col', 
                }
            )}>
                <input {...getInputProps()}/>
                <>
                <Inbox className="w-10 h-10 " />
                </>
            </div>

        </div>
    );
}

export default FileUpload