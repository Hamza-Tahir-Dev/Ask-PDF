
import React from "react";
import ChatSideBar from "./ChatSideBar";
import PDFViewer from "./PDFViewer"
import ChatComponent from "./ChatComponent";


type Props = {}

const ChatPage = (props : Props) => {
  //   const currentchat =       
    return (
      <div className="w-screen min-h-screen bg-gray-100">
         <div className="flex w-full max-h-screen ">
           
           <div className="flex-[1] max-w-xs">
              <ChatSideBar/>
           </div>
        
           <div className="max-h-screen p-4 oveflow-scroll flex-[5]">
              <PDFViewer/>
           </div>
           
           <div className="flex-[3] border-l-4 border-l-slate-200">
              <ChatComponent/>
           </div>
         </div>
      </div>         
    );
}
export default ChatPage