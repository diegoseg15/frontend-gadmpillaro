import React from "react";

export function Card(props) {
  const { data } = props;
  return (
    <>
      <button class="block max-w-sm p-6 border rounded-lg shadow bg-primary border-gray-700 hover:bg-gray-700 transform hover:scale-110 duration-300">
        <div className="py-5">
          <img className="" src="" />
        </div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
          {data.title}
        </h5>
        <p class="font-normal text-gray-400">{data.text}</p>
      </button>
    </>
  );
}
