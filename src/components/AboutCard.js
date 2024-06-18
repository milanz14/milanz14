const AboutCard = () => {
  const skills = [
    {
      description: "Front End Skills and Technologies",
      paragraph:
        "With a passion for web development, I possess a comprehensive skill set encompassing a wide range of technologies. I am proficient in HTML, CSS, JavaScript, TypeScript, and have extensive experience with popular frameworks such as React, Vue, and Angular. Additionally, I am well-versed in front-end design libraries like Bulma, Tailwind, Bootstrap, and component libraries such as Vuetify and MaterialUI. My commitment to clean code and minimizing technical debt ensures that the solutions I develop are efficient and maintainable.",
    },
    {
      description: "Backend Skills and Technologies",
      paragraph:
        "In addition to my front-end expertise, I have a solid background in backend development. I have successfully built APIs using Node.js and Express, as well as Python and Flask. I have implemented robust authentication systems utilizing technologies such as JWT (JSON Web Tokens) for secure communication. When it comes to databases, I am proficient in working with both SQL and NoSQL databases, having utilized PostgreSQL and MongoDB, respectively. Moreover, I am well-acquainted with Firebase, leveraging its powerful capabilities as an all-in-one solution. I have deployed numerous back-end projects using platforms like Heroku, MongoDB Cloud, and Firebase, ensuring reliable and scalable deployments.",
    },
    {
      description: "Other Technologies and Tools",
      paragraph:
        "Terminal. Git. Github. Jasmine. Jest. React-Test-Utils. Redux. Vue-Test-Utils. Vuex. Pinia. Docker. Kubernetes. AWS. VSCode. Atom. Postman. Insomnia. Xcode. Bash scripting. Many more...",
    },
  ];

  return (
    <section id="about">
      {/* <motion.div animate={animation} ref={ref}> */}
      <div className="container flex flex-col px-4 mx-auto mt-10 mt-16 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col items-center pr-6 space-y-0 md:w-1/2">
          <h2 className="max-width-md bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-t from-pink-700 via-tertiary to-violet-800 bg-size-200 bg-pos-0 hover:bg-pos-100 text-3xl font-bold text-center md:text-5xl md:text-left">
            <i className="fa-solid fa-terminal pr-4"></i> About Me
          </h2>
          <p className="max-w-xl text-justify text-black py-12">
            I'm a full stack developer focused on building interactive and
            responsive websites. My approach to technical challenges is rooted
            in a commitment to excellence, always striving for high-quality
            solutions that align with best practices and industry standards. I
            stay updated with the latest trends and technologies, continuously
            expanding my knowledge base to deliver innovative solutions.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          {skills.map((skill) => (
            <div key={skill.description}>
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                <div className="rounded-l-full bg-tertiary md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-primary">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <h3 className="text-base text-justify font-bold md:mb-4 text-white md:hidden">
                      {skill.description}
                    </h3>
                  </div>
                </div>

                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    {skill.description}
                  </h3>
                  <p className="text-black text-justify">{skill.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </motion.div> */}
    </section>
  );
};

export default AboutCard;
