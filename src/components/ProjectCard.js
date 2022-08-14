import React from "react";
import quizzly from "../assets/quizzly.png";

const ProjectCard = () => {
  return (
    <div className="rounded bg-secondary shadow max-w-md mx-auto grid">
      <header className="p-4">
        <h3 className="text-lg font-bold">Quizzly App</h3>
        <p className="text-md text-black">A quizz App built with Vue</p>
      </header>
      <section>
        <img src={quizzly} alt="quizzly" className=" rounded p-4" />
        <p className="text-md text-gray-600 p-4">A quiz app made with Vuejs.</p>
        <div>{/*  */}</div>
      </section>
      <footer className="grid gap-4 grid-cols-2 grid-rows-1 py-2 mx-4">
        <button className="rounded ease-in duration-300 hover:rounded-lg hover:bg-tertiary bg-primary">
          <i className="fas fa-map"></i>
        </button>
        <button className="rounded ease-in duration-300 hover:rounded-lg hover:bg-tertiary bg-primary">
          <i className="fab fa-github"></i>
        </button>
      </footer>
    </div>
  );
};

export default ProjectCard;
