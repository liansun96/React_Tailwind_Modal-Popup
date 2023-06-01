import React, { useState } from "react";

const Modal = ({ toggle }) => {
  return (
    <div onClick={toggle} className="fixed inset-0 bg-black bg-opacity-25  backdrop-blur-sm flex justify-center items-center">
      <div className="w-[500px] h-40 rounded-lg bg-white relative p-4 ">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          ratione inventore hic rem incidunt? Molestiae sapiente odio sunt
          tenetur quis.
        </p>
        <button
          onClick={toggle}
          className="w-28 absolute right-3 bottom-3 h-8text-center px-3 py-1 rounded bg-red-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
