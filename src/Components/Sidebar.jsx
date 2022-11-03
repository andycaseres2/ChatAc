import React from 'react'
import { Navbar } from './Navbar'
import { Search } from './Search'
import { Chats } from './Chats'

export const Sidebar = ({ setShowMenu, showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? 'flex' : 'hidden md:flex'
      } bg-[#2c2f33] flex-col w-full md:w-[63%] lg:w-1/2 rounded-t-lg lg:flex`}
    >
      <Navbar setShowMenu={setShowMenu} showMenu={showMenu} />
      <Search />
      <Chats />
      <Chats />
      <Chats />
      <Chats />
    </div>
  )
}
