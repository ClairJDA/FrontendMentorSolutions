"use client";
import React, { useState } from "react";

function OptionRadioItem({name, pledge, detail, amount, showModal, setShowCommpletedModal, disabled,}) {
  const [pledgeInput, setPledgeInput] = useState(`$${pledge}`);
  console.log(pledgeInput);

  function checkMinPledge(num) {
    return (num>=pledge)? true: false;
  }

  let baseStyle = "relative mt-4 p-4 m-auto rounded-lg border border-slate-500";
  let normalStyle = "clickable hover:border-teal-500";
  let disabledStyle = "clickable hover:border-slate-500";

  return (
    <div className={`${baseStyle} ${disabled ? disabledStyle : normalStyle}`}>
      {/* Disabled Mode */}
      {disabled && (
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-white/50 "></div>
      )}

      <div className="md:flex justify-between items-center">
        {/* Name and pledge amount */}
        <div className="flex flex-col md:w-1/2 md:flex-row justify-between">
          <h3 className="text-md font-bold">{name}</h3>
          <h3
            className="text-sm font-bold"
            style={{ color: "var(--moderate-cyan)" }}
          >
            Pledge ${pledge} or more
          </h3>
        </div>
        {/* Left amount */}
        <p className="hidden self-center md:inline  ">
          <span className="text-3xl font-bold "> {amount}</span>{" "}
          <span style={{ color: "var(--dark-gray)", fontSize: "0.9rem" }}>
            left
          </span>
        </p>
      </div>

      <br />
      <p style={{ color: "var(--dark-gray)", fontSize: "0.9rem" }}>{detail}</p>
      <br />
      <p className="self-center md:hidden">
        <span className="text-3xl font-bold "> {amount}</span>{" "}
        <span style={{ color: "var(--dark-gray)", fontSize: "0.9rem" }}>
          left
        </span>
      </p>

      {!disabled && <hr className="mt-4 mb-4" />}

      {/* Enter your pledge */}
      {!disabled && (
        <div className="md:flex items-center justify-between align-middle">
          <p
            className="mt-4 text-center"
            style={{ color: "var(--dark-gray)", fontSize: "0.9rem" }}
          >
            Enter your pledge
          </p>
          <div className="flex justify-between mt-4">
            <div>
              <input
                className="w-24 p-3 px-6 rounded-full border border-slate-500 font-bold text-slate-500"
                value= {pledgeInput}
                onChange={(e) => {
                    const newValue = e.target.value.slice(1);
                    setPledgeInput(`$${newValue}`);
                }}
              />
            </div>

            <button
              className="text-white font-bold p-3 px-6 rounded-full md:ml-4 bg-teal-500 hover:bg-teal-700 cursor-pointer"
              style={{
                fontWeight: "var(--font-medium)",
                fontSize: "0.9rem",
              }}
              onClick={() => {
                if(checkMinPledge(pledgeInput.slice(1))) {
                  showModal(false);
                  setShowCommpletedModal(true);
                }else{
                  setPledgeInput(`$${pledge}`);
                }
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OptionRadioItem;
