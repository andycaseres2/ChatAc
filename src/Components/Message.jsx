import React from "react";

export const Message = ({ owner }) => {
  return (
    <div className={`flex mb-4 gap-4 ${owner && "flex flex-row-reverse"}`}>
      <div className="flex flex-col">
        <img
          className="w-12 h-12 object-cover rounded-full aspect-square "
          src="https://i.blogs.es/66b81e/bleach-thousand-year-war/1366_2000.jpeg"
          alt=""
        />
        <span className="text-sm text-gray-400 font-semibold">just now</span>
      </div>
      <div
        className={`max-w-[80%] flex flex-col gap-4 ${owner && "items-end"}`}
      >
        <p
          className={`${
            owner
              ? "bg-secondary text-white px-4 py-3 rounded-l-lg rounded-b-lg"
              : "bg-white px-4 py-3 rounded-r-lg rounded-b-lg"
          } max-w-max`}
        >
          Hello, how are you?
        </p>
        <img
          className="object-cover w-1/2 aspect-square "
          src="https://i.blogs.es/66b81e/bleach-thousand-year-war/1366_2000.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};
