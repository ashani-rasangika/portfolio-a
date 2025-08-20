import React from "react";
import { Briefcase, GraduationCap, Code } from "lucide-react";

const About = () => {
  const workExperience = [
    {
      company: "Neura IT (formerly FagginApps Pvt Ltd)",
      position: "Associate Software Engineer",
      period: "Aug 2024 - Oct 2024",
      website: "https://www.neurait.com/",
      description:
        "As an Associate Software Engineer, I worked on various full-stack projects using Next.js, Node.js, Express.js, MongoDB. I led small-scale feature implementations, supported junior developers, and ensured high code quality and performance throughout the development lifecycle, following Agile methodologies.",
      type: "FULL TIME",
      logo: "https://i.ibb.co/yBdG5dqr/neurait.png",
    },
    {
      company: "Neura IT (formerly FagginApps Pvt Ltd)",
      position: "Software Engineer Intern",
      period: "Feb 2024 - Aug 2024",
      website: "https://www.neurait.com/",
      description:
        "As an Intern Software Engineer, I contributed to full-stack application development using Next.js, Node.js, Express.js, MongoDB, and TypeScript. I gained hands-on experience in building user interfaces with Tailwind CSS, managing assets via Cloudinary, and collaborating in an Agile environment with regular sprint planning and reviews.",
      type: "FULL TIME",
      logo: "https://i.ibb.co/yBdG5dqr/neurait.png",
    },
  ];

  const education = [
    {
      degree:
        "BSc (Hons) in Information Technology, Specializing in Software Engineering",
      institution:
        "Sri Lanka Institute of Information Technology (SLIIT), Malabe",
      period: "February 2021 - March 2025",
      description:
        "Comprehensive four-year degree program focused on core software engineering principles, including software development, system design, database management, and agile methodologies. Gained hands-on experience through academic projects and industry training.",
      achievements: ["Graduated with Second Class Honours (Lower Division)"],
      logo: "https://i.ibb.co/k2NvThT4/SLIIT-Logo-Crest.png",
    },
    {
      degree: "Secondary and Advanced Level Education",
      institution: "Girls' High School, Kandy",
      period: "2010 January - 2019 December",
      description:
        "Completed General Certificate of Education Ordinary Level (O/L) and pursued Advanced Level (A/L) education in the Science stream.",
      achievements: [
        "G.C.E. A/L Results(2019) – Biology: B, Chemistry: S, Physics: S, General English: A",
        "G.C.E. O/L Results(2015) – English: A, Mathematics: A, Total: 7 A’s, 2 B’s",
        "President of SCM –  A Committee Member of School Senior Prefect Board, 2016–2017",
        "Committee Member – Astronomical Society, 2017",
      ],
      logo: "https://i.ibb.co/gGDKZ1x/scllogo.jpg",
    },
  ];

  const techStack = {
    frontend: [
      {
        name: "React.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "from-blue-400 to-cyan-400",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "from-yellow-400 to-yellow-500",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "from-black to-gray-700",
      },

      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "from-blue-500 to-blue-600",
      },
      {
        name: "Vue.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        color: "from-green-400 to-green-500",
      },
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "from-orange-400 to-orange-500",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "from-blue-400 to-blue-500",
      },
      {
        name: "Tailwind",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        color: "from-cyan-400 to-cyan-500",
      },
      {
        name: "Bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        color: "from-purple-400 to-purple-500",
      },
    ],
    backend: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "from-green-500 to-green-600",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "from-blue-500 to-yellow-400",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "from-gray-600 to-gray-700",
      },
      {
        name: "Django",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        color: "from-green-600 to-green-700",
      },
      {
        name: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        color: "from-indigo-500 to-purple-600",
      },
      {
        name: ".NET",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
        color: "from-purple-600 to-purple-800",
      },

      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        color: "from-orange-500 to-red-500",
      },
      {
        name: "C#",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        color: "from-purple-500 to-purple-600",
      },
    ],
    database: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "from-green-500 to-green-600",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        color: "from-blue-500 to-orange-400",
      },
      {
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        color: "from-red-500 to-red-600",
      },
      {
        name: "SQLite",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
        color: "from-gray-500 to-gray-600",
      },
      {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        color: "from-yellow-400 to-orange-500",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        color: "from-blue-600 to-blue-700",
      },
    ],
    tools: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "from-orange-500 to-red-500",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        color: "from-blue-400 to-blue-500",
      },
      {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        color: "from-orange-400 to-yellow-500",
      },
      {
        name: "VS Code",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        color: "from-blue-500 to-blue-600",
      },
      {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "from-purple-400 to-pink-400",
      },
      {
        name: "Postman",
        logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        color: "from-orange-500 to-orange-600",
      },
      {
        name: "Linux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        color: "from-gray-700 to-black",
      },
      {
        name: "GraphQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        color: "from-pink-500 to-purple-500",
      },
    ],
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, experience, and skills
          </p>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl blur-xl animate-pulse"></div>
              <div
                className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-500/5 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white">Who Am I?</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
                  Hello! I'm Ashani Rasangika Dewmini. I'm a passionate
                  full-stack developer with expertise in creating digital
                  solutions that make a difference. I specialize in building
                  scalable web applications using modern technologies and love
                  working with cutting-edge frameworks.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
                  As a full-stack developer, I have experience with both
                  frontend and backend technologies, allowing me to create
                  complete web solutions from concept to deployment. When I'm
                  not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge
                  with the developer community.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-80 h-82 mx-auto mb-4 p-1 bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/30 rounded-2xl">
                    <div className="w-full h-full overflow-hidden rounded-xl">
                      <img
                        src="https://i.ibb.co/8Lbh44cN/PAP08143.jpg"
                        alt="Ashani"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-blue-400" size={32} />
            <h3 className="text-3xl font-bold text-white">
              My Work Experience
            </h3>
          </div>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div
                key={index}
                className="flex items-start gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <a
                  href={job.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
                >
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-full h-full object-cover"
                  />
                </a>

                <div className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 p-[1px] rounded-2xl transition transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 ml-4">
                  <div className="bg-gray-900 rounded-2xl p-6 h-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {job.position}
                        </h4>
                        <p className="text-blue-300 font-semibold">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2 mt-2 md:mt-0">
                        <span className="text-gray-300 font-medium">
                          {job.period}
                        </span>
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-10 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute top-32 right-32 w-3 h-3 bg-purple-400/30 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-40 left-40 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-20 right-20 w-4 h-4 bg-pink-400/30 rounded-full animate-pulse"
              style={{ animationDelay: "3s" }}
            ></div>

            <div
              className="absolute top-1/4 left-8 w-6 h-6 border border-blue-400/20 rotate-45 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-1/2 right-12 w-8 h-8 border border-purple-400/20 rounded-full animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-16 w-5 h-5 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rotate-12 animate-pulse"
              style={{ animationDelay: "2.5s" }}
            ></div>

            <div
              className="absolute top-20 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "0.8s" }}
            ></div>
            <div
              className="absolute bottom-32 left-1/3 w-48 h-48 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "1.8s" }}
            ></div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-12 relative z-10">
            <h3 className="text-3xl font-bold text-white">
              MY{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                EDUCATIONAL
              </span>{" "}
              BACKGROUND
            </h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/20"></div>

            <div className="space-y-8 relative z-10">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-8 animate-fade-in"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-blue-500 z-10 overflow-hidden flex-shrink-0 shadow-lg shadow-blue-500/50">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div
                      className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-pulse"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    ></div>
                  </div>

                  <div className="flex-1 relative">
                    <div
                      className="absolute -inset-2 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl animate-pulse"
                      style={{ animationDelay: `${index * 0.7}s` }}
                    ></div>
                    <div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-pulse"
                      style={{ animationDelay: `${index * 0.9}s` }}
                    ></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-pulse"
                      style={{ animationDelay: `${index * 1.1}s` }}
                    ></div>

                    <div className="relative bg-gray-800/80 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                      <div className="mb-4">
                        <span className="text-blue-400 font-bold text-lg">
                          {edu.period}
                        </span>
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3 leading-tight">
                        {edu.institution}
                      </h4>
                      <p className="text-blue-300 font-semibold mb-4 text-lg">
                        {edu.degree}
                      </p>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* ACHIEVEMENTS LIST */}
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="space-y-3 mt-4">
                          {edu.achievements.map((ach, achIdx) => (
                            <div
                              key={achIdx}
                              className="flex items-start gap-3 p-4 bg-blue-500/10 rounded-lg border-l-4 border-blue-400 relative"
                            >
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                              <p className="text-blue-200 font-medium">{ach}</p>
                              <div
                                className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-transparent rounded-lg animate-pulse"
                                style={{
                                  animationDelay: `${
                                    index * 1.3 + achIdx * 0.2
                                  }s`,
                                }}
                              ></div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Code className="text-cyan-400" size={32} />
            <h3 className="text-3xl font-bold text-white">Technology Stack</h3>
          </div>

          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
              Frontend
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-9 gap-4">
              {techStack.frontend.map((tech, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-2 p-2`}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-white text-sm text-center font-medium">
                    {tech.name}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-green-400 mb-6 text-center">
              Backend
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {techStack.backend.map((tech, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-2 p-2`}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-white text-sm text-center font-medium">
                    {tech.name}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-purple-400 mb-6 text-center">
              Database
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {techStack.database.map((tech, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-2 p-2`}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-white text-sm text-center font-medium">
                    {tech.name}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-semibold text-orange-400 mb-6 text-center">
              Tools & Others
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {techStack.tools.map((tech, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-2 p-2`}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-white text-sm text-center font-medium">
                    {tech.name}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
