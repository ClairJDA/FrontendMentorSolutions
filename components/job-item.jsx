import Image from "next/image";
import React from "react";

function JobItem({
  id,
  company,
  logo,
  featured,
  new: newpost,
  position,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
  addFilter,
}) {
  
  return (
    <div key={id} className={`my-8 p-4 h-auto rounded-md bg-white ${featured && "featured-border"}`} >
      {/* layout */}
      <div className="relative -top-10 pb-1  md:top-0 md:flex justify-between items-center">
        {/* top and left section */}
        <div className="md:flex border-b-2 border-gray-100 pb-1 mb-4 md:border-none">
          <Image
            src={logo}
            alt="image"
            width={0}
            height={0}
            className="object-contain"
            style={{width: "60px", height: "auto"}}
          />
          <div className="md:ml-2">
            <div>
              <h2 className="inline-block m-1">{company}</h2>
              {newpost && <p className="label new-label ">New!</p>}
              {featured && <p className="label featured-label ">Featured</p>}
            </div>

            <p className="ml-1 md:m-1 md:p-1">{position}</p>
            <div>
              <p className="inline-block  p-1 text-gray-400">{postedAt}</p>
              <p className="inline-block  p-1 text-gray-400">{contract}</p>
              <p className="inline-block  p-1 text-gray-400">{location}</p>
            </div>
          </div>
        </div>

        {/*bottom section / right section */}
        <div>
          <p className="tag" onClick={() => addFilter(role)}>
            {role}
          </p>
          <p className="tag" onClick={() => addFilter(level)}>
            {level}
          </p>
          {languages.map((lang, index) => (
            <p className="tag" key={index} onClick={() => addFilter(lang)}>
              {lang}
            </p>
          ))}
          {tools.map((tool, index) => (
            <p className="tag" key={index} onClick={() => addFilter(tool)}>
              {tool}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobItem;
