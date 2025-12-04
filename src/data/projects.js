import cmind from  "../assets/cmindset.png"
import notes from "../assets/notes.png"
import ingenious from "../assets/ingenious.png"
import voult from "../assets/voult.png"
import miryoku from "../assets/miryoku.png"

export const projects = [
    {
      title: "Miryoku",
      description:
        "A modern social media platform built with Next.js and Supabase featuring secure authentication, real-time updates, and a clean, responsive interface. Users can create posts, participate in comment threads, engage through a voting-based interaction system, and follow others. The app includes an integrated notifications system powered by database triggers and Supabase Realtime, ensuring instant in-app alerts and a smooth, dynamic social experience.",
      tech: ["Nextjs", "Tailwind", "Supabase", "Framer motion", "Gsap", "Shadcn"],
      image:miryoku,
      link:"https://miryoku-social.vercel.app/",
    },
    {
      title: "Voult",
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
