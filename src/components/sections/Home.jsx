import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Saubhagya Sapkota.
          </h1>
          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer with strong foundation in React, Node.js,
            Python and scalable backend systems. I'm dedicated to building
            clean, efficient code that drives meaningful user interactions.
          </p>
          <div>
            <a
              href="./Resume_Saubhagya_Sapkota.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #22c55e, #06b6d4)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              DOWNLOAD CV
            </a>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/SaubhagyaSapkota/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaGithub size={50} />
            </a>
            <a
              href="https://www.linkedin.com/in/saubhagya-sapkota-002b2a242/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#0077B5]"
            >
              <FaLinkedin size={50} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
