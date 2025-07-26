import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-[2rem] sm:text-3xl md:text-5xl lg:text-8xl font-aeonik mb-6 text-center">Contact Me</h2>
        <p className="text-gray-300 mb-10 max-w-xl mx-auto text-xs">
          I'm always open to discussing new projects, freelance work, or collaborations. Feel free to reach out through any of the platforms below.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-400" />
            <a
              href="mailto:adebolaoluwatowo@gmail.com"
              className="hover:underline hover:text-blue-400 transition"
            >
              adebolaoluwatowo@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-green-400" />
            <a
              href="tel:+2347049156715"
              className="hover:underline hover:text-green-400 transition"
            >
              +234 7049156715
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Garvey17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/adebola-elisha-77a1a8257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/adebola_elisha?igsh=MWFnaTI4N3BpMDAycw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


