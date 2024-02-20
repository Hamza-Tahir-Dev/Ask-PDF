'use client'

import React from "react";

type Props = {}

const ChatPage = (props : Props) => {
          
    return (
      <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
         <div className="flex w-full max-h-screen ">
           {/* chat sidebar */}
           <div className="flex-[1] max-w-xs">

           </div>
           {/* pdf viewer */}
           <div className="max-h-screen p-4 oveflow-scroll flex-[5]">

           </div>
           {/* chat component */}
           <div className="flex-[3] border-l-4 border-l-slate-200">

           </div>
         </div>
      </div>         
    );
}
export default ChatPage