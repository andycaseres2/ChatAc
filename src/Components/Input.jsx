import React from 'react'
import { BiImageAdd } from 'react-icons/bi'
import { MdAttachFile } from 'react-icons/md'

export const Input = () => {
  return (
    <div className="flex w-full">
      <input
        className="px-2 py-4 w-full focus:outline-none bg-[#2c2f33] text-white"
        type="text"
        placeholder="Write Message"
      />
      <div className="flex items-center px-2 gap-4 bg-[#2c2f33]">
        <input className="hidden" type="file" id={'file'} />
        <label htmlFor="file">
          <MdAttachFile
            size={25}
            className="cursor-pointer fill-[#7289da] hover:fill-[#4d5c91]"
          />
        </label>
        <input className="hidden" type="file" id={'file'} />
        <label htmlFor="file">
          <BiImageAdd
            size={25}
            className="cursor-pointer fill-[#7289da] hover:fill-[#4d5c91]"
          />
        </label>
        <button className="py-1 rounded px-4 bg-[#7289da] hover:bg-[#4d5c91] text-white font-bold">
          Send
        </button>
      </div>
    </div>
  )
}
