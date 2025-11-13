import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const forntendSkills = [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "React",
    "React Native",
  ];

  const backendSkills = [
    "Node.js",
    "ExpressJs",
    "MongoDB",
    "RESTful APIs",
    "Django",
  ];

  const languages = ["Python", "JavaScript", "C", "Cpp", "TypeScript"];

  const tools = [
    "Git",
    "GitHub",
    "Postman",
    "Compass",
    "Vercel",
    "Figma",
    "Jira"
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {forntendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.E. in Computer </strong> - Tribhuwan University
                  (2021-2025)
                </li>
                <li>
                  Relevant Coursework: C Programming, CPP, Data Structures and
                  Algorithms, Object Oriented Programming, Computer Network,
                  DataBase Management, Web Development, AL/ML...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer Intern at Upachaar Nepal Pvt. Ltd (June
                    2025 - September 2025){" "}
                  </h4>
                  <li>
                    Developed and maintained RESTful CURD APIs for various
                    healthcare services.
                  </li>
                  <li>
                    Implemented authentication and authorization using JWT and
                    role-based access control to ensure secure user access.
                  </li>
                  <li>
                    Integrated APIs with database models (e.g.MongoDB) ensuring
                    seamless data flow and optimized query performance.
                  </li>
                  <li>
                    Collaborated with team members using version control systems
                    such as Git and GitHub to organize modifications and assign
                    tasks.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
