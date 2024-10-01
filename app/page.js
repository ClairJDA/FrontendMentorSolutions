"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import JobItem from "@/components/job-item";
import FilterArea from "@/components/filter-area";

import data from "../data.json";

export default function Home() {
  const [filter, setFilter] = useState([]);

  function addFilter(item) {
    if (!filter.includes(item)) {
      setFilter([...filter, item]);
    }
  }

  function removeFilter(item) {
    setFilter(filter.filter((filterItem) => filterItem !== item));
  }

  function filterMatchAll(jobList, filters) {
    let filterecArr = jobList.filter((job) => {
      const tags = [job.level, job.role].concat(job.languages, job.tools);
      return filters.every((filter) => tags.includes(filter));
    });
    return filterecArr;
  }

  return (
    <div
      className="w-full min-h-dvh pb-4"
      style={{ backgroundColor: "var(--light-grayish-cyan-Filter-tablets)" }}
    >
      <header style={{ backgroundColor: "var(--desaturated-dark-cyan)" }}>
        <picture className="w-full">
          <source
            media="(min-width: 640px)"
            srcSet="./images/bg-header-desktop.svg"
            className="w-full"
          />
          <Image
            src="./images/bg-header-mobile.svg"
            alt="bg-header-mobile"
            width={375}
            height={200}
            priority
            className="w-full"
          />
        </picture>
      </header>
      <main className="w-[85%] mx-auto  ">
        {filter.length > 0 && (
          <FilterArea filter={filter} removeFilter={removeFilter} />
        )}

        {filterMatchAll(data, filter)?.map((job) => (
          <JobItem
            key={job.id}
            addFilter={addFilter}
            setFilter={setFilter}
            {...job}
          />
        ))}
      </main>
    </div>
  );
}
