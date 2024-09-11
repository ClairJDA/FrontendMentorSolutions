"use client";
import { useState } from "react";

import Header from "@/components/header";
import Navbar from "@/components/navbar";
import OptionItem from "@/components/option-item";
import ProjectDetail from "@/components/project-detail";
import ProjectIntro from "@/components/project-intro";
import ProjectStats from "@/components/project-stats";
import ModalOptions from "@/components/modal-options.jsx";
import ModalCompleted from "@/components/modal-completed.jsx";

import options from "../mockup-data.js";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showCommpletedModal, setShowCommpletedModal] = useState(false);

  return (
    <div className="relative" style={{ backgroundColor: "var(--background)" }}>
      <Navbar />
      <Header />
      <main className="relative">
        <ProjectIntro showModal={showModal} setShowModal={setShowModal} />
        <ProjectStats />
        <div className="relative bottom-5 w-11/12 mt-4 px-8 py-6 m-auto rounded-lg bg-white">
          <ProjectDetail />
          {options.map((item) => (
            <OptionItem
              key={item.id}
              name={item.name}
              pledge={item.pledge}
              detail={item.detail}
              amount={item.amount}
            />
          ))}
        </div>
      </main>

      {/* Modal Options*/}
      {showModal && (
        <div className="w-full h-full absolute z-40 top-0 left-0 bg-gray-600/30">
          <ModalOptions setShowModal={setShowModal} setShowCommpletedModal={setShowCommpletedModal} />
        </div>
      )}

      {/* Modal Completed */}
      {showCommpletedModal && (
        <div className="w-full h-full absolute z-40 top-0 left-0 bg-gray-600/30">
          <ModalCompleted setShowCommpletedModal={setShowCommpletedModal} />
        </div>
      )}
    </div>
  );
}
