import React, { useState } from "react";
import JobCard from "./JobCard";
import Filter from "./Filter";

import data from "../data";

const JobListing = () => {
  const [filterItems, setFilterItems] = useState([]);

  const addToFilter = (e) => {
    const value = e.target.innerText;
    //prevent adding element more than once
    if (filterItems.some((item) => item === value)) return;

    //add to filter items
    setFilterItems((prev) => [...prev, value]);
  };

  const removeFilter = (e) => {
    //extracting value with help of element id and some js
    const value = document.getElementById(e.target.id).previousElementSibling
      .textContent;
    setFilterItems((prev) => prev.filter((item) => item !== value));
  };

  //clear functionality in filter
  const removeAllFilter = () => {
    setFilterItems([]);
  };

  // filter functionality
  let mutatedData;
  if (filterItems.length > 0) {
    mutatedData = data.filter((item, idx) => {
      //build a new skill array consisting of languages, roles, tools(if any) and level
      const newSkillsArray = [
        item.role,
        item.level,
        ...item.languages,
        ...item.tools,
      ];

      return filterItems.every((item) => newSkillsArray.includes(item));
    });
  } else {
    mutatedData = data;
  }

  const jobsEl = mutatedData.map((item, idx) => (
    <JobCard
      key={idx}
      {...item}
      addToFilter={addToFilter}
      filterItems={filterItems}
    />
  ));
  return (
    <div className="relative flex flex-col items-center justify-center gap-[40px]">
      {filterItems.length > 0 && (
        <Filter
          handleRemove={removeFilter}
          handleClear={removeAllFilter}
          filterItems={filterItems}
        />
      )}
      {filterItems.length <= 0 && <div className="w-full h-4 mb-4"></div>}
      {jobsEl}
    </div>
  );
};

export default JobListing;
