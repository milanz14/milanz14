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
      "A budget tracking app built with React, TypeScript and Firebase. A user's transactions are tracked manually.",
    tech: ["React", "TypeScript", "Firebase"],
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
    name: "6Wordle",
    subtitle: "Front End",
    githubLink: "https://github.com/milanz14/react-typescript-wordle",
    liveSite: "https://6wordle.netlify.app/",
    imgSrc: wordle,
    description:
      "A Wordle clone built with React and TypeScript for 6 letter words. This adds an extra degree of complexity than the base 5-letter Wordle game.",
    tech: ["React", "TypeScript"],
  },
  {
    name: "React PassGen",
    subtitle: "Front End",
    githubLink: "https://github.com/milanz14/ReactPassGen",
    liveSite: "https://react-pass-gen.surge.sh/",
    imgSrc: passgen,
    description: "A tool for generating secure passwords.",
    tech: ["React", "TypeScript"],
  },
  {
    name: "File Renaming",
    subtitle: "Front End",
    githubLink: "https://github.com/milanz14/file-renaming-site",
    liveSite: "https://file-renaming-site.netlify.app/",
    imgSrc: renamer,
    description:
      "Web based tool for quickly renaming extensions for batch files",
    tech: ["React", "TypeScript"],
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
    name: "CryptoTraker",
    subtitle: "Front End",
    githubLink: "https://github.com/milanz14/CryptoTracker",
    liveSite:
      "https://cryptotracker-list.surge.sh/" || "Currently Not Deployed",
    imgSrc: crypto,
    description:
      "Front end application which queries the CoinGecko API to display the latest in Crypto trends.",
    tech: ["React"],
  },
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
    name: "ShortenIt",
    subtitle: "Front End",
    githubLink: "https://github.com/milanz14/shorten-it",
    liveSite: "https://theshortening.netlify.app/" || "Currently Not Deployed",
    imgSrc: shortening,
    description:
      "Front end application consuming the bit.ly API for URL shortening. Must pass a URL string including the correct scheme for the shortener to recognize it as a valid URL.",
    tech: ["React"],
  },
  {
    name: "Budgee",
    subtitle: "Full Stack",
    githubLink: "https://github.com/milanz14/budgee-expense-tracker",
    liveSite: "https://budgee-app.herokuapp.com/" || "Currently Not Deployed",
    imgSrc: budgee,
    description:
      "Full stack application which allows the user the ability to log and track all of their expenses graphically. Due to current Heroku issues, this app is currently being re-written. The source code can be viewed at the GH link below.",
    tech: ["Python", "Flask", "Bootstrap", "JavaScript", "ChartJS"],
  },
  {
    name: "Mortgage Calc",
    subtitle: "Front End",
    githubLink: "https://github.com/milanz14/simple-mortgage-calc",
    liveSite:
      "https://simple-mortgage-calc.netlify.app/" || "Currently Not Deployed",
    imgSrc: mortgage,
    description:
      "Front end application that calculates monthly payments for a loan/mortgage.",
    tech: ["React"],
  },
  // {
  //   name: "CharityFinder",
  //   subtitle: "Front End",
  //   githubLink: "https://github.com/milanz14/CharityFinder",
  //   liveSite: "" || "Currently Not Deployed",
  //   imgSrc: pledge,
  //   description:
  //     "Front end application which assists in finding charitable organizations. Comsumes the Pledge API. Pet project and not currently deployed, screenshot is of the Pledge API.",
  //   tech: ["React"],
  // },
];

const Projects = () => (
  <section id="projects" className="h-full">
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      <h2 className="max-width-md bg-clip-text mb-4 text-transparent transition-all duration-500 bg-gradient-to-t from-pink-700 via-tertiary to-violet-800 bg-size-200 bg-pos-0 hover:bg-pos-100 text-3xl font-bold text-center md:text-5xl">
        <i className="fa-solid fa-terminal pr-4"></i>
        Personal Projects: ({projects.length})
      </h2>
      <Carousel projects={projects} />
    </div>
  </section>
);

export default Projects;
