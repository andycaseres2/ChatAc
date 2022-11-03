import React from 'react'

export const Login = () => {
  return (
    <div className="bg-[#a7bcff] h-screen flex items-center justify-center">
      <div className="bg-white py-8 px-14 rounded-md flex flex-col gap-2 items-center w-[500px]">
        <span className="text-3xl font-bold text-gray-600">ChatAc</span>
        <span className="text-md text-gray-500">Login</span>
        <form className="flex flex-col gap-4 w-full">
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
          <button className="bg-purple-400 p-2 text-white hover:bg-purple-600 font-bold text-md">
            Sing in
          </button>
        </form>
        <p className="text-gray-500">
          You don't have an account?{' '}
          <span className="text-blue-600">Register</span>
        </p>
      </div>
    </div>
  )
}
