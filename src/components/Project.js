import React from "react";

const Project = ({
  name,
  subtitle,
  githubLink,
  liveSite,
  imgSrc,
  description,
  tech,
}) => {
  return (
    <div className="flex flex-col items-center mt-12 md:flex-row">
      <div className="flex flex-col h-50 items-center p-6 space-y-6 rounded-lg bg-tertiary md:w-1/2">
        <img
          className="object-cover w-full h-50 md:h-auto md:w-48 md:rounded-none md:rounded"
          src={imgSrc}
          alt="project screenshot"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {subtitle} - {name}
          </h5>
          <p className="mb-3 font-normal text-white">{description}</p>
        </div>
        <div className="flex flex-row items-center">
          <button className="text-white px-4">
            <i class="fa-brands fa-github"></i>
          </button>
          <button className="text-white px-4">
            <i class="fa-solid fa-pager"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
