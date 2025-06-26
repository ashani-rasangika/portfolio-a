import React, { useState } from 'react';
import { ExternalLink, Github, X, Calendar, Users, Code } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "personal",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard with real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      liveLink: "#",
      githubLink: "#",
      duration: "3 months",
      team: "Solo Project",
      features: ["User Authentication", "Payment Integration", "Admin Dashboard", "Real-time Updates"]
    },
    {
      title: "Task Management System",
      category: "internship",
      description: "A collaborative task management application developed during my internship at Tech Solutions. Features real-time updates, drag-and-drop functionality, and team collaboration tools.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      liveLink: "#",
      githubLink: "#",
      duration: "6 months",
      team: "Team of 4",
      features: ["Real-time Collaboration", "Drag & Drop", "Team Management", "Progress Tracking"]
    },
    {
      title: "Weather Dashboard",
      category: "personal",
      description: "A responsive weather dashboard that displays current weather conditions and forecasts for multiple locations with beautiful data visualizations and historical data analysis.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      liveLink: "#",
      githubLink: "#",
      duration: "2 months",
      team: "Solo Project",
      features: ["Multi-location Support", "Data Visualization", "Historical Data", "Responsive Design"]
    },
    {
      title: "E-Commerce Dashboard",
      category: "university",
      description: "A comprehensive e-commerce management dashboard developed as a university project. Features powerful analytics tools, inventory management, and intuitive interfaces for managing online clothing stores.",
      technologies: ["React", "Spring Boot", "MySQL", "Chart.js"],
      image: "/lovable-uploads/08a29317-1706-45e3-8ebf-f4ce0078db39.png",
      liveLink: "#",
      githubLink: "#",
      duration: "4 months",
      team: "Team of 3",
      features: ["Analytics Dashboard", "Inventory Management", "Order Processing", "User Management"]
    },
    {
      title: "AI-Powered Coding IDE",
      category: "university",
      description: "An innovative JavaScript IDE with AI assistance developed for university coursework. Features code completion, syntax highlighting, and intelligent suggestions for beginner programmers.",
      technologies: ["React", "TypeScript", "Node.js", "OpenAI API"],
      image: "/lovable-uploads/7b3b42c2-ecc2-4902-9f6d-f73d90048f81.png",
      liveLink: "#",
      githubLink: "#",
      duration: "5 months",
      team: "Team of 4",
      features: ["AI Code Assistance", "Syntax Highlighting", "Real-time Collaboration", "Beginner-friendly Interface"]
    },
    {
      title: "Waste Management Mobile App",
      category: "university",
      description: "A comprehensive waste management mobile application promoting environmental sustainability. Features waste tracking, recycling points system, and educational content about proper waste disposal.",
      technologies: ["React Native", "Firebase", "Node.js", "Google Maps API"],
      image: "/lovable-uploads/cc159a01-7791-4c5b-a22e-3f9a5727071f.png",
      liveLink: "#",
      githubLink: "#",
      duration: "6 months",
      team: "Team of 5",
      features: ["Waste Tracking", "Points System", "Location Services", "Educational Content"]
    },
    {
      title: "HerbMart E-Commerce Platform",
      category: "university",
      description: "A specialized e-commerce platform for herbal products developed as a university project. Features user authentication, product management, and secure payment integration with Google Sign-in.",
      technologies: ["React", "Firebase", "Stripe", "Google Auth"],
      image: "/lovable-uploads/af267d21-88a1-4a78-b51c-ad7889b47afe.png",
      liveLink: "#",
      githubLink: "#",
      duration: "4 months",
      team: "Team of 3",
      features: ["Product Catalog", "User Authentication", "Secure Payments", "Admin Dashboard"]
    },
    {
      title: "Travel Planning Platform",
      category: "university",
      description: "A comprehensive travel planning platform for Sri Lankan tourism developed as a university project. Features safe travel options, secure payments, loyalty points system, and 24/7 customer support.",
      technologies: ["React", "Express", "MongoDB", "Payment Gateway"],
      image: "/lovable-uploads/c61e7dab-1448-482e-a42d-7d91b7f4d61a.png",
      liveLink: "#",
      githubLink: "#",
      duration: "5 months",
      team: "Team of 4",
      features: ["Travel Planning", "Secure Booking", "Loyalty Program", "Customer Support"]
    },
    {
      title: "Social Media Analytics",
      category: "internship",
      description: "Analytics dashboard for social media management developed during internship. Features data visualization, scheduling, and multi-platform integration with detailed reporting.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      liveLink: "#",
      githubLink: "#",
      duration: "5 months",
      team: "Team of 5",
      features: ["Multi-platform Integration", "Data Visualization", "Automated Scheduling", "Performance Reports"]
    }
  ];

  const getProjectsByCategory = (category) => {
    if (category === 'all') return projects;
    return projects.filter(project => project.category === category);
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
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.category === 'personal' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
            project.category === 'internship' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
            project.category === 'university' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
            'bg-gray-500/20 text-gray-300 border border-gray-500/30'
          }`}>
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>
        
        <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">{project.description}</p>
        
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
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              project.category === 'personal' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
              project.category === 'internship' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
              project.category === 'university' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
              'bg-gray-500/20 text-gray-300 border border-gray-500/30'
            }`}>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>
          
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">{project.description}</p>
          
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
                  <li key={index} className="text-gray-300 flex items-center gap-2">
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
          
          <div className="flex gap-4">
            <a 
              href={project.liveLink}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
            <a 
              href={project.githubLink}
              className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium"
            >
              <Github size={18} />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my work across different categories - from personal projects to professional internships
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-96 mx-auto mb-12 bg-gray-800/50 border border-gray-700/50">
            <TabsTrigger value="all" className="text-white data-[state=active]:bg-blue-600">All</TabsTrigger>
            <TabsTrigger value="personal" className="text-white data-[state=active]:bg-green-600">Personal</TabsTrigger>
            <TabsTrigger value="internship" className="text-white data-[state=active]:bg-blue-600">Internship</TabsTrigger>
            <TabsTrigger value="university" className="text-white data-[state=active]:bg-purple-600">University</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getProjectsByCategory('all').map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </TabsContent>

          <TabsContent value="personal" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getProjectsByCategory('personal').map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </TabsContent>

          <TabsContent value="internship" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getProjectsByCategory('internship').map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </TabsContent>

          <TabsContent value="university" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getProjectsByCategory('university').map((project, index) => (
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
