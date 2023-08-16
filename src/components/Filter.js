import React from "react";

const Filter = (props) => {
  const filterEl = props?.filterItems.map((item, idx) => (
    <div
      key={idx}
      className="shadow-md flex rounded-md overflow-hidden text-primary-dd-cyan bg-neutral-lg-cyan-ft pl-2 gap-2 items-center justify-center"
    >
      <p className="font-bold">{item}</p>
      <button
        onClick={props.handleRemove}
        className=" py-[3px] px-2 h-full  text-white font-bold bg-primary-dd-cyan hover:bg-neutral-vdg-cyan flex items-center justify-center transition-colors duration-150 ease-in"
        id="removeBtn"
      >
        X
      </button>
    </div>
  ));
  return (
    <div className="shadow-lg -mt-[38px] relative  w-[90%] rounded-md bg-white flex flex-wrap items-center gap-3 md:gap-5  pl-5 py-6 md:py-5 mb-3 pr-[5rem]">
      {filterEl}
      <button
        onClick={props.handleClear}
        className="transition-colors duration-150 ease-in-out absolute right-4  top-1/2 -translate-y-1/2 outline-0 border-0 font-bold text-neutral-dg-cyan custom-hover-effect hover:text-primary-dd-cyan"
      >
        Clear
      </button>
    </div>
  );
};

export default Filter;
