import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Milan Zagorac | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio Site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Milan',
  subtitle: 'I am a web developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a mechanical engineer by education and a business professional by occupation. It was not until later in life that I discovered my passion for coding and problem solving.',
  paragraphTwo:
    'I have many years of experience in customer facing business roles of ever increasing responsibility. My technical education and business skills will serve me well as I transition into a career in tech.',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-budgee.jpg',
    title: 'Budgee Expense Tracker',
    info: 'Budgee is a simple expense tracker that allows the user to log their expenditures and view a graph of their transactions.',
    info2: 'Technologies: Python, Flask, JS',
    url: 'https://budgee-app.herokuapp.com/',
    repo: 'https://github.com/milanz14/budgee-expense-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-shorten.jpg',
    title: 'Shorten-It URL Shortener',
    info: 'Shorten it is a React based URL shortener. Click to shorten and then copy the short URL to your clipboard for easy access.',
    info2: 'Technologies: React',
    url: 'https://theshortening.netlify.app/',
    repo: 'https://github.com/milanz14/shorten-it', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-paintrest.jpg',
    title: 'Paintrest',
    info: 'Paintrest is an app that allows users to create beautiful works of art on a canvas and save to their profile.',
    info2:
      'This is a full stack application with a backend for data storage and front end for user interaction with the server.',
    url: 'https://paintrest.surge.sh/',
    repo: 'https://github.com/milanz14/Paintrest', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'zagoracm@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/selftaughtc0der',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/milanzagorac/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/milanz14',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
