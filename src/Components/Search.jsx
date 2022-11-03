import React from 'react'

export const Search = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <input
          className="px-2 py-3 w-full focus:outline-none bg-transparent text-white border-b border-gray-600"
          type="text"
          placeholder="Find a user"
        />
      </div>
      {/* <div className="flex items-center md:justify-center lg:justify-start gap-2 px-3 border-b border-gray-600 py-2 hover:bg-[#5264a7] cursor-pointer">
        <img
          className="w-14 h-14 rounded-full"
          src="https://areajugones.sport.es/wp-content/uploads/2018/12/70f1GDA9hnc1TeypiSAbOGM5RpW.jpg"
          alt=""
        />
        <div>
          <span className="text-white text-lg font-bold flex md:hidden lg:flex">
            Andy
          </span>
        </div>
      </div> */}
    </div>
  )
}
