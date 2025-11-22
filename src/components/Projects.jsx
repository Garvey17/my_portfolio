import React, { useEffect, useRef } from "react";
import { Globe } from 'lucide-react';
import { projects } from "../data/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Mobile only
        "(max-width: 768px)": () => {
          cardsRef.current.forEach((card, index) => {
            if (index === cardsRef.current.length - 1) return; // Don't animate the last card

            const nextCard = cardsRef.current[index + 1];

            gsap.to(card, {
              scale: 0.9,
              opacity: 0,
              scrollTrigger: {
                trigger: card,
                start: "top 15%", // Adjust based on where you want the stack to start
                endTrigger: nextCard,
                end: "top 15%",
                scrub: true,
                // markers: true, // Uncomment for debugging
              },
            });
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="py-20 px-4 bg-white" id="projects" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-aeonik mb-6">Selected Work</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-montserrat">
            A showcase of projects demonstrating full-stack capabilities and attention to detail.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl flex flex-col h-full md:static sticky top-[15vh]"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-aeonik font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Visit <Globe size={16} />
                  </a>
                </div>

                <p className="text-gray-600 mb-6 font-montserrat leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;