import Image from "next/image";
import React from "react";

function ArticleItem({ id, author, title, imgUrl, content }) {
  return (
    <div
      key={id}
      className="w-full md:w-1/2 md:p-2 lg:w-1/4 lg:p-4 mb-6 overflow-clip bg-white"
    >
      <Image
        src={imgUrl}
        width={300}
        height={300}
        alt="confetti"
        className="h-[170px] w-full object-cover rounded-t-md"
        priority
      />
      <div className="p-6">
        <p className="text-xs">{`By ${author}`}</p>
        <h3 className="text-xl text-heading hover:text-teal-400 my-4">{title}</h3>
        <p className="text-sm text-paragraph">{content}</p>
      </div>
    </div>
  );
}

export default ArticleItem;
