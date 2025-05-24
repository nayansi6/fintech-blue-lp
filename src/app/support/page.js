"use client"
import { LifebuoyIcon, DocumentTextIcon, PhoneIcon, ChatBubbleLeftRightIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function HelpSupport() {
  return (
    <div className="w-[100%] bg-[#F0F8FF]">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">How can we help you?</h1>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search help articles..."
                className="w-full px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-100"
              />
              <button className="absolute right-3 top-3 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Popular Help Topics */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Popular Help Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: DocumentTextIcon, title: 'Getting Started', link: '#' },
              { icon: LifebuoyIcon, title: 'Account Setup', link: '#' },
              { icon: ClockIcon, title: 'Billing & Payments', link: '#' },
              { icon: ChatBubbleLeftRightIcon, title: 'Troubleshooting', link: '#' },
              { icon: PhoneIcon, title: 'Security Guide', link: '#' },
            ].map((topic, index) => (
              <a
                key={index}
                href={topic.link}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <topic.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{topic.title}</h3>
                <p className="text-gray-600">Learn how to set up and use key features</p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Options */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-blue-100">
              <div className="flex items-center mb-4">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Live Chat</h3>
              </div>
              <p className="text-gray-600 mb-4">Available 24/7 for immediate assistance</p>
              <button className="text-blue-600 hover:underline">Start Chat →</button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-blue-100">
              <div className="flex items-center mb-4">
                <PhoneIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Phone Support</h3>
              </div>
              <p className="text-gray-600 mb-2">+44 20 7123 4567</p>
              <p className="text-sm text-gray-500">Mon-Fri: 8am - 8pm GMT</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-blue-100">
              <div className="flex items-center mb-4">
                <DocumentTextIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Email Support</h3>
              </div>
              <p className="text-gray-600 mb-4">Typically responds within 4 hours</p>
              <a href="mailto:support@ubshq.com" className="text-blue-600 hover:underline">support@ubshq.com</a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: 'How do I reset my password?',
                answer: 'You can reset your password through the account recovery page...'
              },
              {
                question: 'Where can I find my billing information?',
                answer: 'Billing details are available in your account dashboard...'
              },
              {
                question: 'How do I enable two-factor authentication?',
                answer: 'Navigate to Security Settings in your account profile...'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documentation & Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Documentation</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-600 hover:underline">User Guides</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">API Documentation</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Security Overview</a></li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">System Status</h3>
              <div className="flex items-center">
                <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
                <span className="text-gray-600">All systems operational</span>
              </div>
              <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">View status history →</a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Submit a Request</h2>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full resize-none px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"></textarea>
              </div>
              
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}