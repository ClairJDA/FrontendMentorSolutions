import React from "react";

import checkIcon from "@/public/images/icon-check.svg";
import Image from "next/image";

function ModalCompleted({setShowCommpletedModal}) {
  return (
       
    <div className="w-11/12 md:w-1/2 p-8 mt-40 m-auto text-center rounded-lg bg-white">
      <Image className="mx-auto" src={checkIcon} width="auto" height="auto" alt="check icon" />
      <h3 className="font-bold text-xl">Thanks for your support!</h3>
      <p className="mt-8 mb-8" style={{ color: "var(--dark-gray)", fontSize: "0.9rem" }} >
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button
        className="p-4 px-8 rounded-full text-white"
        style={{
          backgroundColor: "var(--moderate-cyan)",
          fontWeight: "var(--font-medium)",
          fontSize: "0.9rem",
        }}
        onClick={()=>{setShowCommpletedModal(false);}}
      >
        Got it!
      </button>
    </div>
  );
}

export default ModalCompleted;
