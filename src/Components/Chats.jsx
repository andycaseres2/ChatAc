import React from 'react'

export const Chats = () => {
  return (
    <div>
      <div className="flex items-center gap-2 px-3 border-b border-gray-600 py-2 hover:bg-[#5264a7] cursor-pointer">
        <img
          className="w-14 h-14 rounded-full aspect-square"
          src="https://areajugones.sport.es/wp-content/uploads/2018/12/70f1GDA9hnc1TeypiSAbOGM5RpW.jpg"
          alt=""
        />
        <div>
          <span className="text-white text-lg font-bold flex">Andy</span>
          <p className="text-gray-400 text-sm flex">Hello</p>
        </div>
      </div>
    </div>
  )
}
