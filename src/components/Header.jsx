"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

const Header = () => {
  const [productPage, setProductPage] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)
  const triggerRef = useRef(null)
  const mobileMenuRef = useRef(null)

  const apps = [
    { icon: "/assets/mail.png", name: "Mail", desc: "Custom business email", href: "/mail" },
    { icon: "/assets/drive.png", name: "Drive", desc: "Cloud storage", href: "/drive" },
    { icon: "/assets/meet.png", name: "Meet", desc: "Video conferencing", href: "/meet" },
    { icon: "/assets/chat.png", name: "Chat", desc: "Team Chating", href: "/chat" },
    { icon: "/assets/calendar.png", name: "Calendar", desc: "Shared calendars", href: "/calendar" },
    { icon: "/assets/contacts.png", name: "Contacts", desc: "Shared contacts", href: "/contacts" },
    { icon: "/assets/task.png", name: "Task", desc: "Messaging for teams", href: "/task" },
    { icon: "/assets/docs.png", name: "Docs", desc: "Word processing", href: "/docs" },
    { icon: "/assets/sheets.png", name: "Sheets", desc: "Spreadsheets", href: "/sheets" },
    { icon: "/assets/slides.png", name: "Slides", desc: "Presentation builder", href: "/slides" },
    { icon: "/assets/forms.png", name: "Forms", desc: "Online forms and surveys", href: "/forms" },
    { icon: "/assets/pad.png", name: "Pad", desc: "Keep your notes", href: "/pad" },
    { icon: "/assets/e-sign.png", name: "E-Sign", desc: "Sign any docs", href: "/e-sign" },
    {
      icon: "/assets/password-manager.png",
      name: "Password Manager",
      desc: "Keep your Password",
      href: "/password_manager",
    },
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setProductPage(false)
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest("[data-mobile-menu-toggle]")
      ) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleAppClick = () => {
    setProductPage(false)
    setMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (productPage) setProductPage(false)
  }

  const toggleProductPage = () => {
    setProductPage(!productPage)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50  w-[100%] max-w-[1371px] backdrop-blur-lg bg-gray-900 shadow-sm border-b border-gray-100">
      <div className=" mx-auto  relative">
        <div className="flex justify-between h-16 items-center px-3 sm:px-4 md:px-5 lg:px-10">
          <div className="flex items-start space-x-4 sm:space-x-8">
            <div className="flex items-start flex-col space-y-0 leading-none">
              <Link href="/" className="flex items-center group">
                <div className="h-8 w-8 relative">
                  <Image src="/assets/icon.png" alt="Logo" fill className="" />
                </div>
                <span className="text-xl font-bold text-gray-800">ubs</span>
              </Link>
              <small className="text-[10px] m-0 p-0 leading-none">unified binary system</small>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-2">
              <li ref={triggerRef} className="list-none relative">
                <button
                  onClick={toggleProductPage}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all ${
                    productPage ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                  }`}
                  aria-expanded={productPage}
                  aria-controls="product-dropdown"
                >
                  <span>Products</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${productPage ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </li>

              {["ubs for Business", "Resources", "Support", "Pricing"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="px-4 py-2 rounded-lg transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop Sign In/Sign Up */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/signin"
              className="px-4 py-2 rounded-md font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-md transition-all 
                     shadow-sm hover:shadow-md transform hover:scale-[1.02]"
            >
              Create Free Account ✨
            </Link>
          </div>

          {/* Mobile Sign In Button (Compact) */}
          <div className="sm:hidden flex items-center">
            <Link
              href="/signin"
              className="px-3 py-1.5 mr-2 rounded-md font-medium text-blue-600 hover:text-blue-700 transition-colors text-sm"
            >
              Sign in
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
            data-mobile-menu-toggle
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Products Dropdown - Desktop */}
        <div
          id="product-dropdown"
          ref={dropdownRef}
          className={`absolute inset-x-0 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            productPage && !mobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {apps.map((app, i) => (
                <Link
                  key={i}
                  href={app.href}
                  onClick={handleAppClick}
                  className="flex items-center p-2 sm:p-3 space-x-3 sm:space-x-4 rounded-lg transition-all hover:bg-blue-50 group border border-transparent hover:border-blue-100"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 relative bg-gray-100 rounded-lg p-2">
                    <Image
                      src={app.icon || "/placeholder.svg"}
                      alt={app.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform"
                      sizes="(max-width: 640px) 40px, 48px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900">{app.name}</div>
                    <div className="text-sm text-gray-500 truncate">{app.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-start flex-col space-y-0 leading-none">
              <Link href="/" className="flex items-center group" onClick={() => setMobileMenuOpen(false)}>
                <div className="h-8 w-8 relative">
                  <Image src="/assets/icon.png" alt="Logo" fill className="" />
                </div>
                <span className="text-xl font-bold text-gray-800">ubs</span>
              </Link>
              <small className="text-[10px] m-0 p-0 leading-none">unified binary system</small>
            </div>
            <button
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 p-4">
            <div className="space-y-4">
              {/* Products Accordion */}
              <div className="border-b border-gray-100 pb-4">
                <button
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={toggleProductPage}
                  aria-expanded={productPage}
                >
                  <span className="text-lg font-medium">Products</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${productPage ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mobile Products Grid */}
                <div
                  className={`mt-2 grid grid-cols-2 gap-2 transition-all duration-300 ${
                    productPage ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {apps.map((app, i) => (
                    <Link
                      key={i}
                      href={app.href}
                      onClick={handleAppClick}
                      className="flex items-center p-2 space-x-3 rounded-lg transition-all hover:bg-blue-50 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 relative bg-gray-100 rounded-lg p-2">
                        <Image
                          src={app.icon || "/placeholder.svg"}
                          alt={app.name}
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900">{app.name}</div>
                        <div className="text-xs text-gray-500 truncate">{app.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Navigation Links */}
              <nav className="space-y-1">
                {["ubs for Business", "Resources", "Support", "Pricing"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="block px-3 py-2 rounded-lg transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-gray-100">
            <Link
              href="/signup"
              className="block w-full py-3 px-4 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-md text-center transition-all shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Create Free Account ✨
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}


export default Header

