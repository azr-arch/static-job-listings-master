import React from "react";

const JobCard = (props) => {
  //build a new skill array consisting of languages, roles, tools(if any) and level
  const newSkillsArray = [
    props.role,
    props.level,
    ...props.languages,
    ...props?.tools,
  ];

  const skillsEl = newSkillsArray.map((item, idx) => (
    <li
      key={idx}
      className={`bg-neutral-lg-cyan-ft rounded-md px-[8px] md:px-[6px] py-[5px] md:py-[3px] ${
        props.filterItems.includes(item)
          ? "bg-primary-dd-cyan text-white"
          : " hover:bg-primary-dd-cyan hover:text-white"
      } transition:colors duration-150 ease-in-out shadow-lt `}
      onClick={(e) => {
        props.addToFilter(e);
      }}
      name={item}
    >
      {item}
    </li>
  ));
  return (
    <article
      className={` relative flex flex-col md:flex-row md:items-center items-start bg-white w-[90%]  py-8  px-5 gap-2 mb-2 shadow-lg ${
        props.featured
          ? "border-l-4  border-primary-dd-cyan"
          : "hover:border-l-4  hover:border-primary-dd-cyan"
      }  cursor-pointer transition-all duration-150 ease-in-out rounded-[5px]`}
    >
      <img
        src={props.logo}
        alt={props.company + " logo"}
        className="absolute md:static -top-[22.5px] w-[45px] md:h-full md:w-auto md:mr-4 h-[45px] center"
      />

      {/* NAME SECTION */}
      <div className="flex flex-col item-center md:flex-col">
        <div className="flex items-center mb-2 md:mb-1">
          <h2 className="text-primary-dd-cyan md:text-md">{props.company}</h2>
          {props.new && (
            <span className="text-[.9rem] leading-normal ml-[2rem] md:ml-[1rem] mr-[10px] font-bold rounded-[20px] px-[10px] pt-[3px] pb-[1px] text-neutral-lg-cyan-bg bg-primary-dd-cyan">
              NEW!
            </span>
          )}
          {props.featured && (
            <span className="text-[.9rem] font-bold rounded-[20px] px-[10px] py-[2px] text-neutral-lg-cyan-bg bg-neutral-vdg-cyan">
              FEATURED!
            </span>
          )}
        </div>

        {/* JOB TITLE */}
        <h2 className="text-neutral-vdg-cyan font-bold md:text-md2">
          {props.position}
        </h2>

        <span className="flex items-center text-neutral-dg-cyan">
          <span className="">{props.postedAt}</span>

          <span className="mx-2 md:mx-3">•</span>
          <span className="">{props.contract}</span>

          <span className="mx-2 md:mx-3">•</span>

          <span className="">{props.location}</span>
        </span>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-[1px] bg-neutral-dg-cyan my-2 rounded-[20px] md:hidden"></div>

      {/* SKILLS */}
      <ul className="flex flex-wrap gap-4 text-primary-dd-cyan md:ml-auto">
        {skillsEl}
      </ul>
    </article>
  );
};

export default JobCard;
