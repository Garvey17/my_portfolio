import React, { useState } from 'react';
import { Bot, Cpu, Database, TrendingUp, Eye, CloudLightning, ArrowRight, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "RAG Systems",
    icon: <Database className="w-8 h-8 text-brand-green" />,
    description: "Build production-grade Retrieval-Augmented Generation pipelines that ground LLM responses in your private knowledge base — eliminating hallucinations and delivering precise, context-aware answers at scale.",
    features: ["Vector DB Setup (Pinecone, pgvector)", "Custom Embedding Pipelines", "Semantic Search & Reranking", "LLM-Grounded Q&A Systems"]
  },
  {
    title: "Model Finetuning",
    icon: <Cpu className="w-8 h-8 text-brand-green" />,
    description: "Adapt open-source models (such as LLaMA or Mistral) on custom datasets to align them with custom domain knowledge, vocabulary, and specific formats.",
    features: ["LoRA & QLoRA Adaptations", "Dataset Curation & Cleaning", "Quantization & Optimization", "Evaluation Matrix Reports"]
  },
  {
    title: "Prompt Engineering",
    icon: <Bot className="w-8 h-8 text-brand-green" />,
    description: "Construct robust, deterministic prompt templates and structured output patterns using advanced agentic frameworks like LangChain, LangGraph, and DSPy.",
    features: ["Structured Output Formatting", "Few-Shot Chain of Thought", "LLM-as-a-Judge Evaluation", "Multi-Agent System Chains"]
  },
  {
    title: "Consulting & Strategy",
    icon: <TrendingUp className="w-8 h-8 text-brand-green" />,
    description: "Help define your AI roadmap, identify automation bottlenecks, design solution architecture, and evaluate API vendor trade-offs.",
    features: ["Tech Stack Feasibility Reports", "AI Security & Compliance Review", "Architecture Design Docs", "Vendor Cost Analysis"]
  },
  {
    title: "Computer Vision",
    icon: <Eye className="w-8 h-8 text-brand-green" />,
    description: "Create image recognition models, object detection pipelines, real-time tracking, and document OCR systems using PyTorch and OpenCV.",
    features: ["Image Segmentation (PyTorch)", "Custom YOLO Detection", "OCR & Layout Analysis", "Real-Time Video Analytics"]
  },
  {
    title: "MLOps & Deployment",
    icon: <CloudLightning className="w-8 h-8 text-brand-green" />,
    description: "Deploy large models cost-effectively. Containerize and host microservices with high throughput, autoscale groups, and monitoring dashboards.",
    features: ["Docker & Kubernetes Setup", "FastAPI Endpoints", "GPU Cloud Cost Optimization", "Real-time Metrics Tracking"]
  }
];

const ServicesSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mobileOpenIdx, setMobileOpenIdx] = useState(0);

  return (
    <section className="py-24 px-6 md:px-12 bg-black font-montserrat border-t border-zinc-900" id="services">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-aeonik text-white tracking-tight mb-4">
            My Services
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base md:text-lg">
            I offer a full range of machine learning and fullstack development services tailored to engineer robust AI systems.
          </p>
        </div>

        {/* Desktop Split View: visible on lg and up */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Interactive Hover List */}
          <div className="col-span-6 flex flex-col border-t border-zinc-900">
            {services.map((service, index) => {
              const isActive = activeIdx === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIdx(index)}
                  className="group border-b border-zinc-900 py-8 cursor-pointer flex items-center justify-between transition-all duration-300"
                >
                  <div className="flex items-center gap-6">
                    <span className={`font-aeonik text-sm font-semibold transition-colors duration-305 ${
                      isActive ? 'text-brand-green' : 'text-zinc-500 group-hover:text-zinc-400'
                    }`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className={`font-aeonik text-2xl lg:text-3xl font-bold tracking-tight transition-all duration-305 ${
                      isActive ? 'text-brand-green translate-x-2' : 'text-zinc-400 group-hover:text-white group-hover:translate-x-1'
                    }`}>
                      {service.title}
                    </span>
                  </div>
                  <ArrowRight className={`w-6 h-6 transition-all duration-305 ${
                    isActive ? 'text-brand-green translate-x-0 opacity-100' : 'text-zinc-650 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-[-8px]'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Detail Panel */}
          <div className="col-span-6 sticky top-32">
            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] min-h-[420px] flex flex-col justify-between transition-all duration-300 relative overflow-hidden group">
              {/* Decorative faint glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-brand-green/5 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-green/10 transition-all duration-500"></div>
              
              <div>
                {/* Icon Wrapper */}
                <div className="mb-8 w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  {services[activeIdx].icon}
                </div>

                {/* Description */}
                <h3 className="font-aeonik text-3xl font-bold text-white mb-4">
                  {services[activeIdx].title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                  {services[activeIdx].description}
                </p>
              </div>

              {/* Key Deliverables/Features */}
              <div className="border-t border-zinc-900 pt-6">
                <h4 className="text-xxs font-semibold text-zinc-500 tracking-widest uppercase mb-4">Key Deliverables</h4>
                <div className="grid grid-cols-2 gap-3">
                  {services[activeIdx].features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                      <span className="text-zinc-300 text-xs">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Mobile Accordion List: visible on screens below lg */}
        <div className="lg:hidden flex flex-col border-t border-zinc-900">
          {services.map((service, index) => {
            const isOpen = mobileOpenIdx === index;
            return (
              <div
                key={index}
                onClick={() => setMobileOpenIdx(isOpen ? null : index)}
                className="group border-b border-zinc-900 py-6 cursor-pointer flex flex-col transition-all duration-300"
              >
                {/* Header row */}
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-4">
                    <span className={`font-aeonik text-xs font-semibold ${
                      isOpen ? 'text-brand-green' : 'text-zinc-500'
                    }`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className={`font-aeonik text-xl font-bold ${
                      isOpen ? 'text-brand-green' : 'text-zinc-300 group-hover:text-white'
                    }`}>
                      {service.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${
                    isOpen ? 'rotate-90 text-brand-green' : ''
                  }`} />
                </div>

                {/* Expandable Details Container */}
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 pb-2 text-zinc-400 text-sm leading-relaxed">
                      
                      {/* Icon */}
                      <div className="mb-4 w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                        {service.icon}
                      </div>

                      {/* Description */}
                      <p className="mb-6">{service.description}</p>

                      {/* Features */}
                      <div className="border-t border-zinc-900/60 pt-4">
                        <h4 className="text-[10px] font-semibold text-zinc-500 tracking-wider uppercase mb-3">Key Deliverables</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-brand-green"></div>
                              <span className="text-zinc-350 text-xs">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
