import Image from "next/image";

import bookedIcon from "@/public/images/icon-bookmark.svg";
import masterLogo from "@/public/images/logo-mastercraft.svg";

function ProjectIntro({ showModal, setShowModal }) {
  return (
    <div className="relative bottom-10 w-11/12 px-8 py-12 m-auto rounded-lg text-center bg-white">
      <Image
        className="absolute -top-5 left-1/2 transform -translate-x-1/2"
        src={masterLogo}
        width="auto"
        height="auto"
        alt="mastercraft logo"
      />
      <h1 style={{ fontWeight: "var(--font-bold)", fontSize: "1.3rem" }}>
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p
        className="py-4"
        style={{ color: "var(--dark-gray)", fontSize: "0.9rem" }}
      >
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex justify-around" >
        <a
          className="p-4 px-8 rounded-full bg-teal-500 text-white hover:bg-teal-700 cursor-pointer"
          style={{
            fontWeight: "var(--font-medium)",
            fontSize: "0.9rem",
          }}
          onClick={() => setShowModal(!showModal)}
        >
          Back this project
        </a>
        <a>
          <div className="relative">
            <Image
              className="md:inline-block md:absolute -left-6"
              src={bookedIcon}
              width="auto"
              height="auto"
              alt="bookmark icon"
            />
            <p
              className="hidden md:inline-block px-6 py-4 pl-10 rounded-full bg-slate-100 font-bold "
              style={{ color: "var(--dark-gray)" }}
            >
              Bookmark
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProjectIntro;
