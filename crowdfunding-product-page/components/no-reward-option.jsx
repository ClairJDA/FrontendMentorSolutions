import React from "react";

function NoRewardOption({ name, detail, showModal, setShowCommpletedModal }) {
  return (
    <div className=" mt-4 p-4 m-auto rounded-lg border border-slate-500 clickable hover:border-teal-500 ">
      <h3 className="text-md font-bold">{name}</h3>

      <br />
      <p style={{ color: "var(--dark-gray)", fontSize: "0.9rem" }}>{detail}</p>
      <br />

      <div className="flex justify-end">
        <button
          className="text-white font-bold p-3 px-6 rounded-full bg-teal-500 cursor-pointer hover:bg-teal-700"
          style={{
            fontWeight: "var(--font-medium)",
            fontSize: "0.9rem",
          }}
          onClick={() => {showModal(false); setShowCommpletedModal(true);}}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default NoRewardOption;
