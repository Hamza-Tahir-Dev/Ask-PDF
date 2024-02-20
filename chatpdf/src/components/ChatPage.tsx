'use client'

import React from "react";

type Props = {}

const ChatPage = (props : Props) => {
          
    return (
      <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
         <div className="flex w-full max-h-screen ">
           {/* chat sidebar */}
           <div className="flex-[1] max-w-xs"></div>
           {/* pdf viewer */}
           <div></div>
           <div></div>
         </div>
      </div>         
    );
}
export default ChatPage