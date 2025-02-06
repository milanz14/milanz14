const softwareDeveloper = {
  name: "Milan Zagorac",
  email: "milanzagorac41@gmail.com",
  occupation: "Software Developer",
  github: "https://github.com/milanz14",
  website: "https://www.milanz.dev/",
  yearsOfExperience: 6,
  frontEndTech: [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "Tailwind",
    "Chakra UI",
    "Framer Motion",
    "Styled Components",
    "Material UI",
  ],
  backEndTech: ["Express", "Nodejs", "Python", "Flask", "Java"],
  databases: ["Firebase", "PostgresQL", "MongoDB"],
  devTools: ["Git", "GitHub", "VSCode", "Postman"],
  currentlyLearning: ["Next.js", "React Native", "GraphQL", "Prisma", "C++"],
  currentlyWorkingOn: ["Organyze", "FileBox", "Evites", "Quotar", "FunnelCRM"],
  greet() {
    return `Hi, I'm ${this.name}. I'm at ${this.occupation}. Please contact me at ${this.email} to work with me!`;
  },
};

console.log(softwareDeveloper.greet());
