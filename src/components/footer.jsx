import SocialLinks from "./socialMediaIcons"

const Footer = () => {
  return (
    <footer className="bg-gray-800 shadow-lg max-w-[1480px]">
      <div className=" mx-auto px-4 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="flex gap-4 lg:gap-20">
          {/* Company Name */}
          <div className="lg:col-span-1 xl:col-span-2">
            <div className="space-y-2 text-gray-400">
              <p className="mb-5 font-medium">unified binary system Ltd.</p>
            </div>
          </div>

          <div className="flex gap-24">
            {/* Products - Takes more space */}
          <div className="lg:col-span-2 xl:col-span-3">
            <h3 className="mb-4 text-gray-400 font-medium">Products</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>
                  <a href="/mail" className="hover:text-gray-300 transition-colors">
                    Mail
                  </a>
                </li>
                <li>
                  <a href="/drive" className="hover:text-gray-300 transition-colors">
                    Drive
                  </a>
                </li>
                <li>
                  <a href="/meet" className="hover:text-gray-300 transition-colors">
                    Meet
                  </a>
                </li>
                <li>
                  <a href="/chat" className="hover:text-gray-300 transition-colors">
                    Chat
                  </a>
                </li>
                <li>
                  <a href="/calendar" className="hover:text-gray-300 transition-colors">
                    Calendar
                  </a>
                </li>
                <li>
                  <a href="/contacts" className="hover:text-gray-300 transition-colors">
                    Contacts
                  </a>
                </li>
                <li>
                  <a href="/task" className="hover:text-gray-300 transition-colors">
                    Tasks
                  </a>
                </li>
                <li>
                  <a href="/docs" className="hover:text-gray-300 transition-colors">
                    Docs
                  </a>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>
                  <a href="/sheets" className="hover:text-gray-300 transition-colors">
                    Sheets
                  </a>
                </li>
                <li>
                  <a href="/slides" className="hover:text-gray-300 transition-colors">
                    Slides
                  </a>
                </li>
                <li>
                  <a href="/pad" className="hover:text-gray-300 transition-colors">
                    Pad
                  </a>
                </li>
                <li>
                  <a href="/forms" className="hover:text-gray-300 transition-colors">
                    Forms
                  </a>
                </li>
                <li>
                  <a href="/e-sign" className="hover:text-gray-300 transition-colors">
                    E-sign
                  </a>
                </li>
                <li>
                  <a href="/password_manager" className="hover:text-gray-300 transition-colors">
                    Password Manager
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Community */}
          <div className="lg:col-span-1 xl:col-span-2">
            <h3 className="mb-4 text-gray-400 font-medium">Community</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="/pricing" className="hover:text-gray-300 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-gray-300 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="/open_source" className="hover:text-gray-300 transition-colors">
                  Open source
                </a>
              </li>
              <li>
                <a href="/student_discount" className="hover:text-gray-300 transition-colors">
                  Student discount
                </a>
              </li>
              <li>
                <a href="/password_generator" className="hover:text-gray-300 transition-colors">
                  Password generator
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1 xl:col-span-2">
            <h3 className="mb-4 text-gray-400 font-medium">Company</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="/team" className="hover:text-gray-300 transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="/about_us" className="hover:text-gray-300 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="/for%20business" className="hover:text-gray-300 transition-colors">
                   for Business
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-1 xl:col-span-1">
            <h3 className="mb-4 text-gray-400 font-medium">Connect</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="/blog" className="hover:text-gray-300 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact_us" className="hover:text-gray-300 transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-gray-300 transition-colors">
                  Help and support
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy */}
          <div className="lg:col-span-1 xl:col-span-2">
            <h3 className="mb-4 text-gray-400 font-medium">Privacy</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="/privacy_policy" className="hover:text-gray-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie_policy" className="hover:text-gray-300 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/terms_of_use" className="hover:text-gray-300 transition-colors">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="/acceptable_use_policy" className="hover:text-gray-300 transition-colors">
                  Acceptable use policy
                </a>
              </li>
              <li>
                <a href="/data_processing_agreement" className="hover:text-gray-300 transition-colors">
                  Data Processing Agreement
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-gray-500 text-sm">© 2025 unified binary system. All rights reserved for unified binary system Ltd.</span>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer
