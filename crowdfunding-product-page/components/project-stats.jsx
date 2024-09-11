import React from "react";

function ProjectStats() {
  return (
    <div className="relative bottom-5 flex flex-col row-gap-8 w-11/12 px-8 py-6 m-auto rounded-lg text-center bg-white">
      <div className="flex flex-col md:flex-row md:justify-around">
        <div className="py-2">
          <h2 className="text-3xl font-bold">$89,914</h2>
          <p
            className="mt-2 mb-2"
            style={{ color: "var(--dark-gray)", fontSize: "0.9rem" }}
          >
            of $100,000 backed
          </p>
        </div>
        <hr
          className="m-auto md:hidden"
          style={{ color: "var(--dark-gray)", width: "30%" }}
        />
        <div className="md:py-2 md:px-16 md:border-l md:border-r " style={{ color: "var(--dark-gray)"}}>
          <h2 className="text-black text-3xl font-bold">5,007</h2>
          <p
            className="mt-2 mb-2"
            style={{ color: "var(--dark-gray)", fontSize: "0.9rem" }}
          >
            total backers
          </p>
        </div>
        <hr
          className="m-auto md:hidden"
          style={{ color: "var(--dark-gray)", width: "30%" }}
        />
        <div className="py-2">
          <h2 className="text-3xl font-bold">56</h2>
          <p
            className="mt-2 mb-2 "
            style={{ color: "var(--dark-gray)", fontSize: "0.9rem" }}
          >
            days left
          </p>
        </div>
      </div>

      <div className=" md:mt-8 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className=" h-2.5 rounded-full bg-teal-500"
          style={{  width: "80%" }}
        ></div>
      </div>
    </div>
  );
}

export default ProjectStats;
