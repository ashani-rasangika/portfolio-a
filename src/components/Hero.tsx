import React from "react";
import { Download, Linkedin, Github, Facebook } from "lucide-react";
import TypingAnimation from "./TypingAnimation";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
              WELCOME TO MY PORTFOLIO
            </div>

            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                HI! I'M{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  ASHANI
                </span>
              </h1>
              <h2 className="text-3xl lg:text-5xl font-bold mt-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  I'M A{" "}
                  <TypingAnimation
                    texts={["FULL-STACK DEVELOPER", "TECH INNOVATOR"]}
                    speed={100}
                    deleteSpeed={75}
                    pauseTime={2000}
                    className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  />
                </span>
              </h2>
            </div>

            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Driven by curiosity and creativity, I enjoy turning ideas into
              meaningful and impactful outcomes. As a full-stack developer, I
              create complete web solutions from frontend to backend. With a
              strong focus on continuous learning, I believe in exploring new
              challenges to grow both personally and professionally. Let's
              connect and create something remarkable!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/Ashani_Dewmini_CV.pdf" download className="inline-block">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
                  <Download size={20} />
                  DOWNLOAD RESUME
                </button>
              </a>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ashani-rasangika/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:text-blue-400 hover:border-blue-400 transition-all duration-200 transform hover:scale-110"
                >
                  <FaLinkedinIn size={20} />
                </a>
                <a
                  href="https://github.com/IT21016820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:text-blue-400 hover:border-blue-400 transition-all duration-200 transform hover:scale-110"
                >
                  <FaGithub size={20} />
                </a>
                {/* <a
                  href="https://www.facebook.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:text-blue-400 hover:border-blue-400 transition-all duration-200 transform hover:scale-110"
                >
                  <FaFacebookF size={20} />
                </a> */}
              </div>
            </div>
          </div>

          {/* Right content - Animated Laptop Illustration */}
          <div className="relative animate-fade-in delay-500">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glowing orbs */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-xl opacity-70 animate-pulse delay-1000"></div>

              {/* Main illustration - Girl with laptop */}
              <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
                <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Animated laptop illustration */}
                  <div className="relative">
                    {/* Laptop base */}
                    <div className="w-64 h-4 bg-gray-700 rounded-lg transform perspective-1000 rotateX-15"></div>

                    {/* Laptop screen */}
                    <div className="w-64 h-40 bg-gray-800 rounded-t-lg border-4 border-gray-700 relative -mt-1">
                      {/* Screen content with typing animation */}
                      <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 rounded-sm p-4 flex flex-col">
                        <div className="flex gap-2 mb-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-400"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-blue-400/50 rounded w-3/4 animate-pulse"></div>
                          <div className="h-2 bg-purple-400/50 rounded w-1/2 animate-pulse delay-300"></div>
                          <div className="h-2 bg-cyan-400/50 rounded w-2/3 animate-pulse delay-600"></div>
                        </div>
                      </div>
                    </div>

                    {/* Person silhouette */}
                    <div className="absolute -right-8 -bottom-2 w-20 h-24 flex flex-col items-center">
                      {/* Head */}
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mb-1 animate-pulse"></div>
                      {/* Body */}
                      <div className="w-12 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg animate-pulse delay-500"></div>
                      {/* Arms reaching to laptop */}
                      <div className="absolute top-10 -left-2 w-6 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded transform -rotate-12 animate-pulse delay-700"></div>
                    </div>

                    {/* Floating code elements */}
                    <div className="absolute -top-8 -left-4 text-blue-400 text-sm opacity-70 animate-bounce">
                      {"<>"}
                    </div>
                    <div className="absolute -top-4 -right-8 text-purple-400 text-sm opacity-70 animate-bounce delay-1000">
                      {"</>"}
                    </div>
                    <div className="absolute top-8 -left-8 text-cyan-400 text-xs opacity-50 animate-pulse delay-1500">
                      {"{ }"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
