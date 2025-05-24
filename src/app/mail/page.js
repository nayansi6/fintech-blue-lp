"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.20, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

export default function Mail() {

  const steps = [
    {
      id: 1,
      title: "Zero-Knowledge Encryption, End to End",
      description:"Emails are encrypted before they leave your device — and only the intended recipient can ever read them. We can’t see your messages. No one else should either."
    },
    {
      id: 2,
      title: "Data Sovereignty, the Swiss Way",
      description:"Your emails are stored in privacy-respecting Swiss data centers, far from prying eyes and legal loopholes. Built for those who take data protection seriously."
    },
    {
      id: 3,
      title: "15 GB Unified Encrypted Storage",
      description:"One secure vault for all your emails, attachments, and files — encrypted and accessible across all UB apps. No silos. No compromise."
    },
     ];

     const step=[
      {
      id: 4,
      title: "One-Click Import That Just Works",
      description:"Move from Gmail, Outlook, or others in seconds. All your messages, folders, and labels — without the headaches."
    },
    {
      id: 5,
      title: "Email Tracking & Spam, Silenced",
      description:"Block trackers. Filter noise. Take back control from spam and invisible surveillance. Your inbox, your terms."
    },
    {
      id: 6,
      title: "Smarter Email Tools, Built-In",
      description:"Schedule sends, undo mistakes, snooze distractions, or auto-sign important emails — all seamlessly integrated. Folders, labels, and workflows tailored to how you work."
    },
     ]
 
  const [scrollY, setScrollY] = useState(0)
  const [openIndex, setOpenIndex] = useState(0)
  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="overflow-hidden">
      <div className="bg-[#F0F8FF]">
        {/* Hero Section */}
        <section
          className="relative"
          style={{
            backgroundColor: "#0066cc",
            backgroundImage: `url("bg-img.png' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fillOpacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
          }}
        >
          {/* Left side content */}
          <div className="w-full text-white z-10 py-16 sm:py-24 md:py-32 gap-6 flex flex-col items-center justify-center px-4 sm:px-6">
            <div className="flex flex-col mt-20 items-center">
              <h1 className="font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl text-center">
                A Smarter Inbox for the Encrypted Era.
              </h1>
            </div>

            <p className="text-center text-white text-shadow max-w-xl text-base sm:text-lg md:text-xl ">
A secure-by-default inbox with all the tools you need — encrypted, efficient, and built for modern teams.            </p>

            <div className="flex justify-center items-center mt-6">
              <Link
                href="#"
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-colors"
              >
                Create Account <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex mt-10 lg:mt-20 justify-center items-center text-center">
              <div className="flex flex-wrap justify-center items-center max-w-full">
                {appIcons.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.href}
                    className="group flex flex-col items-center m-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="w-14 sm:w-16 md:w-20 overflow-hidden">
                      <img
                        src={icon.src || "/placeholder.svg"}
                        className="w-full h-auto"
                        alt={icon.alt || ""}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      />
                    </div>
                    <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {icon.alt}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
           <div className="py-20 px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step) => (
                <div key={step.id} className="px-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-teal-300 text-blue-900 font-bold flex items-center justify-center text-lg">
                      {step.id}
                    </div>
                  </div>
                  <h3 className="text-xl text-gray-800 font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
              {step.map((item) => (
                <div key={item.id} className="px-8 text-white">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-teal-300 text-blue-900 font-bold flex items-center justify-center text-lg">
                      {item.id}
                    </div>
                  </div>
                  <h3 className="text-xl text-gray-800 font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-500 ">{item.description}</p>
                </div>
              ))}
            </div>
           </div>
        </section>

        {/* Features Section */}
        <>
          <section className="w-full">
            <div className="flex flex-col justify-center items-center">
              <div className="text-center flex flex-col justify-center gap-4 items-center px-4 sm:px-6">
                <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                  Built for Privacy-First{" "}
                  <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent animate-gradient-x">
                    Professionals
                  </span>
                </p>
                <small className="text-lg sm:text-xl text-gray-500">
                  Where your security is our priority — zero-access encryption, data sovereignty, and complete peace of mind.
                </small>
              </div>

              <div className="flex flex-col justify-center items-center mt-16 sm:mt-20 gap-16 sm:gap-20">
                {/* Feature 1 */}
                <>
                  <div className="flex flex-col md:flex-row w-full px-4 sm:px-6 md:px-10 gap-8 md:gap-16 lg:gap-20 justify-center items-center">
                    <div className="w-full md:w-1/2 lg:w-auto">
                      <div className="relative group">
                        <img
                          src="/zero_know.png"
                          className="w-full lg:h-[360px] sm:h-auto max-w-full "
                          alt="Zero-Knowledge Encryption"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 max-w-md">
                      <p className="text-2xl sm:text-3xl md:text-2xl text-gray-800">🔐Individuals who are Privacy-Obsessed</p>
                      <small className="block text-start text-base sm:text-[17px] text-gray-500 mt-2">
                        Zero-access encryption. No trackers. No leaks.
                        <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent font-semibold">
                          {" "}
                         Your communications stay yours — always.
                        </span>
                      </small>
                      <div className="mt-5">
                        <a
                          className="inline-block bg-white px-6 py-3 shadow-md border border-gray-700 rounded-xl hover:shadow-md hover:shadow-[#0066cc] cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </>

                {/* Feature 2 */}
                <>
                  <div className="w-full flex flex-col md:flex-row-reverse px-4 sm:px-6 md:px-10 gap-8 md:gap-16 lg:gap-20 justify-center items-center">
                    <div className="w-full md:w-1/2 lg:w-auto">
                      <div className="relative group">
                        <img
                          src="/multi_node.png"
                          className="w-full lg:h-[350px] sm:h-auto max-w-full "
                          alt="Multi-Node Encrypted Storage"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 max-w-md">
                      <p className="text-2xl sm:text-3xl md:text-2xl text-gray-800">👥 Teams That Value Control</p>
                      <small className="block text-start text-base sm:text-[17px] text-gray-500 mt-2">
                       Manage custom domains, shared inboxes, and permissions — all with 
                        <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent font-semibold">
                          {" "}
                         enterprise-grade encryption and granular admin access.
                        </span>
                      </small>
                      <div className="mt-5">
                        <a
                          className="inline-block bg-white px-6 py-3 shadow-md border border-gray-700 rounded-xl hover:shadow-md hover:shadow-[#0066cc] cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </>

                {/* Feature 3 */}
                <>
                  <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-10 justify-center gap-8 md:gap-16 lg:gap-20 items-center">
                    <div className="w-full md:w-1/2 lg:w-auto relative group">
                      <img
                        src="/swiss_based.png"
                        className="w-full lg:h-[330px] h-auto max-w-full "
                        alt="Swiss-Based Data Centers"
                      />
                    </div>
                    <div className="w-full md:w-1/2 max-w-md">
                      <p className="text-2xl sm:text-3xl md:text-2xl text-gray-800">⚡ Power Users and Pros</p>
                      <small className="block text-start text-base sm:text-[17px] text-gray-500 mt-2">
                        Blazing-fast performance, smart filtering, and a distraction-free UI.
                        <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent font-semibold">
                          {" "}
                          Do more — securely, efficiently, and without friction.
                        </span>
                      </small>
                      <div className="mt-5">
                        <a
                          className="inline-block bg-white px-6 py-3 shadow-md border border-gray-700 rounded-xl hover:shadow-md hover:shadow-[#0066cc] cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </section>
        </>

        {/* App Icons Section */}
        <>
          <section className="w-full py-10 sm:py-32">
            <div className="flex flex-col justify-center items-center text-gray-800 px-4 sm:px-6">
              <p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold m-0 text-center"
              >Maximize Your Productivity with {""}
                <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent animate-gradient-x">
                  All-in-One Tools
                </span>
              </p>
              <small
                className="mt-5 text-base sm:text-lg text-gray-500"
              >
                <p className="text-center">Streamline your workday with everything you need — email, calendar, storage, <br/>and more — all connected and secure.</p>
              </small>
              <a
                href="/signup"
                className="bg-white mt-8 text-gray-700 px-6 py-3 rounded-xl border border-gray-700 text-sm sm:text-base shadow-md hover:shadow-lg hover:shadow-[#0066cc]"
              >
                Create Account
              </a>
              <div className="flex flex-wrap  mt-10 justify-center items-center max-w-full px-4">
              {appIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  className="group flex flex-col items-center space-y-2 m-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <img
                    src={icon.src || "/placeholder.svg"}
                    className="relative w-12 h-12 sm:w-16 sm:h-16"
                    alt={icon.alt || ""}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                  <span className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {icon.alt}
                  </span>
                </a>
              ))}
            </div>
            </div>
          </section>
        </>

        <>
        <section>
          <div className="px-20 py-10">
              <div className="mb-12 flex flex-col gap-2 ">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 ">Curious about UBS Mail?</h2>
              <p>Take a look at our FAQ to learn more.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {/* Question 1 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3"> 1. What is UBS HQ Mail?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    UBS HQ Mail is a secure, all-in-one email platform designed to provide fast, private, and efficient communication. It combines secure email, calendar, file storage, and collaboration tools, all with end-to-end encryption.
                  </p>
                </div>

                {/* Question 2 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Is my data secure with UBS HQ Mail?</h3>
                  <p className="text-gray-600 leading-relaxed">
                   Yes, UBS HQ Mail uses end-to-end encryption and zero-access security, meaning only you and your recipients can read your messages. Even we don’t have access to your data.
                  </p>
                </div>

                {/* Question 3 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Can I use my own domain with UBS HQ Mail?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Absolutely! UBS HQ Mail allows you to use your custom domain for a professional, branded email experience. You can easily manage your domain settings and email aliases.
                  </p>
                </div>

                {/* Question 4 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Can I access UBS HQ Mail on mobile devices?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes, UBS HQ Mail is fully optimized for mobile devices, allowing you to access your email, calendar, and other tools seamlessly on the go.
                  </p>
                </div>

                {/* Question 5 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    5. What features does UBS HQ Mail offer for teams?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                 UBS HQ Mail provides shared mailboxes, role-based access, and team collaboration tools to streamline communication and ensure secure teamwork. You can easily manage permissions and collaborate without compromising privacy.
                  </p>
                </div>

                {/* Question 6 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    6. Does UBS HQ Mail integrate with other apps?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    UBS HQ Mail integrates with a variety of tools, including cloud storage and productivity apps, ensuring a smooth and efficient workflow across platforms.
                  </p>
                </div>

                 <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    7. How do I get started with UBS HQ Mail?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Getting started is simple! Sign up for an account, set up your custom domain (if desired), and start sending secure emails. Our easy-to-use interface makes it quick to get up and running.
                  </p>
                </div>

                 <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    8. How do I contact support for UBS HQ Mail?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    If you need assistance, our support team is available through email, chat, or our help center. We're here to help you with any setup, technical, or account-related questions.
                  </p>
                </div>
              </div>
            </div>
        </section>
        </>
      </div>
    </div>
  )
}

function ServiceCard({ href, title, text, image, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full bg-white hover:border hover:border-[#173E73] rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
    >
      <div className="flex flex-col gap-3 p-2 h-full">
        <div className="flex-grow flex flex-col gap-3 text-gray-800">
          <img
            src={image || "/placeholder.svg"}
            className="w-full h-66 aspect-video object-cover rounded-lg transition-all duration-300 hover:shadow-md"
            alt={title}
          />
          <span className="flex flex-col sm:flex-row justify-start items-start gap-1 sm:gap-2">
            <p className="font-semibold text-gray-800">{title}:</p>
            <p className="text-gray-700">{text}</p>
          </span>
        </div>

        <a href={href} className="text-blue-600 font-medium flex items-center group ">
          See more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}



const services = [
  {
    href: "/mail",
    title: "Mail",
    text: "Not just mail. Your new favorite coworker.",
    image: "/mailcube.png",
  },
  {
    href: "/drive",
    title: "Drive",
    text: " Store smart, stay private — with 15 GB of free encrypted storage.",
    image: "/drivecube.png",
  },
  {
    href: "/meet",
    text: "Connect face-to-face, securely — encrypted video meetings built for teams.",
    title: "Meet",
    image: "/meetcube.png",
  },
  {
    href: "/calendar",
    title: "Calendar",
    text: "Plan Privately. Stay in Control.",
    image: "/calendarcube.png",
  },
  {
    href: "/e_sign",
    title: "Sign",
    text: "Secure Every Signature. Protect Every Deal.",
    image: "/e-signcube.png",
  },
  {
    href: "/password-manager",
    text: "You Remember One. We Guard the Rest.",
    image: "/passwordmancube.png",
    title: "Pass_Manager",
  },
  {
    href: "/docs",
    title: "Docs",
    text: "Create with Confidence. No One's Watching.",
    image: "/docscube.png",
  },
  {
    href: "/sheets",
    title: "Sheets",
    text: "Crunch Numbers. Not Your Privacy.",
    image: "/sheetcube.png",
  },
  {
    href: "/slides",
    title: "Slides",
    text: "Your Story. Encrypted from Slide One.",
    image: "/slidecube.png",
  },
]

const appIcons = [
  { href: "/mail", src: "/3D_Mail_Final.png", alt: "Mail" },
  { href: "/drive", src: "/3D_Mail_front.png", alt: "Drive" },
  { href: "/meet", src: "/3D_Mail_Second.png", alt: "Meet" },
  { href: "/calendar", src: "/3DMailimg.png", alt: "Calendar" },
  { href: "/docs", src: "/3D_Mail_Final.png", alt: "Docs" },
  { href: "/sheets", src: "/3D_Mail_Final.png", alt: "Sheets" },
  { href: "/slides", src: "/3D_Mail_Final.png", alt: "Slides" },
  { href: "/pad", src: "/3D_Mail_Final.png", alt: "Pad" },
  { href: "/forms", src: "/3D_Mail_Final.png", alt: "Forms" },
  { href: "/e-sign", src: "/3D_Mail_Final.png", alt: "Sign" },
  {
    href: "/password_manager",
    src: "/3D_Mail_Final.png",
    alt: "Manager",
  },
]

const featureCards = [
  {
    title: "Unified Productivity, Zero Complexity",
    subtitle: "No more password chaos",
    description:
      "Mail, Drive, Calendar & Chat, docs in a single, integrated workspace that requires one secure login for all tools.",
  },
  {
    title: "Your workflow, simplified",
    subtitle: "Everything connected",
    description:
      "Share files from Drive directly in Chat, schedule meetings from emails, and collaborate without switching tabs.",
  },
  {
    title: "Zero-Knowledge, Zero-Trust Security",
    subtitle: "Your data stays yours",
    description:
      'Our "assume breach" architecture verifies every access with multi-factor authentication, device approvals, and micro-permissions.',
  },
  {
    title: "15GB of Secure Storage, free forever",
    subtitle: "Secure storage, all yours",
    description:
      "Store your work, documents, and important files with peace of mind, knowing your data is protected and completely under your control.",
  },
  {
    title: "Start Free. Stay in Control.",
    subtitle: "No hidden costs",
    description:
      "Get full access to unified binary system Mail, Drive, Docs, Meet, and more with a forever-free account that puts privacy first—because we believe everyone deserves secure productivity without a paywall.",
  },
  {
    title: "Support That Respects You.",
    subtitle: "Human help, not AI hoops",
    description:
      "Whether you're a solo creator or scaling a secure team, unified binary system HQ offers real, responsive support from people who get it. No tracking, no upsells—just honest answers when you need them.",
  },
]

function FeatureCard({ title, subtitle, description, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      className="w-full h-auto min-h-[14rem] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100"
    >
      <div className="flex flex-col items-start gap-4 px-4 sm:px-6 py-5 sm:py-7 h-full">
        <div
          className="bg-gradient-to-r from-[#5DADFF]/10 to-[#BD34FD]/10 px-3 py-1 rounded-full text-sm font-medium text-blue-700"
        >
          {subtitle}
        </div>
        <h3 className="text-lg sm:text-xl text-start font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm text-start sm:text-base">{description}</p>
      </div>
    </div>
  )
}

const blogs = [
  {
    title: "What Zero-Knowledge Encryption Really Means — And Why It Matters",
    excerpt:
      "Discover how zero-knowledge encryption protects your data from everyone — even us. Privacy isn't a feature; it's the foundation.",
    image: "/blog1.png",
    slug: "/blog/post-url",
  },
  {
    title: "Why Switzerland Is the Gold Standard for Data Privacy",
    excerpt:
      "From strict laws to neutral jurisdiction, learn why hosting UBS systems in Swiss data centers gives your information unmatched legal protection.",
    image: "/blog2.png",
    slug: "/blog/post-url",
  },
  {
    title: "Why Privacy First Platforms Are the Future of the Internet",
    excerpt:
      "Tired of surveillance software and hidden data collection? See how UBS offers a privacy-first alternative that puts you — not algorithms — in charge.",
    image: "/blog3.png",
    slug: "/blog/post-url",
  },
]
