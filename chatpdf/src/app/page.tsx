import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import FileUpload from "@/components/FileUpload";
import ChatPage from "@/components/ChatPage";

export default async function Home() {
  return (
    <ChatPage/>
  );
}