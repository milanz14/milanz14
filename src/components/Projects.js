import React, { useState } from "react";
import Project from "./Project";
import crypto from "../assets/crypto.png";
import quizzly from "../assets/quizzly.png";
import paintrest from "../assets/paintrest.png";
import pokefind from "../assets/pokefind.png";
import shortening from "../assets/shortening.png";

const Projects = () => {
  const projectData = [
    {
      name: "Quizzly",
      subtitle: "Front End",
      githubLink: "https://github.com/milanz14/quizzly",
      liveSite: "https://quizzly.surge.sh/" || "Currently Not Deployed",
      imgSrc: quizzly,
      description:
        "A quiz app built with Vue. Uses Vue3 with the Options API and renders content on the screen dynamically based on where in the list of questions the user is currently.",
      tech: ["Vue"],
    },
    {
      name: "Paintrest",
      subtitle: "Full Stack",
      githubLink: "https://github.com/milanz14/Paintrest",
      liveSite: "https://paintrest.surge.sh/" || "Currently Not Deployed",
      imgSrc: paintrest,
      description:
        "Full Stack application built for Mintbean's November 2021 Hiring Hackathon. The task was to build an app that would allow users to draw on a canvas.",
      tech: ["React", "Express", "Node", "JWT", "PostgresQL"],
    },
    {
      name: "Pokefind",
      subtitle: "Front End",
      githubLink: "https://github.com/milanz14/Pokefind",
      liveSite: "https://pokefind.surge.sh/" || "Currently Not Deployed",
      imgSrc: pokefind,
      description:
        "Front end application which consumes the difficult to use PokeApi to query all of your favourite Pokemon for more information.",
      tech: ["React", "ChakraUI"],
    },
    {
      name: "CharityFinder",
      subtitle: "Front End",
      githubLink: "https://github.com/milanz14/CharityFinder",
      liveSite: "" || "Currently Not Deployed",
      imgSrc: null,
      description:
        "Front end application which assists in finding charitable organizations. Comsumes the Pledge API. Pet project and not currently deployed.",
      tech: ["React"],
    },
    {
      name: "ShortenIt",
      subtitle: "Front End",
      githubLink: "https://github.com/milanz14/shorten-it",
      liveSite:
        "https://theshortening.netlify.app/" || "Currently Not Deployed",
      imgSrc: shortening,
      description:
        "Front end application consuming the bit.ly API for URL shortening.",
      tech: ["React"],
    },
    {
      name: "Budgee",
      subtitle: "Full Stack",
      githubLink: "https://github.com/milanz14/budgee-expense-tracker",
      liveSite: "https://budgee-app.herokuapp.com/" || "Currently Not Deployed",
      imgSrc: null,
      description:
        "Full stack application which allows the user the ability to log and track all of their expenses graphically. Due to current Heroku issues, this app is currently being re-written. The source code can be viewed at the GH link below.",
      tech: ["Python", "Flask", "Bootstrap", "JavaScript", "ChartJS"],
    },
  ];

  return (
    <section id="projects">
      <div className="flex-col max-w-6xl px-5 mx-auto mt-16 text-center md:flex-row">
        {/* <!-- Heading --> */}
        <h2 className="max-width-md bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-t from-pink-700 via-tertiary to-violet-800 bg-size-200 bg-pos-0 hover:bg-pos-100 text-5xl font-bold text-center md:text-5xl">
          Projects
        </h2>
        {projectData.map((project, idx) => (
          <Project
            key={idx}
            name={project.name}
            imgSrc={project.imgSrc}
            subtitle={project.subtitle}
            githubLink={project.githubLink}
            liveSite={project.liveSite}
            description={project.description}
            tech={project.tech}
          />
        ))}

        {/* <!-- Button --> */}
        <div className="flex justify-center mt-16">
          <a
            href="#contact"
            className="p-3 px-6 pt-2 text-white bg-primary rounded-full baseline hover:cursor-pointer transition-all duration-500 bg-gradient-to-l from-pink-700 via-tertiary to-violet-800 bg-size-200 bg-pos-0 hover:bg-pos-100"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
