export default function AboutUs() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">About UBS HQ</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering businesses with secure, innovative collaboration solutions since 2015
            </p>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Our Story */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in London in 2015, UBS HQ emerged from a simple idea: 
                  businesses deserve secure, intuitive collaboration tools that respect 
                  user privacy. What started as a small team of security experts and 
                  developers has grown into a trusted platform serving over 500,000 
                  businesses worldwide.
                </p>
                <p className="text-gray-600">
                  Today, we continue to innovate while maintaining our core commitment 
                  to data protection and user-centric design.
                </p>
              </div>
              <img 
                src="/office-image.jpg" 
                alt="Our Office" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </section>
  
          {/* Mission & Vision */}
          <section className="mb-16 bg-blue-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To provide organizations with secure collaboration tools that enhance 
                  productivity without compromising data privacy.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To become the global standard for secure business communication 
                  and collaboration.
                </p>
              </div>
            </div>
          </section>
  
          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Security First",
                  content: "End-to-end encryption and zero-trust architecture in all products",
                  icon: "🔒"
                },
                {
                  title: "User Privacy",
                  content: "We never sell data and minimize data collection",
                  icon: "🛡️"
                },
                {
                  title: "Innovation",
                  content: "Continuous improvement driven by customer feedback",
                  icon: "🚀"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.content}</p>
                </div>
              ))}
            </div>
          </section>
  
          {/* Leadership Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Johnson", role: "CEO & Founder", img: "/team1.jpg" },
                { name: "Michael Chen", role: "CTO", img: "/team2.jpg" },
                { name: "Emma Wilson", role: "COO", img: "/team3.jpg" }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
  
          {/* Milestones */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Journey</h2>
            <div className="relative pl-8 border-l-2 border-blue-200 space-y-12">
              {[
                { year: "2015", event: "Company Founded in London" },
                { year: "2017", event: "Launched Encrypted Email Service" },
                { year: "2019", event: "Reached 100,000 Users" },
                { year: "2021", event: "Expanded to EU Markets" },
                { year: "2023", event: "Introduced AI Security Features" }
              ].map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[25px] top-1"></div>
                  <h3 className="text-xl font-semibold text-blue-600">{milestone.year}</h3>
                  <p className="text-gray-600 mt-2">{milestone.event}</p>
                </div>
              ))}
            </div>
          </section>
  
          {/* CTA */}
          <section className="bg-gray-800 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
            <p className="mb-6 max-w-xl mx-auto">
              Be part of the secure collaboration revolution. Explore career opportunities
              or see our solutions in action.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Careers
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Demo Products
              </button>
            </div>
          </section>
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
  }