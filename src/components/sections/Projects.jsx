import { RevealOnScroll } from "../RevealOnScroll";
import { smallProjects } from "../../data/projectData";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1) IAM */}
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                Identity & Access Management
              </h3>
              <p className="text-gray-400 mb-4">
                <li>
                  A Production-ready authnetication and authorization system
                  with secure login, email verification, and session logout
                  flows.{" "}
                </li>
                <li>
                  Implemented JWT-based authentication with access token and
                  refresh token rotation, stored and validation through
                  server-side.
                </li>
                <li>
                  Role-based and Permission-based access control for fine
                  grained authorization and protected APIs resources using
                  custom middleware.
                </li>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["TypeScript", "Node.js", "Express.js", "PostgreSQL"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-blue-500/10 text-cyan-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/SaubhagyaSapkota/Book-recommendation-System/tree/master"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* 2) Job Search */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                JobSearch: A full Stack Web Application
              </h3>
              <p className="text-gray-400 mb-4">
                <li>A job listing platform developed using MERN Stack.</li>
                <li>
                  Implemented features include user authentication, job posting,
                  Job Search and real time notification.
                </li>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "ExpressJs", "MongoDB"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/SaubhagyaSapkota/MERN-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* 3) Birdy */}
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                Birdy: A Mobile Application for Bird Identification
              </h3>
              <p className="text-gray-400 mb-4">
                <li>
                  ML-powered bird identification application where users can
                  identify the Bird based on their sound.
                </li>
                <li>
                  Implemented features include recording bird sound in real time
                  and uploading the recorded audio.
                </li>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "React Native", "Django", "Jupyter Notebook"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-blue-500/10 text-cyan-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-cyan-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* 4) Book */}
            {/* <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                Book Recommendation System
              </h3>
              <p className="text-gray-400 mb-4">
                A functional Book recommendation system using Django Framework
                with kNN. Provides personalized book recommendation based on
                user preferences and historical data.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Django", "kNN", "SQLite"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-cyan-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/SaubhagyaSapkota/Book-recommendation-System/tree/master"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div> */}

            {/* 5) Note */}
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Quick Note</h3>
              <p className="text-gray-400 mb-4">
                <li>
                  A simple application for taking simple notes developed using
                  MERN stack.
                </li>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "ExpressJs", "MongoDB", "NodeJS"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-blue-500/10 text-cyan-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/SaubhagyaSapkota/Quick-Note-MERN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>

          {/*  Small Projects Section */}
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent text-center">
            Small Projects
          </h2>

          <div
            className={`flex flex-wrap justify-center gap-6 ${
              smallProjects.length <= 2
                ? "justify-center"
                : "justify-start md:justify-center"
            }`}
          >
            {smallProjects.map((proj, i) => (
              <div
                key={i}
                className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] p-5 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_4px_16px_rgba(236,72,153,0.2)] transition-all"
              >
                <h3 className="text-lg font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-400 mb-3">{proj.desc}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-purple-300 transition-colors"
                >
                  View →
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
