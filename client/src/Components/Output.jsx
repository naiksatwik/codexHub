import React from 'react'

export const Output = ({output}) => {
  return (
      <div
      className="text-xl text-blue-600 font-bold h-full w-full p-3 overflow-scroll hide-scrollbar"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <p>
       {output}
      </p>
    </div>
  )
}
