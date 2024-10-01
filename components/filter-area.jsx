import Image from "next/image";

function FilterArea({ filter, removeFilter }) {
  return (
    <div className=" bg-white p-4 rounded-md">
      {filter.map((item, index) => (
        <div key={index} className="inline-block m-1">
          <p className="tag-filter" >
            {item}
          </p>
          <Image
            src={"./images/icon-remove.svg"}
            alt="remove"
            width={14}
            height={14}
            className="tag-filter-remove"
            key={index} onClick={() => removeFilter(item)}
          />
        </div>
      ))}
    </div>
  );
}

export default FilterArea;
