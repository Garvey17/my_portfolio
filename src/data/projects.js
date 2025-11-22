import cmind from  "../assets/cmindset.png"
import notes from "../assets/notes.png"
import ingenious from "../assets/ingenious.png"
import voult from "../assets/voult.png"

export const projects = [
    {
      title: "Notes App",
      description:
        "A secure Notes App built with the MERN stack featuring user login, signup, and JWT-based authentication. Users can create, edit, and manage their personal notes in a clean, responsive interface with data stored in MongoDB.",
      tech: ["React", "Tailwind", "MongoDB", "Express js", "Node js", "JWT"],
      image:notes,
      link:"https://notes-app-x2.onrender.com/home",
    },
    {
      title: "E-commerce store",
      description:
        "A stylish eCommerce fashion store built with the MERN stack, featuring product listings, user authentication, and a fully functional shopping cart for seamless browsing and checkout.",
      tech: ["Node.js", "Express", "MongoDB", "React", "Tailwind"],
      image:voult,
      link:"https://voult-mern-app-x2.onrender.com/",
    },
    {
      title: "Creative Mindset",
      description:
        "A sleek and modern website for a design agency built with React, Tailwind CSS, and GSAP, featuring smooth scroll-based animations, responsive layouts, and dynamic transitions that showcase the agency's services, portfolio, and team with an engaging user experience.",
      tech: ["React", "Gsap", "Tailwind",],
      image:cmind,
      link:"https://creativestudios-seven.vercel.app/",
    },
    {
      title: "AI SaaS",
      description:
        "A modern AI SaaS onboarding website designed to guide users through features, pricing, and account setup with a clean UI, interactive walkthroughs, and responsive design—built for clarity, conversion, and seamless user engagement.",
      tech: ["React", "Tailwind", "Mongo DB", "Expresss js", "Node js"],
      image:ingenious,
      link:"https://ingeniouspage.netlify.app/",
    },
  ];
