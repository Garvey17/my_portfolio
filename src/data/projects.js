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
        "A browser-based cloud IDE featuring an integrated local AI coding assistant powered by Ollama, Monaco Editor, multi-file support, and instant live previews.",
      tech: ["Next.js", "Ollama", "Prisma", "MongoDB", "Monaco"],
      image: axeon1,
      link: "https://axeon-editor.vercel.app/",
    },
    {
      title: "Miryoku",
      description:
        "A modern social network featuring intelligent content moderation, automated AI-driven post tagging, and real-time feeds powered by Supabase Realtime.",
      tech: ["Next.js", "Supabase", "Tailwind CSS", "Framer Motion", "GSAP"],
      image: miryoku,
      link: "https://miryoku-social.vercel.app/",
    },
    {
      title: "AF RAFF",
      description:
        "A B2B contractor portal with integrated AI predictive demand forecasting, invoice management, secure credit monitoring, and delivery scheduling.",
      tech: ["Next.js", "Tailwind CSS", "Supabase", "Node.js", "Python"],
      image: afraf,
      link: "https://raf-app.vercel.app/",
    },
    {
      title: "Voult",
      description:
        "A high-end eCommerce fashion storefront featuring intelligent personal shopper recommendations and secure checkout processes.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      image: voult,
      link: "https://voult-mern-app-x2.onrender.com/",
    },
    {
      title: "CognitiveAgent",
      description:
        "An autonomous AI agent platform that coordinates multi-agent systems to automate software testing, bug remediation, and continuous deployment pipelines.",
      tech: ["Python", "LangChain", "CrewAI", "FastAPI", "Docker"],
      image: ingenious,
      link: "https://github.com/Garvey17",
    },
    {
      title: "NeuroFlow",
      description:
        "A real-time medical image segmentation and diagnostics system built using PyTorch and FastAPI, featuring a clean React dashboard for visualization.",
      tech: ["PyTorch", "FastAPI", "React", "Tailwind CSS", "Recharts"],
      image: notes,
      link: "https://github.com/Garvey17",
    },
];
