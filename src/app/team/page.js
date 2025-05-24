"use client"

import Image from 'next/image';
import { LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO',
      bio: 'Visionary leader with 15+ years experience in financial technology',
      image: '/images/team/ceo.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'CFO',
      bio: 'Financial strategist specializing in international banking operations',
      image: '/images/team/cfo.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Technology innovator in blockchain and secure transaction systems',
      image: '/images/team/cto.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
  ];

  return (
    <div className="min-h-screen  ">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center h-86  flex flex-col justify-center items-center bg-gray-800 p-10 mb-16">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">
            Our Leadership Team
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Meet the experienced professionals driving innovation in global banking solutions
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12  px-4 sm:px-6 lg:px-8 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Team Member Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Team Member Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <LinkedinIcon className="h-6 w-6" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label={`${member.name} Twitter`}
                  >
                    <TwitterIcon className="h-6 w-6" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <MailIcon className="h-6 w-6" />
                  </a>
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for talented individuals to join our growing team
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold">
            View Open Positions
          </button>
        </div>
        <section className="py-10 px-10 mt-10">
          <div className="flex flex-col h-86 gap-5 justify-center items-center bg-gray-800 py-20 rounded-lg rounded-t-[30px] rounded-b-[30px]">
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
            <p className="text-4xl font-semibold text-gray-100">
              Start a trial at free cost{" "}
            </p>
            <p className="px-4 py-2 bg-blue-600 rounded-md text-white cursor-pointer transition-transform duration-300 font-semibold hover:scale-110 font-bold">
              Create A Free Account
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamPage;