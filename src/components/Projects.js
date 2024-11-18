import React from "react";
import Carousel from "./Carousel";
import savee from "../assets/savee-table.png";
import paintrest from "../assets/paintrest.png";
import wordle from "../assets/wordle.png";
import passgen from "../assets/passgen.png";
import renamer from "../assets/file-rename.png";
import pokefind from "../assets/pokefind.png";
import crypto from "../assets/crypto.png";
import quizzly from "../assets/quizzly.png";
import shortening from "../assets/shortening.png";
import budgee from "../assets/budgee.png";
import mortgage from "../assets/mortgage.png";

const projects = [
  {
    name: "Savee",
    subtitle: "Full Stack",
    githubLink: "https://github.com/milanz14/savee",
    liveSite: "https://savee.netlify.app/",
    imgSrc: savee,
    description:
      "A budget tracking app built with React, TypeScript, and Firebase.",
    tech: ["React", "TypeScript", "Firebase"],
  },
  {
    name: "Paintrest",
    subtitle: "Full Stack",
    githubLink: "https://github.com/milanz14/Paintrest",
    liveSite: "https://paintrest.surge.sh/",
    imgSrc: paintrest,
    description: "Canvas drawing app built for Mintbean Hackathon.",
    tech: ["React", "Express", "Node", "JWT", "PostgresQL"],
  },
  {
    name: "6Wordle",
    subtitle: "Front End",
    githubLink: "https://github.com/milanz14/react-typescript-wordle",
    liveSite: "https://6wordle.netlify.app/",
    imgSrc: wordle,
    description:
      "A Wordle clone with 6-letter words built using React and TypeScript.",
    tech: ["React", "TypeScript"],
  },
  // Add other projects as needed
];

const Projects = () => (
  <section id="projects" className="h-full">
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-10">
        <i className="fa-solid fa-terminal pr-4"></i>
        Personal Projects: ({projects.length})
      </h2>
      <Carousel projects={projects} />
    </div>
  </section>
);

export default Projects;
