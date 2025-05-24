"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"

const Header = () => {
  const [productPage, setProductPage] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState("")
  const dropdownRef = useRef(null)
  const triggerRef = useRef(null)
  const mobileMenuRef = useRef(null)

  // Scroll handler for background color change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll() // Initial check
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
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
        !event.target.closest(".mobile-menu-button")
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
    setMobileSubmenuOpen("")
  }

  const toggleProductPage = () => {
    setProductPage(!productPage)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleMobileSubmenu = (menu) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === menu ? "" : menu)
  }

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

  const menuItems = [
    {
      name: "Products",
      submenu: apps,
      href: "#",
    },
    {
      name: "for Business",
      href: "/for-business",
    },
    {
      name: "Resources",
      href: "/resources",
    },
    {
      name: "Support",
      href: "/support",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-[#F0F8FF] shadow-sm" : "bg-[#0066cc]"
      }`}
    >
      <div className="mx-auto w-[100%] relative">
        <div className="flex justify-between h-16 items-center px-3 sm:px-4 md:px-5 lg:px-10">
          {/* Logo Section */}
          <div className="flex items-center justify-center space-x-4 sm:space-x-8">
            <div className="flex items-start flex-col space-y-0 leading-none">
              <Link href="/" className="flex items-center group">
                <div className="h-10 w-10 relative">
                  <Image src="/assets/icon.png" alt="Logo" fill className="" />
                </div>
                <small className={` m-0 p-0 leading-none ${isScrolled ? "text-gray-600 " : "text-blue-100"}`}>
                  unified binary system
                </small>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-2">
              <li ref={triggerRef} className="list-none relative">
                <button
                  onClick={toggleProductPage}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all ${
                    productPage
                      ? "text-gray-700"
                      : isScrolled
                        ? "text-gray-600 hover:text-blue-700"
                        : "text-blue-100 hover:text-gray-700"
                  }`}
                >
                  <span>Products</span>
                  {productPage ? (
                    <ChevronUp className={`w-4 h-4 ${isScrolled ? "text-gray-600" : "text-blue-100"}`} />
                  ) : (
                    <ChevronDown className={`w-4 h-4 ${isScrolled ? "text-gray-600" : "text-blue-100"}`} />
                  )}
                </button>
              </li>

              {menuItems.slice(1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isScrolled ? "text-gray-600 hover:text-blue-700" : "text-blue-100 hover:text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Link
              href="/signin"
              className={`hidden sm:inline-block px-4 py-2 rounded-md font-medium transition-colors ${
                isScrolled ? "text-blue-600 hover:text-blue-700" : "text-blue-100 hover:text-white"
              }`}
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className={`hidden sm:inline-block px-4 py-2 font-medium rounded-md transition-all shadow-sm hover:shadow-md ${
                isScrolled ? "bg-blue-600 hover:shadow-lg hover:shadow-gray-800 text-white" : "bg-black hover:shadow-lg hover:shadow-blue-100 text-white"
              }`}
            >
              Create Free Account ✨
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden mobile-menu-button p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-gray-600" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-600" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Products Dropdown - Desktop */}
        <div
          ref={dropdownRef}
          className={`absolute inset-x-0 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 ${
            productPage ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
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

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-[#BBD4E1]  bg-opacity-50" onClick={() => setMobileMenuOpen(false)}></div>
          <div
            className={`absolute top-0 right-0 w-full max-w-sm h-full bg-[#0066cc] transform transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-4 border-b border-blue-500">
              <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <div className="h-8 w-8 relative mr-2">
                  <Image src="/assets/icon.png" alt="Logo" fill />
                </div>
                <span className="text-white font-medium">Unified Binary System</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto h-full pb-20">
              <nav className="p-4">
                {menuItems.map((item, index) => (
                  <div key={index} className="mb-2">
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => toggleMobileSubmenu(item.name)}
                          className="flex items-center justify-between w-full p-3 text-white hover:bg-blue-100 rounded-lg"
                        >
                          <span>{item.name}</span>
                          {mobileSubmenuOpen === item.name ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>

                        {mobileSubmenuOpen === item.name && (
                          <div className="ml-4 mt-2 border-l-2 border-blue-500 pl-4">
                            {item.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                onClick={handleAppClick}
                                className="flex items-center p-3 text-blue-100 hover:text-white hover:bg-blue-700 rounded-lg mb-1"
                              >
                                <div className="w-6 h-6 relative mr-3 bg-blue-700 rounded-md p-1">
                                  <Image
                                    src={subItem.icon || "/placeholder.svg"}
                                    alt={subItem.name}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                                <span>{subItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block p-3 text-white hover:bg-blue-700 rounded-lg"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#0066cc]">
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-3 px-4 bg-white text-blue-600 font-medium text-center rounded-lg mb-3 hover:bg-gray-100 transition-colors"
                >
                  Create A Free Account
                </Link>
                <Link
                  href="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-3 px-4 border border-blue-400 text-white font-medium text-center rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


