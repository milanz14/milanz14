import React from "react";
import crypto from "../assets/crypto.png";
import quizzly from "../assets/quizzly.png";
import paintrest from "../assets/paintrest.png";
import pokefind from "../assets/pokefind.png";
import shortening from "../assets/shortening.png";
import budgee from "../assets/budgee.png";
import mortgage from "../assets/mortgage.png";
import pledge from "../assets/pledge.png";
import wordle from "../assets/wordle.png";
import savee from "../assets/savee-table.png";
import passgen from "../assets/passgen.png";

const Projects = () => {
  const projectData = [
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
      name: "React PassGen",
      subtitle: "Front End",
      githubLink: "https://github.com/milanz14/ReactPassGen",
      liveSite: "https://react-pass-gen.surge.sh/",
      imgSrc: passgen,
      description: "A tool for generating secure passwords.",
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
      name: "CryptoTraker",
      subtitle: "Front End",
      githubLink: "https://github.com/milanz14/CryptoTracker",
      liveSite: "https://cryptotracker-list.surge.sh/" || "Currently Not Deployed",
      imgSrc: crypto,
      description:
        "Front end application which queries the CoinGecko API to display the latest in Crypto trends.",
      tech: ["React"],
    },
    {
      name: "Mortgage Calc",
      subtitle: "Front End",
      githubLink: "https://github.com/milanz14/simple-mortgage-calc",
      liveSite: "https://simple-mortgage-calc.netlify.app/" || "Currently Not Deployed",
      imgSrc: mortgage,
      description:
        "Front end application that calculates monthly payments for a loan/mortgage you are considering.",
      tech: ["React"],
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
      name: "CharityFinder",
      subtitle: "Front End",
      githubLink: "https://github.com/milanz14/CharityFinder",
      liveSite: "" || "Currently Not Deployed",
      imgSrc: pledge,
      description:
        "Front end application which assists in finding charitable organizations. Comsumes the Pledge API. Pet project and not currently deployed, screenshot is of the Pledge API.",
      tech: ["React"],
    },
  ];

  return (
    <section id="projects">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="max-width-md bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-t from-pink-700 via-tertiary to-violet-800 bg-size-200 bg-pos-0 hover:bg-pos-100 text-3xl font-bold text-center md:text-5xl">
          <i className="fa-solid fa-terminal pr-4"></i> Projects List: {projectData.length}
        </h2>

        {/* Projects Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-2">
          {/* Project 1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-primary md:w-1/3">
            <img className="w-21 -mt-10" src={projectData[0].imgSrc} alt="project screenshot" />
            <h5 className="text-white text-lg font-bold">
              {projectData[0].subtitle} - {projectData[0].name}
            </h5>
            <p className="text-sm text-white">{projectData[0].description}</p>
            <div className="flex flex-row items-center">
              <a
                href={projectData[0].githubLink}
                target="_blank"
                className="text-white px-4"
                rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={projectData[0].liveSite}
                className="text-white px-4"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa-solid fa-pager"></i>
              </a>
            </div>
            <div>
              {projectData[0].tech.map((data, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-tertiary rounded-full px-3 py-2 my-2 text-sm text-white mr-2">
                  {data}
                </span>
              ))}
            </div>
          </div>
          {/* Project 2 */}
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-primary md:w-1/3">
            <img className="w-21 -mt-10" src={projectData[1].imgSrc} alt="project screenshot" />
            <h5 className="text-white text-lg font-bold">
              {projectData[1].subtitle} - {projectData[1].name}
            </h5>
            <p className="text-sm text-white">{projectData[1].description}</p>
            <div className="flex flex-row items-center">
              <a
                href={projectData[1].githubLink}
                target="_blank"
                className="text-white px-4"
                rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={projectData[1].liveSite}
                className="text-white px-4"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa-solid fa-pager"></i>
              </a>
            </div>
            <div>
              {projectData[1].tech.map((data, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-tertiary rounded-full px-3 py-2 my-2 text-sm text-white mr-2">
                  {data}
                </span>
              ))}
            </div>
          </div>
          {/* Project 3 */}
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-primary md:w-1/3">
            <img className="w-21 -mt-10" src={projectData[2].imgSrc} alt="project screenshot" />
            <h5 className="text-white text-lg font-bold">
              {projectData[2].subtitle} - {projectData[2].name}
            </h5>
            <p className="text-sm text-white">{projectData[2].description}</p>
            <div className="flex flex-row items-center">
              <a
                href={projectData[2].githubLink}
                target="_blank"
                className="text-white px-4"
                rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={projectData[2].liveSite}
                className="text-white px-4"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa-solid fa-pager"></i>
              </a>
            </div>
            <div>
              {projectData[2].tech.map((data, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-tertiary rounded-full px-3 py-2 my-2 text-sm text-white mr-2">
                  {data}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-2">
          {/* Project 4 */}
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-primary md:w-1/3">
            <img className="w-21 -mt-10" src={projectData[3].imgSrc} alt="project screenshot" />
            <h5 className="text-white text-lg font-bold">
              {projectData[3].subtitle} - {projectData[3].name}
            </h5>
            <p className="text-sm text-white">{projectData[3].description}</p>
            <div className="flex flex-row items-center">
              <a
                href={projectData[3].githubLink}
                target="_blank"
                className="text-white px-4"
                rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={projectData[3].liveSite}
                className="text-white px-4"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa-solid fa-pager"></i>
              </a>
            </div>
            <div>
              {projectData[3].tech.map((data, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-tertiary rounded-full px-3 py-2 my-2 text-sm text-white mr-2">
                  {data}
                </span>
              ))}
            </div>
          </div>
          {/* Project 5 */}
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-primary md:w-1/3">
            <img className="w-21 -mt-10" src={projectData[4].imgSrc} alt="project screenshot" />
            <h5 className="text-white text-lg font-bold">
              {projectData[4].subtitle} - {projectData[4].name}
            </h5>
            <p className="text-sm text-white">{projectData[4].description}</p>
            <div className="flex flex-row items-center">
              <a
                href={projectData[4].githubLink}
                target="_blank"
                className="text-white px-4"
                rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={projectData[4].liveSite}
                className="text-white px-4"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa-solid fa-pager"></i>
              </a>
            </div>
            <div>
              {projectData[4].tech.map((data, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-tertiary rounded-full px-3 py-2 my-2 text-sm text-white mr-2">
                  {data}
                </span>
              ))}
            </div>
          </div>
          {/* Project 6 */}
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-primary md:w-1/3">
            <img className="w-21 -mt-10" src={projectData[5].imgSrc} alt="project screenshot" />
            <h5 className="text-white text-lg font-bold">
              {projectData[5].subtitle} - {projectData[5].name}
            </h5>
            <p className="text-sm text-white">{projectData[5].description}</p>
            <div className="flex flex-row items-center">
              <a
                href={projectData[5].githubLink}
                target="_blank"
                className="text-white px-4"
                rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={projectData[5].liveSite}
                className="text-white px-4"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa-solid fa-pager"></i>
              </a>
            </div>
            <div>
              {projectData[5].tech.map((data, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-tertiary rounded-full px-3 py-2 my-2 text-sm text-white mr-2">
                  {data}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-2">
          {/* Project 4 */}
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-primary md:w-1/3">
            <img className="w-21 -mt-10" src={projectData[6].imgSrc} alt="project screenshot" />
            <h5 className="text-white text-lg font-bold">
              {projectData[6].subtitle} - {projectData[6].name}
            </h5>
            <p className="text-sm text-white">{projectData[6].description}</p>
            <div className="flex flex-row items-center">
              <a
                href={projectData[6].githubLink}
                target="_blank"
                className="text-white px-4"
                rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={projectData[6].liveSite}
                className="text-white px-4"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa-solid fa-pager"></i>
              </a>
            </div>
            <div>
              {projectData[6].tech.map((data, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-tertiary rounded-full px-3 py-2 my-2 text-sm text-white mr-2">
                  {data}
                </span>
              ))}
            </div>
          </div>
          {/* Project 5 */}
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-primary md:w-1/3">
            <img className="w-21 -mt-10" src={projectData[7].imgSrc} alt="project screenshot" />
            <h5 className="text-white text-lg font-bold">
              {projectData[7].subtitle} - {projectData[7].name}
            </h5>
            <p className="text-sm text-white">{projectData[7].description}</p>
            <div className="flex flex-row items-center">
              <a
                href={projectData[7].githubLink}
                target="_blank"
                className="text-white px-4"
                rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={projectData[7].liveSite}
                className="text-white px-4"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa-solid fa-pager"></i>
              </a>
            </div>
            <div>
              {projectData[7].tech.map((data, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-tertiary rounded-full px-3 py-2 my-2 text-sm text-white mr-2">
                  {data}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-primary md:w-1/3">
            <img className="w-21 -mt-10" src={projectData[8].imgSrc} alt="project screenshot" />
            <h5 className="text-white text-lg font-bold">
              {projectData[8].subtitle} - {projectData[8].name}
            </h5>
            <p className="text-sm text-white">{projectData[8].description}</p>
            <div className="flex flex-row items-center">
              <a
                href={projectData[8].githubLink}
                target="_blank"
                className="text-white px-4"
                rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={projectData[8].liveSite}
                className="text-white px-4"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa-solid fa-pager"></i>
              </a>
            </div>
            <div>
              {projectData[8].tech.map((data, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-tertiary rounded-full px-3 py-2 my-2 text-sm text-white mr-2">
                  {data}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-2">
          {/* Project 4 */}
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-primary md:w-1/3">
            <img className="w-21 -mt-10" src={projectData[9].imgSrc} alt="project screenshot" />
            <h5 className="text-white text-lg font-bold">
              {projectData[9].subtitle} - {projectData[9].name}
            </h5>
            <p className="text-sm text-white">{projectData[9].description}</p>
            <div className="flex flex-row items-center">
              <a
                href={projectData[9].githubLink}
                target="_blank"
                className="text-white px-4"
                rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={projectData[9].liveSite}
                className="text-white px-4"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa-solid fa-pager"></i>
              </a>
            </div>
            <div>
              {projectData[9].tech.map((data, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-tertiary rounded-full px-3 py-2 my-2 text-sm text-white mr-2">
                  {data}
                </span>
              ))}
            </div>
          </div>
          {/* Project 5 */}
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-primary md:w-1/3">
            <img className="w-21 -mt-10" src={projectData[10].imgSrc} alt="project screenshot" />
            <h5 className="text-white text-lg font-bold">
              {projectData[10].subtitle} - {projectData[10].name}
            </h5>
            <p className="text-sm text-white">{projectData[10].description}</p>
            <div className="flex flex-row items-center">
              <a
                href={projectData[10].githubLink}
                target="_blank"
                className="text-white px-4"
                rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={projectData[10].liveSite}
                className="text-white px-4"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa-solid fa-pager"></i>
              </a>
            </div>
            <div>
              {projectData[10].tech.map((data, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-tertiary rounded-full px-3 py-2 my-2 text-sm text-white mr-2">
                  {data}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="my-16">
          <a
            href="#contact"
            className="p-3 px-6 pt-2 text-white bg-primary rounded-full baseline hover:cursor-pointer transition-all duration-500 bg-gradient-to-l from-pink-700 via-tertiary to-violet-800 bg-size-200 bg-pos-0 hover:bg-pos-100">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
