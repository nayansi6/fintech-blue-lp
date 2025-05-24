
// import * as framer from 'framer-motion';
// import { ArrowTopRightOnSquareIcon, PlayCircleIcon, SparklesIcon } from '@heroicons/react/24/solid';


// const Solutions = ()=>{
//   const departments = [
//     {
//       title: "Teams",
//       description: "Collaborate securely with encrypted messaging, file sharing, and project tools that ensure privacy and productivity.",
//       icon: "/icons/teams.svg",
//     },
//     {
//       title: "Legal",
//       description: "Safeguard sensitive case documents and communication with zero-knowledge encryption and granular access control.",
//       icon: "/icons/legal.svg",
//     },
//     {
//       title: "HR",
//       description: "Manage employee records, payroll, and onboarding documents with airtight confidentiality and compliance built-in.",
//       icon: "/icons/hr.svg",
//     },
//     {
//       title: "Finance",
//       description: "Protect financial reports, audits, and transactions with robust encryption and role-based permissions.",
//       icon: "/icons/finance.svg",
//     },
//     {
//       title: "Engineering",
//       description: "Ship products securely with encrypted repositories, shared environments, and internal documentation.",
//       icon: "/icons/engineering.svg",
//     },
//     {
//       title: "Sales",
//       description: "Close deals with peace of mind. Share proposals, contracts, and client data securely from any device.",
//       icon: "/icons/sales.svg",
//     },
//   ];

//     return (
//       <div>
//       <div className="bg-gray-100">
//       <section className="bg-gradient-to-br from-green-50 to-white py-24 px-6 md:px-20 relative overflow-hidden">
//     <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="md:w-1/2 z-10"
//       >
//         <h1 className="text-5xl font-bold text-gray-800 leading-tight">
//           End-to-End Encrypted <span className="text-green-600">Solutions</span> <br />
//           For a Surveillance-Free World
//         </h1>
//         <p className="mt-6 text-lg text-gray-700">
//           Empower your business with zero-knowledge, high-performance tools that protect your data from intrusions, trackers, and compromise — all hosted in a privacy-first infrastructure.
//         </p>
//         <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
//           Explore Our Solutions
//         </button>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         className="md:w-1/2 z-10"
//       >
//         <img src="/assets/solutions-hero.png" alt="Solutions Hero" className="w-full max-w-lg mx-auto" />
//       </motion.div>
//     </div>
//     <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-100 opacity-30 rounded-full -z-0 blur-2xl"></div>
//   </section>
//     <section className="py-24 px-6 md:px-20">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
//           Built for Every <span className="text-green-600">Department</span>
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {departments.map(({ title, description, icon }, i) => (
//             <div
//               key={i}
//               className="p-6 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition hover:scale-[1.02]"
//             >
//               <img src={icon} alt={title} className="h-12 mb-4" />
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>





"use client"

import { motion } from "framer-motion";
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import SvgSec from '@/components/svgsection';

const faqs = [
  { question: 'Can external participants join a call?', answer: 'Yes, they can join using the meeting link without a Google account.' },
  { question: 'How much does UBS Meet cost?', answer: 'UBS Meet has both free and premium plans depending on features and usage.' },
  { question: 'How do I access premium features?', answer: 'Sign in with a paid account to access premium features like recording, transcripts, and longer calls.' },
  { question: 'Is the meeting content secure?', answer: 'Yes, all content is encrypted in transit and at rest.' },
  { question: 'Is a third-party service required for dial-in access?', answer: 'No, UBS Meet provides integrated dial-in options in supported plans.' },
  { question: 'What video conferencing hardware works best with UBS Meet?', answer: 'Most webcams and headsets are compatible; Google-certified Meet hardware offers the best experience.' }
];



function Solutions() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };


  return (
    <div className="w-full bg-white flex flex-col px-10 py-5">
      {/* Header Section */}
      <div className="flex flex-col min-h-screen  bg-gray-900 md:flex-row items-center rounded-3xl justify-between py-6 px-20 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-full pr-20  z-10"
      >
        <h1 className="text-5xl font-bold text-gray-300 leading-tight">
          End-to-End Encrypted <span className="text-blue-400">Solutions</span> <br />
          For a Surveillance-Free World
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Empower your business with zero-knowledge, high-performance tools that protect your data from intrusions, trackers, and compromise — all hosted in a privacy-first infrastructure.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Explore Our Solutions
        </button>
      </motion.div>
    </div>

        {/* Right Visuals */}
        <div className="md:w-1/2 mt-10 p-2 md:mt-0 flex justify-center">
          <div className="relative w-[350px] h-[300px]">
            <img src="/assets/img2.jpg" alt="Main call" className="w-full rounded-lg shadow-lg" />
            <img src="/assets/video call p2.png" alt="User 1" className="absolute top-[-40px] right-[-30px] w-[150px] rounded-md shadow-md" />
            <img src="/assets/video call p4.png" alt="User 2" className=" absolute top-50 left-[295px] w-[150px] rounded-md shadow-md" />
          </div>
        </div>
      </div>

      <div className=" py-32 w-full h-auto flex  justify-around">

        <img src="/assets/img4.jpg" alt="Meeting Feature" className=" w-[400px] rounded-lg" />
     


    


        <div className="w-[400px] space-y-4 ">
          <h1 className="text-4xl text-gray-800  pr-[100px] leading-10 font-bold font bold text-left">
            Experience rich, collaborative meetings with UBS Meet
          </h1>
          <p className="text-gray-600 text-xl text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vero ipsa dignissimos adipisci provident sit perferendis mollitia omnis maxime vel? Lorem ipsum dolor sit amet.
          </p>
        </div>

      </div>





      <div className="w-full text-left h-auto py-16 flex  flex-col md:flex-row gap-17 items-center justify-center bg-white">

        {/* Left Text Section */}
        <div className=" w-[300px] flex flex-col space-y-6">
          <h1 className="text-4xl text-gray-800  leading-10 font-bold font bold text-left">
            Connect with others in more ways
          </h1>
          <p className="text-gray-600 text-lg max-w-md">
            Whether scheduled or spontaneous, in real-time calls or exchanging video messages, Google Meet helps you
            connect in the ways that work best for you.
          </p>
        </div>

        {/* Right Two Images */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center items-center">
          {/* Main image */}
          <img
            src="/assets/img2.jpg"
            alt="Main video preview"
            className="w-[320px] h-auto rounded-xl shadow-lg"
          />

          {/* Floating image */}
          <img
            src="/assets/img4.jpg"
            alt="Floating avatar"
            className="absolute top-[-30px] right-20 w-[120px] h-auto rounded-lg shadow-md border-4 border-white"
          />
        </div>
      </div>

      <div className="w-full h-auto py-36 px-4 md:px-16 flex flex-col-reverse gap-17 md:flex-row items-center justify-between bg-white gap-8">

        {/* Left Visual Side */}
        <div className="md:w-1/2 relative flex justify-center items-center mt-10 md:mt-0">
          {/* Main phone-style video call image */}
          <img
            src="/assets/img4.jpg"
            alt="Main video call"
            className="w-[50px] md:w-[200px] rounded-2xl shadow-lg z-10"
          />

          {/* Floating top-left image */}
          <img
            src="/assets/video.png"
            alt="Top user"
            className="absolute top-[-40px] left-[80px] z-50 w-[120px] h-auto rounded-lg shadow-md border-4 border-white"
          />

          {/* Floating bottom-right image */}
          <div className="absolute bottom-[-30px] z-50 right-[100px] text-center">
            <img
              src="/assets/img3.jpg"
              alt="Imani Ali"
              className="w-[100px] rounded-lg shadow-md border-4 border-white"
            />

          </div>
        </div>

        {/* Right Text Side */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl text-gray-800  pr-[100px] leading-10 font-bold font bold text-left">
            Meet on any device
          </h1>
          <p className="text-gray-600 text-lg max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veritatis id, nesciunt voluptate impedit eligendi!{' '}
            <a href="#" className="text-blue-600 underline">app store</a> and{' '}
            <a href="#" className="text-blue-600 underline">Play Store</a>. Or connect from your computer browser – no software install needed.
          </p>
        </div>

      </div>


      <div className="w-full py-20 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          {/* Feature 1 - Meet Longer */}
          <div className="space-y-4">
            <img
              src="/assets/video call p4.png"
              alt="Meet Longer"
              className="mx-auto w-[260px] rounded-lg shadow"
            />
            <div className="text-blue-600 text-sm font-medium flex justify-center items-center gap-1">
              <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">Premium feature</span>
              <span className="text-blue-400 text-xs">ℹ️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Meet longer</h3>
            <p className="text-gray-500">Hold group calls for up to 24 hours.</p>
          </div>

          {/* Feature 2 - Keep a Record */}
          <div className="space-y-4">
            <img
              src="/assets/img3.jpg"
              alt="Keep a Record"
              className="mx-auto w-[260px] rounded-lg shadow"
            />
            <div className="text-blue-600 text-sm font-medium flex justify-center items-center gap-1">
              <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">Premium feature</span>
              <span className="text-blue-400 text-xs">ℹ️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Keep a record</h3>
            <p className="text-gray-500">Use recordings and transcripts to capture what was discussed.</p>
          </div>

          {/* Feature 3 - Host Larger Meetings */}
          <div className="space-y-4">
            <img
              src="/assets/img2.jpg"
              alt="Host Larger"
              className="mx-auto w-[260px] rounded-lg shadow"
            />
            <div className="text-blue-600 text-sm font-medium flex justify-center items-center gap-1">
              <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">Premium feature</span>
              <span className="text-blue-400 text-xs">ℹ️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Host larger meetings</h3>
            <p className="text-gray-500">Add up to 1,000 participants.</p>
          </div>

        </div>
      </div>


      <div className='h-auto py-4'>
        <h1 className=' text-4xl text-center font-semibold text-gray-700'>
          Built for better conversations
        </h1>
        <p className=' text-center text-gray-400 text-xl'>
          Meet handles the details so that you can focus on connecting.

        </p>
      </div>

      <div className="w-full py-10 h-auto  px-14 md:px-16 flex flex-col md:flex-row items-center justify-between bg-white">

      {/* Left Visual Side */}
        <div className="md:w-2/3 relative h-auto py-10 flex gap-4">
          {/* Main video image */}
          <div className="relative">
            <img
              src="/assets/video call p4.png"
              alt="Main Speaker"
              className="w-[400px] h-auto rounded-xl shadow-md"
            />
            <span className="absolute bottom-2 left-3 text-white text-sm font-medium bg-black/60 px-2 py-1 rounded">
              David Guerra
            </span>

            {/* Caption box */}
            <div className="absolute bottom-[-70px] left-0 w-[320px] bg-white rounded-md shadow p-3 flex gap-2 items-start">
              <img
                src="/assets/video call p2.png"
                alt="Yasmin Neves"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-medium text-sm">Yasmin Neves</p>
                <p className="text-sm text-gray-600">
                  Hello everyone, I hope you are all well. I will be leading the roll call today.
                </p>
              </div>
            </div>
          </div>



        </div>

        {/* Right Text Side */}
        <div className="md:w-1/3 mt-16 md:mt-0">
          <ul className="space-y-6 text-left">
            <li className="text-lg text-gray-700">High-quality video</li>
            <li className="text-lg text-gray-700">Noise cancellation</li>
            <li>
              <p className="text-lg text-black font-semibold border-l-4 border-blue-600 pl-3">Live captions</p>
              <p className="text-sm text-gray-500 pl-3">
                View subtitles as participants speak, in real time.
              </p>
            </li>
          </ul>
        </div>
      </div>


      <div className="w-full py-30 h-auto px-4 md:px-16 flex flex-col md:flex-row items-start justify-between bg-white">

        {/* Left Text Content */}
        <div className="md:w-1/2 space-y-8 pl-4 relative">
          <div className="absolute top-0 left-0 h-full border-l-2 border-gray-200"></div>

          <div className="pl-4">
            <h2 className="text-lg font-medium text-gray-700">Collaborate together</h2>
          </div>

          <div className=" border-l-4 border-blue-600">
            <h2 className="text-lg font-bold text-black pl-2">Plan together</h2>
            <p className="text-gray-500 text-sm pl-2 pt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Itaque nisi magnam earum error quia eius!
            </p>
          </div>

          <div className="pl-4">
            <h2 className="text-lg font-medium text-gray-700">Ideate together</h2>
          </div>
        </div>

        {/* Right Visual Cards */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center">
          {/* Calendar Event Background */}
          <img

            src="/assets/img4.jpg"
            alt="Calendar Event"
            className="w-[300px] rounded-lg shadow-md"
          />

          {/* Floating Event Details */}
          <img
            src="/assets/Video_Call p.webp"
            alt="Meeting Details"
            className="absolute right-[-40px] top-[40px] w-[280px] rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className=' py-10'>
        <h1 className=' font-semibold text-3xl text-gray-700'>Do more <br /> with premimum features</h1>
        <p className='text-lg font-medium text-gray-400 '>Lorem ipsum, dolor sit amet <a href="www.example.com" className=' text-blue-600  underline underline-offset-4'>consectetur adipisicing </a>elit. Omnis persue voluptatum . <br /> Lorem ipsum dolor <a className=' text-blue-600 underline underline-offset-4 ' href="example.com">Premium</a> sit amet, consectetur adipisicing.</p>
      </div>
      <section>
 <div className="flex gap-5 py-10 justify-center items-center mb-20 px-5">

 <div className=" h-80 w-120 bg-gray-100 rounded-[20px]">
 <div>
 <p className="px-10 py-5 text-xl">Upload, share, and preview any file</p>
 <p className="px-5">UBSHQ is incorporated and headquartered in Switzerland, meaning your data is protected by some of the world's strictest privacy laws</p>
 </div>
 </div>
 <div className=" h-80 w-120 bg-gray-100 rounded-[20px]"> 
 <div> 
 <p className="px-10 py-5 text-xl">10GB free storage</p>
 <p className="px-5">With Easy Switch, you can quickly migrate from any email provider to UBSHQ Mail. Import your emails, labels, contacts, and calendars to UBSHQ Mail and set up automatic forwarding to receive future emails in your new encrypted inbox.</p>
 </div>
 </div>
 <div className=" h-80 w-120 bg-gray-100 rounded-[20px]">
 <div>
 <p className="px-10 py-5 text-xl">Decentralized IPFS Storage</p>
 <p className="px-5">All UBSHQ services are open source and independently audited for security. We also maintain open-source encryption libraries used by millions of people around the world.</p>
 </div>
 </div>
 <div className=" h-80 w-120 bg-gray-100 rounded-[20px]">
 <div>
 <p className="px-10 py-5 text-xl">Easily migrate with 1-click</p>
 <p className="px-5">UBSHQ Mail's end-to-end encryption and zero-access encryption ensure only you can see your emails. Not even Proton can view the content of your emails and attachments.</p>
 </div>
 </div>
 </div>
 </section>


 <div className="text-center py-10 mb-10 px-6 ">
  <h2 className="text-5xl font-bold text-gray-800 mb-6">
    Your Private Digital Life—Reclaimed
  </h2>
  <p className="text-lg text-gray-600 px-10 max-w-3xl mx-auto mb-6">
    UBS offers a human-centered alternative to surveillance-based tech. We believe privacy is not a privilege—it's a right. Every tool we build respects your boundaries, your choices, and your data.
  </p>
  <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
    Take back control with UBS: a fully encrypted suite for email, calendar, storage, meetings, and passwords—built for people who value freedom, not friction.
  </p>

  {/* Icons Row */}
  <div className="flex flex-wrap justify-center items-center gap-8">
    {[
      ['Mail', '/assets/mail.png'],
      ['Drive', '/assets/drive.png'],
      ['Calendar', '/assets/calendar.png'],
      ['Contacts', '/assets/contacts.png'],
      ['Task', '/assets/task.png'],
      ['Docs', '/assets/docs.png'],
      ['Sheets', '/assets/sheets.png'],
      ['Slides', '/assets/slides.png'],
      ['Forms', '/assets/forms.png'],
      ['Pad', '/assets/pad.png'],
    ].map(([label, icon]) => (
      <div key={label} className="flex flex-col items-center space-y-2">
        <div className="p-4 bg-gray-100 rounded-xl shadow-md">
          <img src={icon} alt={label} className="h-10 w-10" />
        </div>
        <span className="text-sm text-gray-700 font-medium">{label}</span>
      </div>
    ))}
  </div>
</div>



      

      <div className=' py-10'>
        <h1 className=' font-semibold text-3xl text-gray-700'>
          Curious about UBS Meet?
        </h1>
        <p className='text-lg font-medium text-gray-400'>Take a look at our FAQ to learn more.</p>
      </div>


      <div className="w-full min-h-auto bg-white flex flex-col">

      


        {/* ✅ Accordion Section */}
        <div className="w-full  text-left  pl- mx-auto py-12">
          {faqs.map((item, index) => (
            <div key={index} className="border-t text-gray-400 py-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left text-lg text-gray-700 font-medium focus:outline-none"
              >
                {item.question}
                <FaChevronDown
                  className={`text-gray-400 transform  transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-2 text-lg text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>


      <div className="w-full  pr-80  my-16 text-left ">
        <div className="border border-gray-700 rounded-lg p-6 shadow-sm bg-white">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Need more help?</h2>
          <p className="text-gray-600 mb-4">
            Browse tips and step-by-step guides made for both new users and power users.
          </p>
          <a
            href="#"
            className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 font-medium"
          >
            Help centre
          </a>
        </div>
      </div>



      <div className="w-auto bg-gray-50 py-20 flex flex-col items-center justify-center text-center px-4">
        {/* Logo */}
       <div className='flex gap-1 justify-center items-center'>
       <img
          src="/assets/meet.png" // Replace with your logo path
          alt="UBS Meet Logo"
          className="w-10"
        />
        <p className='text-gray-800 text-xl'>meet</p>
        
       </div>

        {/* Heading */}
        <h2 className="text-5xl font-semibold text-gray-900 mb-8">
          Connect on ubs Meet
        </h2>

        {/* Buttons */}
        <div className="flex flex-col  items-center gap-[20px]">
          <button className="bg-blue-600 w-full text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
            Go to app
          </button>
          <button className="border border-gray-300 px-8 py-3 rounded-md text-blue-600 text-lg font-medium hover:bg-gray-100">
            Try Meet for work
          </button>
        </div>
      </div>


      <div className="w-full  text-left mt-10 py-26  px-4 md:px-20 text-sm text-gray-500 space-y-1">
      <hr className=' text-gray-600'/>
        <p>
          <sup>1</sup> Bandwidth permitting. UBS Meet automatically adjusts to the highest video quality possible based on your bandwidth.
        </p>
        <p>
          <sup>2</sup> Requires a YouTube Premium membership.
        </p>
      </div>

      <div className="w-full bg-red-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            Sign up for the UBS Workspace newsletter
          </h2>

          {/* Form Inputs */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="w-full md:w-1/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2 text-left text-sm text-gray-600 max-w-xl mx-auto mb-4">
            <input type="checkbox" id="extra" className="mt-1" />
            <label htmlFor="extra">
              Also sign me up for UBS Cloud emails with news, product updates, event information, special offers, and more.
              (Optional and you can unsubscribe at a later time).
            </label>
          </div>

          {/* Privacy note */}
          <p className="text-sm text-gray-500 mb-6">
            I understand that my personal data will be processed in accordance with UBS’s{' '}
            <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
          </p>

          {/* Submit button */}
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
            Sign up
          </button>
        </div>
      </div>

    </div>




  );
}

export default Solutions;
