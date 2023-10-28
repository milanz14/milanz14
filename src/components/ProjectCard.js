import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  /*
  <a href="#" class="group relative block bg-black">
  <img
    alt="Developer"
    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-4 sm:p-6 lg:p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
      Developer
    </p>

    <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

    <div class="mt-32 sm:mt-48 lg:mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a>
*/

  return (
    <div className="flex justify-center">
      <div
        className="mt-8 h-full w-full flex justify-center overflow-hidden relative"
        key={project.name}
      >
        <AnimatePresence>
          <motion.div
            key={project.name}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-800 h-full w-full"
          >
            <img
              className="mt-1 rounded-lg"
              src={project.imgSrc}
              alt="project screenshot"
            />
            <h5 className="text-white text-lg font-bold">
              {project.subtitle} - {project.name}
            </h5>
            <p className="text-sm text-white">{project.description}</p>
            <div className="flex flex-row items-center">
              <a
                href={project.githubLink}
                target="_blank"
                className="text-white px-4"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={project.liveSite}
                className="text-white px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-pager"></i>
              </a>
            </div>
            <div>
              {project.tech.map((data, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-tertiary rounded-full px-3 py-2 my-2 text-sm text-white mr-2"
                >
                  {data}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectCard;
