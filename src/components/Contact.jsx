import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-black text-white py-24 px-4 border-t border-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[2rem] sm:text-3xl md:text-5xl lg:text-8xl font-aeonik mb-6 text-white tracking-tight">Contact Me</h2>
        <p className="text-zinc-400 mb-12 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          I'm always open to discussing new projects, freelance work, or collaborations. Feel free to reach out through any of the platforms below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a
            href="mailto:adebolaoluwatowo@gmail.com"
            className="flex items-center gap-3 px-6 py-4 bg-zinc-950/40 border border-zinc-900 rounded-full hover:border-brand-green hover:bg-zinc-900/10 hover:scale-105 transition-all duration-300 text-sm md:text-base text-zinc-350 hover:text-white"
          >
            <Mail className="w-5 h-5 text-brand-green" />
            adebolaoluwatowo@gmail.com
          </a>
          <a
            href="tel:+2347049156715"
            className="flex items-center gap-3 px-6 py-4 bg-zinc-950/40 border border-zinc-900 rounded-full hover:border-brand-green hover:bg-zinc-900/10 hover:scale-105 transition-all duration-300 text-sm md:text-base text-zinc-350 hover:text-white"
          >
            <Phone className="w-5 h-5 text-brand-green" />
            +234 7049156715
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Garvey17"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-zinc-900 bg-zinc-950/40 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-brand-green hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/adebola-elisha-77a1a8257"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-zinc-900 bg-zinc-950/40 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-brand-green hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/adebola_elisha?igsh=MWFnaTI4N3BpMDAycw=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-zinc-900 bg-zinc-950/40 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-brand-green hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


