import React from "react";
import { CiLogout } from "react-icons/ci";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export const Navbar = ({ setShowMenu, showMenu }) => {
  return (
    <div className="flex justify-center w-full px-0 lg:px-3 py-4 bg-primary text-white">
      <div className="w-full px-2 flex gap-2 justify-between items-center">
        <div className="flex items-center gap-2">
          <MdOutlineKeyboardArrowLeft
            onClick={() => setShowMenu(!showMenu)}
            size={30}
            className="cursor-pointer md:hidden"
          />
          <img
            className="w-9 h-9 object-cover rounded-full bg-white"
            src="https://areajugones.sport.es/wp-content/uploads/2018/12/70f1GDA9hnc1TeypiSAbOGM5RpW.jpg"
            alt=""
          />
        </div>
        <div className="flex gap-4 w-9/12 justify-around">
          <span className="text-lg font-semibold">Andy apellido</span>
          <button className="bg-third hover:bg-secondary rounded  hove text-white px-2 py-1 text-xs">
            <CiLogout className="fill-white" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
