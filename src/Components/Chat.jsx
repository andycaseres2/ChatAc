import React from "react";
import { BsFillCameraVideoFill, BsThreeDots } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Messages } from "./Messages";
import { Input } from "./Input";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export const Chat = ({ setShowMenu, showMenu }) => {
  return (
    <div className={`${!showMenu ? "flex" : "hidden md:flex"} flex-col w-full`}>
      <div className="flex justify-between w-full px-3 py-5 bg-secondary  text-white">
        <div className="flex items-center gap-4">
          {!showMenu && (
            <MdOutlineKeyboardArrowLeft
              onClick={() => setShowMenu(!showMenu)}
              size={30}
              className="cursor-pointer md:hidden"
            />
          )}
          <span className="text-lg font-bold">Andy</span>
        </div>
        <div className="flex gap-4 items-center justify-center px-4">
          <BsFillCameraVideoFill
            size={20}
            className="cursor-pointer hover:fill-third"
          />
          <AiOutlineUserAdd
            size={20}
            className="cursor-pointer hover:fill-third"
          />
          <BsThreeDots size={20} className="cursor-pointer hover:fill-third" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
