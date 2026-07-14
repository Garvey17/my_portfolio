import notes from "../assets/notes.png"
import ingenious from "../assets/ingenious.png"
import voult from "../assets/voult.png"
import miryoku from "../assets/miryoku.png"
import afraf from "../assets/afraff.png"
import axeon1 from "../assets/axeon1.png"
import doc2docs from "../assets/docs2docs.png"
import ingenious_agentic from "../assets/ingenious-agentic.png"
import nobaze from "../assets/nobaze.png"

export const projects = [

  {
    
    "title": "Nobaze — RAG Knowledge Base",
    "description": "A production-grade RAG system that ingests documents from PDFs, URLs, and plain text, retrieves relevant chunks via hybrid semantic + BM25 search with Reciprocal Rank Fusion, and returns grounded answers with inline source citations. Includes a voice interface with streaming TTS sentence buffering for sub-second perceived latency.",
    "tech": ["Python", "FastAPI", "OpenAI", "Pinecone", "PostgreSQL", "SQLAlchemy", "LangChain", "BM25", "Whisper", "Docker", "AWS EC2", "React", "Vite"],
    "image": nobaze,
    "link": "https://nobaze.vercel.app/"
  },
  {
    "title": "Ingenious",
    "description": "An autonomous, multi-agent AI system designed to research any topic, evaluate facts, and write comprehensive, publication-grade executive reports with a shared state between agents. Includes memory support with Qdrant vector database",
    "tech": ["Python", "FastAPI", "LangGraph", "Pydantic", "Uvicorn", "Next.js", "Tailwind CSS", "Qdrant (Vector Database)", "OpenAI"],
    "image": ingenious_agentic,
    "link": "https://agentic-ingenious.vercel.app/"
  },
    {
      "title": "Docs to Docs",
      "description": "An AI pipeline that scrapes any documentation site and converts it into a compact, downloadable Word guide covering installation, getting started, and features — delivered via a Chrome extension.",
      "tech": ["Python", "FastAPI", "Playwright", "OpenAI", "AWS ECS", "S3", "Docker", "Chrome Extension"],
      "image": doc2docs,
      "link": "https://github.com/Garvey17/Ingenious-agentic"
    },


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
