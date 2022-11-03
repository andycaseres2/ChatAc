import React from 'react'
import { BiImageAdd } from 'react-icons/bi'

export const Register = () => {
  return (
    <div className="bg-[#a7bcff] h-screen flex items-center justify-center">
      <div className="bg-white py-8 px-14 rounded-md flex flex-col gap-2 items-center w-[500px]">
        <span className="text-3xl font-bold text-gray-600">ChatAc</span>
        <span className="text-md text-gray-500">Register</span>
        <form className="flex flex-col gap-4 w-full">
          <input
            className="p-4 border-b border-gray-400 focus:outline-none"
            type="text"
            placeholder="UserName"
          />
          <input
            className="p-4 border-b border-gray-400 focus:outline-none"
            type="email"
            placeholder="Email"
          />
          <input
            className="p-4 border-b border-gray-400 focus:outline-none"
            type="password"
            placeholder="Password"
          />
          <input className="my-4 hidden" type="file" id="file" />
          <label htmlFor="file" className="flex gap-2 items-center">
            <BiImageAdd size={35} className="fill-purple-500 cursor-pointer" />
            <span className="text-gray-400 text-sm">Add an Avatar</span>
          </label>
          <button className="bg-purple-400 p-2 text-white hover:bg-purple-600 font-bold text-md">
            Sing up
          </button>
        </form>
        <p className="text-gray-500">
          You do have an account? <span className="text-blue-600">Login</span>
        </p>
      </div>
    </div>
  )
}
