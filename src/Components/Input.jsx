import React from "react";
import { BiImageAdd } from "react-icons/bi";
import { MdAttachFile } from "react-icons/md";

export const Input = () => {
  return (
    <div className="flex w-full">
      <input
        className="px-2 py-4 w-full focus:outline-none bg-secondary placeholder:text-white"
        type="text"
        placeholder="Write Message"
      />
      <div className="flex items-center px-2 gap-4 bg-secondary">
        <input className="hidden" type="file" id={"file"} />
        <label htmlFor="file">
          <MdAttachFile
            size={25}
            className="cursor-pointer fill-white hover:fill-third"
          />
        </label>
        <input className="hidden" type="file" id={"file"} />
        <label htmlFor="file">
          <BiImageAdd
            size={25}
            className="cursor-pointer fill-white hover:fill-third"
          />
        </label>
        <button className="py-1 rounded px-4 bg-third hover:bg-primary text-white font-bold">
          Send
        </button>
      </div>
    </div>
  );
};
