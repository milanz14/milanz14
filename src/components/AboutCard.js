import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AboutCard = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        translateY: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
        },
      });
    }
    if (!inView) {
      animation.start({ translateY: 400, opacity: 0 });
    }
  }, [inView]);

  const skills = [
    {
      description: "Front End Skills and Technologies",
      paragraph:
        "I am well versed with HTML, CSS, JavaScript, TypeScript, React, Vue, Bulma, Tailwind, Bootstrap, Vuetify, MaterialUI, Chakra and many more. I believe in writing clean code while minimizing technical debt. I have used Surge and Netlify to deploy front end websites.",
    },
    {
      description: "Backend Skills and Technologies",
      paragraph:
        "I have written APIs with Nodejs, Express, Python, Flask using robust technologies such as JWT. I have utilized PostgreSQL (SQL) and MongoDB (NoSQL) for DBs. I am familiar with Firebase as an all-in solution. I have used Heroku, MongoDB Cloud and Firebase to deploy back end projects.",
    },
    {
      description: "Other Technologies and Tools",
      paragraph:
        "Terminal. Git. Github. Jasmine. Jest. React-Test-Utils. Redux. Vue-Test-Utils. Vuex. Pinia. Docker. Kubernetes. AWS. VSCode. Atom. Postman. Insomnia. Xcode. Bash scripting. Many more...",
    },
  ];

  return (
    <section id="about">
      <motion.div animate={animation} ref={ref}>
        <div className="container flex flex-col px-4 mx-auto mt-10 mt-16 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col items-center pr-6 space-y-0 md:w-1/2">
            <h2 className="max-width-md bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-t from-pink-700 via-tertiary to-violet-800 bg-size-200 bg-pos-0 hover:bg-pos-100 text-3xl font-bold text-center md:text-5xl md:text-left">
              <i className="fa-solid fa-terminal pr-4"></i> About Me
            </h2>
            <p className="max-w-sm text-left text-black py-6 md:text-left">
              I'm a full stack web developer focused on building interactive and
              responsive websites. I strive to learn something new and improve
              my skill set daily.
            </p>
          </div>
          {/* Numbered List */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {skills.map((skill) => (
              <div key={skill.description}>
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  <div className="rounded-l-full bg-tertiary md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 text-white rounded-full md:py-1 bg-primary">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <h3 className="text-base font-bold md:mb-4 text-white md:hidden">
                        {skill.description}
                      </h3>
                    </div>
                  </div>

                  <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                      {skill.description}
                    </h3>
                    <p className="text-black">{skill.paragraph}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCard;
