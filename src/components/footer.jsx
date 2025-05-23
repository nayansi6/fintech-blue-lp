"use client"
import { useState } from "react"
import SocialLinks from "./socialMediaIcons"
import { ChevronDown, ChevronUp } from "lucide-react"

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  const footerSections = [
    {
      id: "products",
      title: "Products",
      links: [
        [
          { name: "Mail", href: "/mail" },
          { name: "Drive", href: "/drive" },
          { name: "Meet", href: "/meet" },
          // { name: "Chat", href: "/chat" },
          { name: "Calendar", href: "/calendar" },
          // { name: "Contacts", href: "/contacts" },
          // { name: "Tasks", href: "/task" },
          { name: "Docs", href: "/docs" },
          { name: "Sheets", href: "/sheets" },
          { name: "Slides", href: "/slides" },
          // { name: "Pad", href: "/pad" },
          // { name: "Forms", href: "/forms" },
          { name: "E-sign", href: "/e-sign" },
          { name: "Pass_Manager", href: "/password_manager" },
        ],
      ],
    },
    {
      id: "community",
      title: "Community",
      links: [
        [
          { name: "Pricing", href: "/pricing" },
          { name: "Community", href: "/community" },
          { name: "Open source", href: "/open_source" },
          { name: "Student discount", href: "/student_discount" },
          { name: "Password generator", href: "/password_generator" },
        ],
      ],
    },
    {
      id: "company",
      title: "Company",
      links: [
        [
          { name: "Team", href: "/team" },
          { name: "About us", href: "/about_us" },
          { name: "for Business", href: "/for%20business" },
        ],
      ],
    },
    {
      id: "connect",
      title: "Connect",
      links: [
        [
          { name: "Blog", href: "/blog" },
          { name: "Contact us", href: "/contact_us" },
          { name: "Help and support", href: "/support" },
        ],
      ],
    },
    {
      id: "privacy",
      title: "Privacy",
      links: [
        [
          { name: "Privacy Policy", href: "/privacy_policy" },
          { name: "Cookie Policy", href: "/cookie_policy" },
          { name: "Terms of use", href: "/terms_of_use" },
          { name: "Acceptable use policy", href: "/acceptable_use_policy" },
          { name: "Data Processing Agreement", href: "/data_processing_agreement" },
        ],
      ],
    },
  ]

  return (
    <footer className="bg-gray-800 shadow-lg max-w-[1480px] mx-auto">
      <div className="px-4 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* Company Name */}
          <div className="mb-8 lg:mb-0">
            <div className="space-y-2 text-gray-400">
              <p className="mb-5 font-medium">unified binary system Ltd.</p>
            </div>
          </div>

          {/* Footer Sections */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-12">
            {footerSections.map((section) => (
              <div key={section.id} className={`${section.id === "products" ? "col-span-1" : ""}`}>
                {/* Mobile Accordion Header */}
                <button
                  className="flex items-center justify-between w-full lg:hidden mb-4"
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={expandedSection === section.id}
                  aria-controls={`section-${section.id}`}
                >
                  <h3 className="text-gray-400 font-medium">{section.title}</h3>
                  {expandedSection === section.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>

                {/* Desktop Header */}
                <h3 className="hidden lg:block mb-4 text-gray-400 font-medium">{section.title}</h3>

                {/* Links */}
                <div
                  id={`section-${section.id}`}
                  className={`${
                    expandedSection === section.id || (typeof window !== "undefined" && window.innerWidth >= 1024)
                      ? "block"
                      : "hidden lg:block"
                  }`}
                >
                  {section.columns === 2 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                      {section.links.map((column, colIndex) => (
                        <ul key={colIndex} className="space-y-2 text-gray-500 text-sm">
                          {column.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <a href={link.href} className="hover:text-gray-300 transition-colors">
                                {link.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2 text-gray-500 text-sm">
                      {section.links[0].map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href={link.href} className="hover:text-gray-300 transition-colors">
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-gray-500 text-sm text-center sm:text-left">
            © 2025 unified binary system. All rights reserved for unified binary system Ltd.
          </span>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer
