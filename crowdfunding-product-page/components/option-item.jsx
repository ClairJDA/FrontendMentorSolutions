import React from "react";

function OptionItem({ name, pledge, detail, amount }) {
  return (
    <div className=" mt-4 p-4 m-auto rounded-lg border border-slate-500">
      <div className="flex flex-col md:flex-row md:justify-between">
        <h3 className="text-md font-bold">{name}</h3>
        <h3
          className="text-sm font-bold"
          style={{ color: "var(--moderate-cyan)" }}
        >
          Pledge ${pledge} or more
        </h3>
      </div>

      <br />
      <p style={{ color: "var(--dark-gray)", fontSize: "0.9rem" }}>{detail}</p>
      <br />
      <div className="md:flex justify-between">
        <p className="self-center">
          <span className="text-3xl font-bold"> {amount}</span>{" "}
          <span style={{ color: "var(--dark-gray)", fontSize: "0.9rem" }}>
            left
          </span>
        </p>
        <div className="mt-5 mb-4">
          <a
            className="p-3 px-6 rounded-full text-white bg-teal-500 cursor-pointer hover:bg-teal-700"
            style={{
              fontWeight: "var(--font-medium)",
              fontSize: "0.9rem",
            }}
          >
            Select Reward
          </a>
        </div>
      </div>
    </div>
  );
}

export default OptionItem;
