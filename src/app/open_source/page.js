"use client"

import { Github, Code2, GitFork, Star, BookOpen, Users2, ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const OpenSourcePage = () => {
  const projects = [
    {
      name: "Secure Transaction SDK",
      description: "Open-source library for secure financial transactions",
      stars: 2458,
      forks: 432,
      contributors: 56,
      tech: ["TypeScript", "Rust", "WebAssembly"],
      license: "Apache 2.0",
      link: "https://github.com/ubs/secure-transaction-sdk"
    },
    {
      name: "Banking UI Components",
      description: "Accessible React components for financial applications",
      stars: 1567,
      forks: 289,
      contributors: 42,
      tech: ["React", "Tailwind CSS", "Storybook"],
      license: "MIT",
      link: "https://github.com/ubs/banking-ui-components"
    }
  ];

  const contributors = [
    { name: "Alex Chen", contributions: 128, avatar: "/images/opensource/contributor1.jpg" },
    { name: "Maria Gonzalez", contributions: 98, avatar: "/images/opensource/contributor2.jpg" },
    { name: "Raj Patel", contributions: 76, avatar: "/images/opensource/contributor3.jpg" },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Code2 className="h-12 w-12 text-white" />
              <ShieldCheck className="h-12 w-12 text-white ml-4" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Open Banking Innovation</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Collaborative financial technology built with security and transparency
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#projects"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Projects
              </a>
              <a
                href="#contribute"
                className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contribute
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="projects">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Github className="text-blue-600" />
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {project.license}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-gray-500">
                  <Star className="h-4 w-4" /> {project.stars}
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <GitFork className="h-4 w-4" /> {project.forks}
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Users2 className="h-4 w-4" /> {project.contributors}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                View on GitHub <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contribution Section */}
      <div className=" py-16" id="contribute">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <BookOpen className="text-blue-600" />
            Contribution Guidelines
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-3">Security First</h3>
              <p className="text-gray-600">
                All contributions must follow our secure coding practices and undergo rigorous security reviews.
              </p>
            </div>

            <div className="p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-3">Getting Started</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Sign our Contributor License Agreement (CLA)</li>
                <li>Fork the repository</li>
                <li>Submit a pull request for review</li>
              </ul>
            </div>

            <div className="p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-3">Top Contributors</h3>
              <div className="flex items-center gap-4">
                {contributors.map((contributor, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src={contributor.avatar}
                      alt={contributor.name}
                      width={48}
                      height={48}
                      className="rounded-full mb-1"
                    />
                    <p className="text-sm font-medium">{contributor.name}</p>
                    <p className="text-xs text-gray-500">{contributor.contributions} commits</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="bg-gray-800 m-10 rounded-3xl py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShieldCheck className="h-12 w-12 text-gray-100 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Regulatory Compliance</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              All open source projects adhere to global financial regulations including GDPR, PSD2, 
              and PCI DSS requirements. Security audits are performed quarterly.
            </p>
          </div>
        </div>
      </div>
      <section>
          <div className="flex gap-10 flex-col justify-center mt-20 items-center text-center">
          
          <div className="flex gap-4 justify-center items-center">
            <a href="/mail"> <img src="/assets/mail.png" className=" h-16 " /></a>
             <a href="/drive"><img src="/assets/drive.png" className=" h-16" /></a>
             <a href="/meet"><img src="/assets/meet.png" className=" h-16" /></a>
             <a href="/calendar"><img src="/assets/calendar.png" className=" h-16" /></a>
             <a href="/contacts"><img src="/assets/contacts.png" className=" h-16" /></a>
             <a href="/task"><img src="/assets/task.png" className=" h-16" /></a>
             <a href="/docs"><img src="/assets/docs.png" className=" h-16" /></a>
             <a href="/sheets"><img src="/assets/sheets.png" className=" h-16" /></a>
             <a href="/slides"><img src="/assets/slides.png" className=" h-16" /></a>
             <a href="/pad"><img src="/assets/pad.png" className=" h-16" /></a>
             <a href="/forms"><img src="/assets/forms.png" className=" h-16" /></a>
            </div>
             
              <div
                style={{
                  fontFamily: "arial",
                }}
                className="flex flex-col justify-center py-10 items-center text-gray-700"
              >
                <p className="text-4xl font-bold font-sans m-0 ">
                Work without Compromise  <br />with  our <span className="text-blue-600">Work Tools</span> </p>
                <small className="font-sans text-xl text-gray-400 ">
                <p>Secure, Unified, Ethical</p>
                </small>
                <a
            href="/signup"
            className="px-5 mt-10 py-2.5 bg-blue-600 hover:bg-blue-800 text-white font-medium rounded-md transition-all 
                     shadow-sm hover:shadow-md"
          >
            Create Free Account ✨
          </a>
              </div>
            </div>
         
        </section>
    </div>
  );
};

export default OpenSourcePage;