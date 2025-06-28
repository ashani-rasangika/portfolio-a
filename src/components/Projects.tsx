import React, { useState } from "react";
import { ExternalLink, Github, X, Calendar, Users, Code } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "FinGuard – Personal Finance Tracker",
      category: "personal",
      description:
        "FinGuard is a personal finance tracking web application designed to help users manage income, expenses, and budgeting efficiently. It features intuitive dashboards, category-based transaction tracking, and visual insights to promote better financial decision-making.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://i.ibb.co/1fM3mfx3/finguard.png",
      liveLink: "#",
      githubLink: "#",
      duration: "",
      team: "Solo Project",
      features: [
        "User Authentication & Secure Login",
        "Add & Categorize Income and Expenses",
        "Interactive Financial Charts & Insights",
        "Responsive Dashboard Interface",
      ],
    },

    {
      title:
        "Todly - Mobile Application (Research Project)",
      category: "university",
      description:
        "In my research project, I developed a smart toddler monitoring system aimed at enhancing child safety through real-time object detection and alert mechanisms. As the team leader, I applied both software engineering and machine learning techniques to create an innovative solution that detects potentially harmful objects or situations and notifies caregivers instantly. This work not only showcases my technical and leadership skills but also reflects my commitment to building impactful technology that prioritizes child safety and well-being.",
      technologies: [
        "Flutter",
        "Flask",
        "Machine Learning",
        "Artificial Intelligence",
        "GitHub",
      ],
      image: "https://i.ibb.co/DH6ZvpRq/picture4.png",
      liveLink: "https://todlyresearch.web.app/",
      githubLink: "",
      duration: "12 months",
      team: "Team of 4 (Academic) – Project Leader",
      features: [
        "Real-Time Object Detection Using Machine Learning",
        "Instant Alert Notifications to Caregivers",
        "Smart Threat Identification (e.g., Harmful Objects)",
        "Multimodal Monitoring Interface",
        "Mobile-Friendly Monitoring Application",
        "AI-Powered Safety & Behavior Analysis",
      ],
    },
    {
      title: "COLLETTE - E-Commerce Platform",
      category: "university",
      description:
        "A multi-role e-commerce platform for clothing and footwear, featuring real-time order tracking, inventory management, and personalized product recommendations across web and mobile apps.",
      technologies: [
        "React.js",
        "Express.js",
        "ASP.NET Web API",
        "Kotlin",
        "MongoDB",
        "C#",
        ".NET Framework",
        "Android",
      ],
      image: "/lovable-uploads/08a29317-1706-45e3-8ebf-f4ce0078db39.png",
      liveLink: "#",
      githubLink: "https://github.com/ashani-rasangika/collette",
      duration: "2 months",
      team: "Team of 4 (Academic)",
      features: [
        "Multi-role Access (Admin, Vendor, Support)",
        "Real-time Order Tracking",
        "Automated Inventory Updates",
        "Vendor Reviews & Ratings",
        "Personalized Recommendations",
      ],
    },
    {
      title: "DevMind - JavaScript IDE with AI",
      category: "university",
      description:
        "An AI-enhanced JavaScript IDE built with the MERN stack. Features include real-time code feedback, a virtual mentor for learning support, and structured project organization tools.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "GitHub"],
      image: "/lovable-uploads/7b3b42c2-ecc2-4902-9f6d-f73d90048f81.png",
      liveLink: "#",
      githubLink: "https://github.com/ashani-rasangika/IDEWithAI",
      duration: "3 months",
      team: "Team of 4 (Academic) – Project Leader",
      features: [
        "AI Virtual Mentor",
        "Real-time Code Feedback",
        "Folder-based Project Structure",
        "Collaborative Development",
        "User-friendly Coding Interface",
      ],
    },
    {
      title: "Plustik – Waste Management App",
      category: "university",
      description:
        "A Flutter-based mobile app promoting eco-friendly waste management. Features include waste pickup scheduling, loyalty rewards, local events calendar, and smart notifications.",
      technologies: ["Flutter", "Firebase", "Dart", "GitHub", "Figma"],
      image: "/lovable-uploads/cc159a01-7791-4c5b-a22e-3f9a5727071f.png",
      liveLink: "#",
      githubLink: "https://github.com/ashani-rasangika/plustik",
      duration: "4 months",
      team: "Team of 4 (Academic) – Project Leader",
      features: [
        "Waste Pickup Scheduling",
        "Loyalty Point System",
        "Local Events Calendar",
        "Reminder & Notification System",
        "Eco-friendly Waste Categorization",
      ],
    },
    {
      title: "HerbMart – Ayurvedic E-Commerce Platform",
      category: "university",
      description:
        "An online marketplace for Ayurvedic and herbal products, built with microservices architecture. Offers secure payments, seller support, and a user-friendly interface for buyers and sellers.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Docker",
        "Kubernetes",
      ],
      image: "/lovable-uploads/af267d21-88a1-4a78-b51c-ad7889b47afe.png",
      liveLink: "#",
      githubLink: "https://github.com/ashani-rasangika/-CSSE_WE_27-DS",
      duration: "4 months",
      team: "Team of 4 (Academic)",
      features: [
        "Microservices Architecture",
        "Secure Payment Integration",
        "Admin Dashboard",
        "Product & Seller Management",
        "Scalable Infrastructure with Docker & Kubernetes",
      ],
    },
    {
      title: "PLANNIFY – Tourism Guide Web App",
      category: "university",
      description:
        "A tourism management web app designed to help users plan trips across Sri Lanka. Features include location-based filtering and personalized itinerary generation based on user preferences.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Bootstrap",
        "GitHub",
        "JavaScript",
      ],
      image: "/lovable-uploads/c61e7dab-1448-482e-a42d-7d91b7f4d61a.png",
      liveLink: "#",
      githubLink: "https://github.com/ashani-rasangika/CSSE_WE_27-AF",
      duration: "5 months",
      team: "Team Project (Academic)",
      features: [
        "Personalized Travel Itineraries",
        "Province & District Filtering",
        "Tourist Place Management Module",
        "Dynamic UI for Travel Planning",
        "User-friendly Travel Experience",
      ],
    },
    {
      title: "Pinky's Web Application",
      category: "internship",
      description:
        "During my internship, I developed Pinky's, an e-commerce web application focused on clothing retail. I contributed to both the frontend and backend, ensuring a seamless and responsive shopping experience. This project strengthened my full-stack development skills and gave me hands-on experience in optimizing application performance, managing data flow, and building user-friendly interfaces for a commercial platform.",
      technologies: [
        "Next.js",
        "Express.js",
        "Node.js",
        "Tailwind CSS",
        "Bootstrap",
        "Redux",
      ],
      image: "https://i.ibb.co/39RLZhCz/Picture3.png",
      // liveLink: "#",
      // githubLink: "#",
      duration: "5 months",
      team: "Team of 5",
      features: [
        "User Authentication & Authorization",
        "Product Catalog with Filtering & Search",
        "Shopping Cart & Checkout Functionality",
        "Responsive User Interface",
        "Admin Dashboard for Product Management",
        "Order History and Tracking",
      ],
    },
    {
      title: "PiumiSkin – E-Commerce Web App",
      category: "internship",
      description:
        "During my internship, I also worked on PiumiSkin, an e-commerce application focused on selling skincare products and owned by a well-known Sri Lankan actress. The platform was designed with mobile responsiveness in mind, ensuring a smooth shopping experience across devices. Users could browse and filter products by category, add items to their cart, and complete purchases with ease. This project gave me valuable insight into building user-centric e-commerce solutions and reinforced the importance of adapting to real client requirements throughout the development process.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Bootstrap",
        "GitHub",
        "JavaScript",
      ],
      image: "https://i.ibb.co/HT8JsKpS/Picture2.png",
      // liveLink: "#",
      // githubLink: "#",
      duration: "6 months",
      team: "Team of 5",
      features: [
        "Mobile-Responsive Design",
        "Category-Based Product Filtering",
        "Add-to-Cart & Checkout Functionality",
        "Secure Payment Integration",
        "Order Confirmation & Notifications",
        "User-Friendly Product Browsing Experience",
      ],
    },
    {
      title: "ARG Workforce – Modern Recruitment Platform",
      category: "internship",
      description:
        "During my internship, I contributed to ARG Workforce, a recruitment-focused web application designed to connect job seekers with employers. The platform enables users to create profiles, search for job opportunities by category, and engage in discussions by asking questions related to the job search process. It was built with mobile responsiveness in mind, ensuring a smooth experience across all devices. This project was a great opportunity to strengthen my full-stack development skills while also gaining experience in understanding client needs and translating them into effective, real-world solutions.",
      technologies: [
        "Next.js",
        "Express.js",
        "Node.js",
        "Tailwind CSS",
        "Bootstrap",
        "Redux",
      ],
      image: "https://i.ibb.co/7tbD6d9R/Picture1.png",
      // liveLink: "#",
      // githubLink: "#",
      duration: "5 months",
      team: "Team of 5",
      features: [
        "User Authentication & Role-Based Access",
        "Job Listing & Category-Based Search",
        "Profile Creation for Job Seekers & Employers",
        "Responsive Design Across Devices",
        "Job Application Tracking",
        "Interactive Q&A Section for Career Discussions",
      ],
    },
  ];

  const getProjectsByCategory = (category) => {
    if (category === "all") return projects;
    return projects.filter((project) => project.category === category);
  };

  const ProjectCard = ({ project }) => (
    <div
      onClick={() => setSelectedProject(project)}
      className="group bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.liveLink}
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
          >
            <ExternalLink size={16} />
          </a>
          <a
            href={project.githubLink}
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-colors duration-200"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xl font-semibold text-white">{project.title}</h4>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.category === "personal"
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : project.category === "internship"
                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                : project.category === "university"
                ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
            }`}
          >
            {project.category.charAt(0).toUpperCase() +
              project.category.slice(1)}
          </span>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-gray-400 text-sm px-3 py-1">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                project.category === "personal"
                  ? "bg-green-500/20 text-green-300 border border-green-500/30"
                  : project.category === "internship"
                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  : project.category === "university"
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
              }`}
            >
              {project.category.charAt(0).toUpperCase() +
                project.category.slice(1)}
            </span>
          </div>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-blue-400" />
                Project Details
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">{project.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Team:</span>
                  <span className="text-white">{project.team}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Users size={20} className="text-purple-400" />
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Code size={20} className="text-green-400" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.category !== "internship" && (
            <div className="flex gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my work across different categories - from personal projects
            to professional internships
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-96 mx-auto mb-12 bg-gray-800/50 border border-gray-700/50">
            <TabsTrigger
              value="all"
              className="text-white data-[state=active]:bg-blue-600"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="personal"
              className="text-white data-[state=active]:bg-green-600"
            >
              Personal
            </TabsTrigger>
            <TabsTrigger
              value="internship"
              className="text-white data-[state=active]:bg-blue-600"
            >
              Internship
            </TabsTrigger>
            <TabsTrigger
              value="university"
              className="text-white data-[state=active]:bg-purple-600"
            >
              University
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="all"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getProjectsByCategory("all").map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </TabsContent>

          <TabsContent
            value="personal"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getProjectsByCategory("personal").map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </TabsContent>

          <TabsContent
            value="internship"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getProjectsByCategory("internship").map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </TabsContent>

          <TabsContent
            value="university"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getProjectsByCategory("university").map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </TabsContent>
        </Tabs>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
