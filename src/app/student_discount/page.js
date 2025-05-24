"use client"
import { BadgePercent, BookOpen, GraduationCap, ShieldCheck, Ticket } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const StudentDiscountsPage = () => {
  const [verified, setVerified] = useState(false);
  
  const discounts = [
    {
      id: 1,
      title: "Zero-Fee Student Account",
      description: "No monthly fees with a .edu email address",
      offer: "100% fee-free banking",
      validity: "Valid until graduation",
      category: "Banking",
      partner: "UBS Campus Banking",
      terms: "Requires valid student ID"
    },
    {
      id: 2,
      title: "Student Loan Rate Discount",
      description: "Special rates for university students",
      offer: "1.5% APR reduction",
      validity: "2023-2024 Academic Year",
      category: "Loans",
      partner: "UBS Education Finance",
      terms: "Minimum 3.0 GPA required"
    },
    {
      id: 3,
      title: "Tech Partner Discount",
      description: "Exclusive deals on laptops and software",
      offer: "Up to 20% off",
      validity: "Ongoing",
      category: "Retail",
      partner: "TechCorp Education",
      terms: "Must verify student status"
    },
  ];

  const categories = [
    { name: "Banking", icon: <BadgePercent className="w-5 h-5" /> },
    { name: "Loans", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Retail", icon: <Ticket className="w-5 h-5" /> },
    { name: "Education", icon: <BookOpen className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <GraduationCap className="h-12 w-12 mr-4" />
              <BadgePercent className="h-12 w-12" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Student Financial Benefits</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Exclusive banking offers and partner discounts for verified students
            </p>
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => setVerified(!verified)}
                className={`px-6 py-3 rounded-lg font-semibold ${
                  verified ? 'bg-green-500' : 'bg-white text-blue-600 hover:bg-blue-50'
                } transition-colors`}
              >
                {verified ? '✓ Verified Student' : 'Verify Student Status'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Discount Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="flex items-center justify-center gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Discounts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discounts.map((discount) => (
            <div 
              key={discount.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 relative"
            >
              {discount.category === 'Banking' && (
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Ticket className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{discount.title}</h3>
                  <p className="text-gray-600">{discount.partner}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{discount.description}</p>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-blue-600">{discount.offer}</span>
                  <span className="text-sm text-gray-600">{discount.validity}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{discount.terms}</span>
                <button 
                  className={`px-4 py-2 rounded-lg ${
                    verified 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  } transition-colors`}
                  disabled={!verified}
                >
                  {verified ? 'Claim Offer' : 'Verify Required'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Process */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <ShieldCheck className="text-blue-600" />
            Student Verification
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-4 border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold mb-2">1. Document Upload</h3>
              <p className="text-gray-600">
                Upload valid student ID or enrollment verification
              </p>
            </div>
            <div className="p-4 border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold mb-2">2. Instant Verification</h3>
              <p className="text-gray-600">
                Our secure system verifies your status in minutes
              </p>
            </div>
            <div className="p-4 border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold mb-2">3. Access Benefits</h3>
              <p className="text-gray-600">
                Immediately unlock all student-exclusive offers
              </p>
            </div>
          </div>
        </div>

        {/* Partner Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Trusted Education Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['university1', 'techcorp', 'bookstore', 'software-edu'].map((partner) => (
              <div key={partner} className="bg-gray-100 p-6 rounded-xl flex items-center justify-center">
                <Image
                  src={`/images/partners/${partner}.png`}
                  alt={partner}
                  width={120}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Student Discount FAQ</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold">How long do discounts last?</h3>
              <p className="text-gray-600 mt-2">
                Most offers remain valid throughout your academic career. Some partner offers may have specific expiration dates.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold">Can international students apply?</h3>
              <p className="text-gray-600 mt-2">
                Yes, all registered students at accredited institutions qualify regardless of nationality.
              </p>
            </div>
          </div>
        </div>
        <section className="py-10">
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
            <p className="text-4xl font-semibold text-gray-300">
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

export default StudentDiscountsPage;