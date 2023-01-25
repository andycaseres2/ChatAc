import React, { useState } from "react";
import { Chat } from "../Components/Chat";
import { Sidebar } from "../Components/Sidebar";

export const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen w-full bg-gray-900">
      <div className="flex rounded-lg w-[85%] h-[80%]">
        <Sidebar setShowMenu={setShowMenu} showMenu={showMenu} />
        <Chat setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </div>
  );
};
