'use client'

import React from "react";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";

type Props = {}

const ChatSideBar = (props : Props) => {
          
    return (
        <div className="w-full max-h-screen overflow-scroll soff p-4 text-gray-200 bg-gray-900">
            <Button>
                <PlusCircle className="mr-2 w-4 h-4" />
                New Chat
            </Button>
        </div>    
    );
}
export default ChatSideBar