import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Search, X } from 'lucide-react';
import { projects } from '../data/projects';
import Footer from './Footer';

const categories = ["All", "Python", "Next.js", "React", "FastAPI", "Supabase", "MongoDB"];

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  // Filter projects by search query and category
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" ||
                            project.tech.some(t => {
                              // Normalize categories for better matching (e.g. Next.js matches Nextjs)
                              const cleanT = t.replace(".", "").toLowerCase();
                              const cleanCat = selectedCategory.replace(".", "").toLowerCase();
                              return cleanT === cleanCat;
                            });

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-0 flex flex-col font-montserrat">
      <div className="max-w-7xl mx-auto px-6 w-full flex-grow pb-24">
        
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-zinc-450 hover:text-brand-green transition-colors mb-8 text-sm font-semibold group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" /> 
          Back to Home
        </Link>

        {/* Title */}
        <div className="mb-12">
          <h1 className="font-aeonik text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
            All Projects
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
            A complete collection of autonomous AI agents, machine learning integrations, and production-grade fullstack web applications.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mb-12 border-b border-zinc-900 pb-8">
          
          {/* Search Input */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 focus:border-zinc-800 focus:outline-none rounded-full py-3.5 pl-12 pr-6 text-sm text-white transition-colors placeholder:text-zinc-650"
            />
          </div>

          {/* Technology Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer focus:outline-none ${
                  selectedCategory === cat
                    ? "bg-brand-green text-black border-transparent shadow-[0_0_15px_rgba(182,255,94,0.2)]"
                    : "bg-zinc-950 border-zinc-900 text-zinc-450 hover:border-zinc-800 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => setActiveProject(project)}
                className="group bg-zinc-950/40 backdrop-blur-md rounded-2xl overflow-hidden border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col h-full cursor-pointer"
              >
                {/* Cover Image */}
                <div className="relative overflow-hidden aspect-video bg-zinc-900">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transform group-hover:scale-105 filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center gap-4 mb-3">
                    <h3 className="font-aeonik text-xl font-bold text-white group-hover:text-brand-green transition-colors duration-250">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-brand-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="bg-zinc-900 border border-zinc-850 text-zinc-400 text-xxs font-medium px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-zinc-900 rounded-3xl">
            <p className="text-zinc-550 text-base">No projects found matching the criteria.</p>
          </div>
        )}

      </div>

      {/* Footer component */}
      <Footer />

      {/* Details Modal Card */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all duration-300">
          <div className="absolute inset-0 cursor-default" onClick={() => setActiveProject(null)}></div>
          
          <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] z-10 shadow-2xl flex flex-col md:grid md:grid-cols-12 md:max-h-[85vh] font-montserrat">
            
            <button 
              onClick={() => setActiveProject(null)} 
              className="absolute top-4 right-4 z-25 w-10 h-10 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-200 cursor-pointer focus:outline-none"
            >
              <X size={18} />
            </button>

            {/* Left Column: Project Cover Image */}
            <div className="relative md:col-span-6 overflow-hidden bg-zinc-900 border-b md:border-b-0 md:border-r border-zinc-900 h-64 md:h-full min-h-[280px] md:min-h-[450px]">
              <img src={activeProject.image} alt={activeProject.title} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent"></div>
            </div>

            {/* Right Column: Modal details body */}
            <div className="p-6 md:p-8 md:col-span-6 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-[85vh]">
              <div>
                <h3 className="font-aeonik text-3xl md:text-4xl text-white mb-4 tracking-tight">
                  {activeProject.title}
                </h3>
                
                <p className="text-zinc-450 text-sm leading-relaxed mb-6 font-montserrat">
                  {activeProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xxs font-medium px-3.5 py-1.5 rounded-full uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-zinc-900">
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex gap-2 justify-center items-center px-6 py-4 bg-brand-green text-black font-montserrat font-bold text-base rounded-full shadow-[0_0_20px_rgba(182,255,94,0.25)] hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-300 text-center"
                >
                  Visit Project Live <ArrowUpRight className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-4 bg-zinc-900 border border-zinc-800 text-zinc-350 font-bold text-base rounded-full hover:bg-zinc-800 hover:text-white transition-all duration-300 cursor-pointer focus:outline-none"
                >
                  Close Details
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ProjectsPage;
