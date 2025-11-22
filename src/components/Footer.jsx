import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-black text-white py-12 px-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="text-center md:text-left">
                    <h3 className="font-aeonik text-2xl mb-2">Adebola Elisha</h3>
                    <p className="font-montserrat text-gray-400 text-sm">
                        Building digital experiences that matter.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a
                        href="https://github.com/Garvey17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-green transition-colors transform hover:scale-110"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/adebola-elisha-77a1a8257"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-green transition-colors transform hover:scale-110"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="mailto:adebolaelisha@gmail.com"
                        className="text-gray-400 hover:text-brand-green transition-colors transform hover:scale-110"
                    >
                        <FaEnvelope size={24} />
                    </a>
                </div>

                <div className="text-center md:text-right">
                    <p className="font-montserrat text-gray-500 text-xs">
                        &copy; {currentYear} Adebola Elisha. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
