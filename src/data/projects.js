import cmind from  "../assets/cmindset.png"
import notes from "../assets/notes.png"
import ingenious from "../assets/ingenious.png"
import voult from "../assets/voult.png"
import miryoku from "../assets/miryoku.png"
import afraf from "../assets/afraff.png"
import axeon1 from "../assets/axeon1.png"



export const projects = [
    {
      title: "Axeon",
      description:
        "A fast browser-based coding environment similar to StackBlitz Built with Next.js (JavaScript) + Monaco Editor and terminal featuring instant preloaded project templates (React, Next.js, Node, etc.), multi-file support, live preview & hot-reloading Integrated local AI coding assistant powered by Ollama",
      tech: ["Nextjs", "Prisma", "Mongodb", "Monaco"],
      image:axeon1,
      link:"https://axeon-editor.vercel.app/",
    },
    {
      title: "Miryoku",
      description:
        "A modern social media app built with Next.js and Supabase, featuring secure auth, real-time posts, comments, voting, follows, and instant notifications powered by database triggers and Supabase Realtime — all in a clean, responsive UI",
      tech: ["Nextjs", "Tailwind", "Supabase", "Framer motion", "Gsap", "Shadcn"],
      image:miryoku,
      link:"https://miryoku-social.vercel.app/",
    },
    {
      title: "AF RAFF",
      description:
        "A B2B web portal built with Next.js and Supabase for a major cement distributor and contractor. Features secure authentication, real-time order tracking, instant price quotes, bulk order placement, invoice history, delivery scheduling, and credit limit monitoring — all in a fast, responsive interface tailored for construction professionals.",
      tech: ["Nextjs", "Tailwind", "Supabase", "Node js"],
      image:afraf,
      link:"https://raf-app.vercel.app/",
    },
    {
      title: "Voult",
      description:
        "A stylish eCommerce fashion store built with the MERN stack, featuring product listings, user authentication, and a fully functional shopping cart for seamless browsing and checkout.",
      tech: ["Node.js", "Express", "MongoDB", "React", "Tailwind"],
      image:voult,
      link:"https://voult-mern-app-x2.onrender.com/",
    },
    
    
  ];
