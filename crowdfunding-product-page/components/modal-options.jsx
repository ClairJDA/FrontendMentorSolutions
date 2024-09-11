import React from "react";
import Image from "next/image.js";

import NoRewardOption from "./no-reward-option.jsx";
import OptionRadioItem from "./option-radio-item.jsx";
import closeIcon from "@/public/images/icon-close-modal.svg";
import options from "../mockup-data.js";

function ModalOptions({ setShowModal, setShowCommpletedModal }) {
  return (
    <div>
      <div className=" w-11/12 mt-40 p-4 m-auto rounded-lg bg-white">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold">Back this project</h3>
          <Image
            onClick={() => setShowModal(false)}
            className="object-contain"
            src={closeIcon}
            width="auto"
            height="auto"
            alt="close icon"
          />
        </div>
        <br />
        <p style={{ color: "var(--dark-gray)", fontSize: "0.9rem" }}>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        <NoRewardOption
          name={"pledge with no reward"}
          detail={
            "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
          }
          showModal={setShowModal}
          setShowCommpletedModal={setShowCommpletedModal}
        />

        {options.map((item) => (
          <OptionRadioItem
            key={item.id}
            name={item.name}
            pledge={item.pledge}
            detail={item.detail}
            amount={item.amount}
            showModal={setShowModal}
            setShowCommpletedModal={setShowCommpletedModal}
            disabled={(item.amount === 0) ? true : false }
          />
        ))}
      </div>
    </div>
  );
}

export default ModalOptions;
