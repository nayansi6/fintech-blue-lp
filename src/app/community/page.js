// app/community/page.tsx

import { MessageCircle, Calendar, Users, ArrowRight, ThumbsUp, Share2 } from 'lucide-react';
import Image from 'next/image';

const CommunityPage = () => {
  const discussions = [
    {
      id: 1,
      title: "Best practices for digital security",
      author: "Sarah Johnson",
      replies: 45,
      likes: 122,
      category: "Security",
      excerpt: "Let's discuss the latest methods to protect your online banking activities...",
      avatar: "/images/community/avatar1.jpg"
    },
    {
      id: 2,
      title: "Understanding cryptocurrency regulations",
      author: "Michael Chen",
      replies: 28,
      likes: 89,
      category: "Investments",
      excerpt: "Recent regulatory changes and what they mean for crypto investors...",
      avatar: "/images/community/avatar2.jpg"
    },
  ];

  const events = [
    {
      id: 1,
      title: "Financial Literacy Webinar",
      date: "March 15, 2024",
      time: "2:00 PM GMT",
      location: "Online",
      speaker: "Dr. Emily Rodriguez"
    },
    {
      id: 2,
      title: "Entrepreneurship Workshop",
      date: "March 22, 2024",
      time: "10:00 AM GMT",
      location: "London Office",
      speaker: "James Peterson"
    }
  ];

  const members = [
    { name: "Alex M.", role: "Investor", image: "/images/community/member1.jpg" },
    { name: "Priya K.", role: "Small Business Owner", image: "/images/community/member2.jpg" },
    { name: "Omar S.", role: "Financial Advisor", image: "/images/community/member3.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">UBS Community Hub</h1>
            <p className="text-xl mb-8">Connect, learn, and grow with fellow banking professionals and clients</p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Join Discussion
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                View Events
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Discussion Feed */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageCircle className="text-blue-600" />
              Latest Discussions
            </h2>

            <div className="space-y-6">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <Image
                      src={discussion.avatar}
                      alt={discussion.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">
                          {discussion.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{discussion.title}</h3>
                      <p className="text-gray-600 mb-4">{discussion.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-gray-500">
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" /> {discussion.likes}
                          </span>
                          <span>{discussion.replies} replies</span>
                          <Share2 className="h-4 w-4 cursor-pointer hover:text-blue-600" />
                        </div>
                        <span className="text-sm text-gray-500">Posted by {discussion.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="text-blue-600" />
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="border-b pb-4 last:border-b-0">
                    <h3 className="font-semibold mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {event.date} • {event.time}
                    </p>
                    <p className="text-sm text-gray-600">{event.location}</p>
                    <p className="text-sm text-blue-600 mt-2">Hosted by {event.speaker}</p>
                    <button className="mt-2 text-blue-600 hover:underline flex items-center gap-1">
                      Register Now <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Members */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="text-blue-600" />
                Active Members
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {members.map((member) => (
                  <div key={member.name} className="text-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="rounded-full mx-auto mb-2"
                    />
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mt-12 bg-gray-800 rounded-2xl py-15 p-8">
          <h2 className="text-2xl text-gray-200 font-bold mb-4">Community Guidelines</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Be respectful and professional in all interactions</li>
            <li>Maintain confidentiality of sensitive information</li>
            <li>No promotional or spam content</li>
            <li>Follow all banking regulations and compliance standards</li>
          </ul>
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
                className="flex flex-col justify-center items-center text-gray-700"
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
           
            {/* <div className="mt-10">
              <a
                href="#"
                className="inline-block transform transition-all duration-300 hover:-translate-y-1"
              >
                <span
                  className="bg-gradient-to-r from-blue-400 to-green-400 text-white px-8 py-4 rounded-full 
                            text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  Create Free Account
                </span>
              </a>
            </div> */}
         
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;