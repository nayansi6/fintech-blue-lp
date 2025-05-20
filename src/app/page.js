"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
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

export default function Home() {
  const logos = [
    {
      src: "/assets/mail.png",
      alt: "Bank Logo",
      size: 70,
      left: "20%",
      top: "20%",
      opacity: 0.9,
    },
    {
      src: "/assets/drive.png",
      alt: "Financial Service",
      size: 90,
      left: "28%",
      top: "33%",
      opacity: 0.7,
    },
    {
      src: "/assets/meet.png",
      alt: "Payment Provider",
      size: 90,
      left: "35%",
      top: "15%",
      opacity: 1,
    },
    {
      src: "/assets/e-sign.png",
      alt: "Credit Card",
      size: 90,
      left: "43%",
      top: "0%",
      opacity: 1,
    },
    {
      src: "/assets/calendar.png",
      alt: "Investment Platform",
      size: 80,
      left: "51%",
      top: "19%",
      opacity: 0.9,
    },
    {
      src: "/assets/contacts.png",
      alt: "Banking App",
      size: 85,
      left: "59%",
      top: "36%",
      opacity: 0.5,
    },
    {
      src: "/assets/task.png",
      alt: "Financial Tool",
      size: 75,
      left: "67%",
      top: "16%",
      opacity: 0.9,
    },
    {
      src: "/assets/docs.png",
      alt: "Payment Service",
      size: 90,
      left: "58%",
      top: "0%",
      opacity: 0.6,
    },
    {
      src: "/assets/sheets.png",
      alt: "Payment Service",
      size: 80,
      left: "27%",
      top: "0%",
      opacity: 0.3,
    },
    // { src: "/assets/slides.png", alt: "Payment Service", size: 70, left: "65%", top: "70%", opacity: 0.9 },
    // { src: "/assets/forms.png", alt: "Payment Service", size: 95, left: "75%", top: "50%", opacity: 0.7 },
    // { src: "/assets/pad.png", alt: "Payment Service", size: 80, left: "85%", top: "80%", opacity: 0.8 },
  ]

  const steps = [
    {
      id: 1,
      title: "Download the app",
      description:
        "Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.",
    },
    {
      id: 2,
      title: "Request your card",
      description:
        "Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.",
    },
    {
      id: 3,
      title: "Connect all your account",
      description:
        "Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.",
    },
  ]

  const step = [
    {
      id: 4,
      title: "Download the app",
      description:
        "Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.",
    },
    {
      id: 5,
      title: "Request your card",
      description:
        "Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.",
    },
    {
      id: 6,
      title: "Connect all your account",
      description:
        "Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.",
    },
  ]
  const faqs = [
    {
      question: "Privacy Built In, Security Locked Down",
      image: "/assets/maildefine.png",
      answer:
        "Every action — from writing to sharing — is protected with strong encryption. UBS was built from the ground up to keep your data safe, always.",
    },
    {
      question: "Zero-Knowledge Architecture",
      image: "/assets/maillock.png",
      answer: "Only you hold the keys. UBS can’t read or access your files, messages, or any content — and never will.",
    },
    {
      question: "One Account. All Tools. Free Forever.",
      image: "/assets/docs.png",
      answer:
        "Use everything — docs, chat, storage, calendar — with one secure login. No paywalls. No traps. Just freedom to work, for life.",
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
    <div className="max-w-[1480px]">
      <div className="bg-gray-50">
        <section className="bg-gradient-to-tl min-h-screen flex justify-center items-center from-blue-600 via-blue-400 to-blue-600 ">
          {/* Left side content */}
          <div className="w-full text-white z-10  mt-20 gap-6 flex flex-col items-center justify-center  p-4 md:p-8 lg:p-12 md:mb-0">
            <div className="flex flex-col items-center text-6xl ">
              <div className="font-bold tracking-tight">Privacy Starts at the Core.</div>
            </div>

            <p className="text-lg text-center text-white md:text-xl  max-w-xl">
              Every message, file, and interaction is protected by zero-knowledge encryption — by default, not request.
            </p>
            <div className="flex flex-wrap gap-10">
              <Link
                href="#"
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Create Account <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-400 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Learn more
              </Link>
            </div>
            <div className="flex flex-col gap-5 mt-10  justify-center items-center text-center">
              <div className="flex flex-wrap gap-4 justify-center items-center max-w-full px-2">
                {appIcons.map((icon, index) => (
                  <motion.a
                    key={index}
                    href={icon.href}
                    className="group flex flex-col items-center space-y-2 m-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.img
                      src={icon.src || "/placeholder.svg"}
                      className="relative w-16 h-16"
                      alt={icon.alt || ""}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                    <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {icon.alt}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <FadeInSection>
          <section className="w-full py-20 lg:py-28">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl tracking-tight lg:text-5xl font-bold text-gray-800 mb-4">
                  A Secure Hub that minds its own{" "}
                  <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent">
                    Business{" "}
                  </span>
                </h2>
                <p className="text-gray-600 text-2xl  mx-auto">All-in-one. All buttoned up. All yours.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    href={service.href}
                    icon={service.icon}
                    title={service.title}
                    text={service.text}
                    image={service.image}
                    description={service.description}
                    index={index}
                  />
                ))}
              </div>
              <div className="text-center mt-20">
                <motion.a
                  className="inline-block bg-white px-6 py-3 shadow-md border border-gray-700 rounded-xl hover:shadow-md hover:shadow-blue-600 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Browse All Apps
                </motion.a>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="w-full">
            <div className="flex flex-col justify-center items-center">
              <div className="text-center flex flex-col justify-center gap-4 items-center ">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                  Don’t let your work be someone  else’s {" "}
                    <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent animate-gradient-x">
                    business.
                  </span>
                  </p>
                  <small className="text-2xl text-gray-500">
                    Work in complete privacy, with full control of your data.
                  </small>
               
              </div>
              <div className="flex flex-row px-10 mt-20 justify-center items-center ">
                {/* FAQs Column */}
                <div className="w-1/2 px-15 space-y-6">
                  {faqs.map((item, index) => (
                    <motion.div
                      key={index}
                      className="transition-all duration-300"
                      initial={{ opacity: 0.9 }}
                      whileHover={{
                        opacity: 1,
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                      onMouseEnter={() => setOpenIndex(index)}
                    >
                      <button
                        className="w-full py-4 text-left flex rounded-lg items-center justify-between gap-4"
                        aria-expanded={openIndex === index}
                      >
                        <span className="text-2xl font-semibold text-gray-800">{item.question}</span>
                      </button>

                      <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: openIndex === index ? "auto" : 0,
                          opacity: openIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="pb-4 pt-2 text-gray-600">
                          <p className="text-xl leading-tighter tracking-tight">{item.answer}</p>
                        </div>
                        <hr className="border-gray-400" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Image Column */}
                <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center p-10">
                  <motion.img
                    key={faqs[openIndex].image}
                    src={faqs[openIndex].image}
                    className="w-full h-auto object-contain"
                    alt="FAQ visual"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-start items-center gap-10">
                <div className="w-full flex flex-col gap-4 px-10 justify-start lg:w-1/3">
                <div className="text-4xl text-start">
                  <p className="font-bold">One Secure</p>
                  <p className="font-bold">Stack</p>
                </div>

                  <div className="flex flex-col leading-none">
                    <span className="text-gray-700 text-lg">Everything you need to get things done.{" "}</span>
                    
                    
                  </div>
                  <div className="w-48"><p className=" bg-white text-center py-3 border shadow-md border-gray-700 rounded-xl hover:shadow-md hover:shadow-blue-600 cursor-pointer">Join the Waitlist Today</p></div>
                </div>
                {/* Testimonial Card */}
                <div className="w-full max-w-xl">
                  <div>
                    <iframe
                      src="/assets/presentationAyu.html"
                      className="w-full min-w-[600px] sm:min-w-[750px] h-[350px] sm:h-[450px] md:h-[500px] transition-all duration-300 group-hover:shadow-2xl"
                    />
                  </div>
                </div>

                {/* Content */}
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <div className="">
            <section className="relative bg-gradient-to-tl from-blue-700 via-blue-400 to-blue-600  rounded-tr-[150px]">
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="text-left py-10">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-bold text-white leading-tight">
                    Who said great tools have <br className="hidden md:block" />  to come with a price tag?
                  </h2>
                </div>
                {/* Floating logos */}
                <div className="relative h-[300px] md:h-[400px] mt-20">
                  {logos.map((logo, index) => (
                    <motion.div
                      key={index}
                      className="absolute rounded-full bg-white flex items-center justify-center shadow-lg"
                      style={{
                        width: `${logo.size}px`,
                        height: `${logo.size}px`,
                        left: logo.left,
                        top: logo.top,
                        opacity: logo.opacity,
                      }}
                      initial={{ y: 0 }}
                      animate={{
                        y: [0, -15, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 5 + (index % 3),
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "mirror",
                        ease: "easeInOut",
                      }}
                    >
                      <div className="relative w-[70%] h-[70%]">
                        <Image
                          src={logo.src || "/placeholder.svg"}
                          alt={logo.alt}
                          fill
                          sizes={`${logo.size * 0.7}px`}
                          className="object-contain p-1"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Background blur effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] bg-blue-400/20 blur-3xl rounded-full"></div>
            </section>
          </div>
        </FadeInSection>

        <FadeInSection>
          <section className="w-full py-10 mt-10 rounded-tl-[150px]">
            <div className="flex flex-col gap-5 mt-10  justify-center items-center text-center">
              <div className="mb-10 flex flex-col gap-2"><p className="text-gray-800 text-5xl font-semibold">Free, but far from basic. Explore all the<br/></p>
              <p className="text-gray-800 text-5xl font-semibold"> benefits of   <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent animate-gradient-x">
                   UBS Stack</span></p></div>             
              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-items-center">
                {featureCards.map((card, index) => (
                  <FeatureCard
                    key={index}
                    title={card.title}
                    subtitle={card.subtitle}
                    description={card.description}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="w-full rounded-tr-[150px] py-20">
             <div className="flex flex-wrap gap-4 justify-center items-center max-w-full px-2">
                {appIcons.map((icon, index) => (
                  <motion.a
                    key={index}
                    href={icon.href}
                    className="group flex flex-col items-center space-y-2 m-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.img
                      src={icon.src || "/placeholder.svg"}
                      className="relative w-16 h-16"
                      alt={icon.alt || ""}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                    <span className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {icon.alt}
                    </span>
                  </motion.a>
                ))}
              </div>
              <div className="flex flex-col justify-center mb-16 md:mb-24 items-center text-gray-800">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans m-0 text-center"
                >
                  <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent animate-gradient-x">
                    Work Tools
                  </span>{" "}
                  That Don’t Let You <br className="hidden sm:block" />
                  Compromise
                </motion.p>
                <motion.small
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="font-sans mt-5 text-lg sm:text-xl text-gray-500"
                >
                  <p>Secure, Unified, Ethical</p>
                </motion.small>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/signup"
                  className="bg-white mt-8 text-gray-700 px-6 py-3 rounded-xl border border-gray-700 text-sm sm:text-base shadow-md hover:shadow-lg hover:shadow-blue-600"
                >
                  Create Account
                </motion.a>
              </div>

            <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10">
              {/* FAQ Section */}
              <div className="mt-10 lg:mt-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12">FAQs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {/* Question 1 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">How can I add money to my account?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua, ut enim ad minim veniam.
                    </p>
                  </div>

                  {/* Question 2 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      How do I get started with card payments?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua, ut enim ad minim veniam.
                    </p>
                  </div>

                  {/* Question 3 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      How is my document data stored/secured?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua, ut enim ad minim veniam.
                    </p>
                  </div>

                  {/* Question 4 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Can I get a standard card for free?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua, ut enim ad minim veniam.
                    </p>
                  </div>

                  {/* Question 5 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      I do not want to pay now, how can I proceed?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua, ut enim ad minim veniam.
                    </p>
                  </div>

                  {/* Question 6 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      I don&apos;t have the required documents, how can I proceed?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua, ut enim ad minim veniam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </div>
  )
}

function ServiceCard({ href, icon, title, text, image, description, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15), 0 10px 15px -5px rgba(0, 0, 0, 0.1)",
      }}
      className="w-full max-w-[350px] h-auto min-h-[12rem] bg-white hover:border hover:border-[#173E73] rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
    >
      <div className="flex flex-col gap-4 p-6 h-full">
        <span className="flex items-center gap-4">
          <motion.img
            src={icon || "/placeholder.svg"}
            className="w-12 h-12"
            alt={title}
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <p className="text-xl font-semibold text-gray-800">{title}</p>
        </span>
        <div className="flex-grow flex flex-col gap-3 text-gray-800">
          <p className="text-gray-700">{text}</p>
          <img
            src={image || "/placeholder.svg"}
            className="w-full h-auto my-2 rounded-lg transition-all duration-300 hover:shadow-md"
            alt={title}
          />
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <a href={href} className="text-blue-600 font-medium flex items-center group mt-2">
          See more
          <motion.svg
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
          </motion.svg>
        </a>
      </div>
    </motion.div>
  )
}

function FadeInSection({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: "-50px 0px",
  })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

const services = [
  {
    href: "/mail",
    icon: "/assets/mail.png",
    title: "Mail",
    text: "Not just mail. Your new favorite coworker.",
    image: "/mailcube.png",
    description: "Say goodbye to clunky inboxes, sketchy security, and email that feels like a full-time job.",
  },
  {
    href: "/drive",
    icon: "/assets/drive.png",
    title: "Drive",
    text: "No more folder chaos. No more “Where did I save that?” panic.",
    image: "/drivecube.png",
    description: "Give your desktop a break with storage that’s built for focus, not frustration.",
  },
  {
    href: "/meet",
    icon: "/assets/meet.png",
    text: "Tired of “Can you hear me now?” and mysterious calendar invites?",
    title: "Meet",
    image: "/meetcube.png",
    description:
      "Switch to the space where your team clicks—in every sense. No chaos, just clear, secure collaboration.",
  },
  {
    href: "/calendar",
    icon: "/assets/calendar.png",
    title: "Calendar",
    text: "Plan Privately. Stay in Control.",
    image: "/calendarcube.png",
    description:
      "Protect your events with end-to-end encryption — so only you know where you’ll be, when, and with whom.",
  },
   {
    href: "/e_sign",
    icon: "/assets/e-sign.png",
    title: "E-sign",
    text: "Secure Every Signature. Protect Every Deal.",
    image: "/e-signcube.png",
    description:
      "Sign documents with legally binding encryption — no printing, no leaking, no middlemen. Just fast, private approvals you control.",
  },
  {
    href: "/password-manager",
    icon: "/assets/password-manager.png",
    text: "You Remember One. We Guard the Rest.",
    image: "/passwordmancube.png",
    title: "Password Manager",
    description:
      "Forget sticky notes and reused passwords. Lock down your digital life with encryption so strong, even we can't peek.",
  },
  {
    href: "/docs",
    icon: "/assets/docs.png",
    title: "Docs",
    text: "Create with Confidence. No One’s Watching.",
    image: "/docscube.png",
    description:
      "Keep every word encrypted from draft to download. Whether it’s a personal note or a business proposal — it stays between you and your document.",
  },
  {
    href: "/sheets",
    icon: "/assets/sheets.png",
    title: "Sheets",
    text: "Crunch Numbers. Not Your Privacy.",
    image: "/sheetcube.png",
    description:
      "From budgets to dashboards, keep every cell encrypted and collaborate securely without handing over your data.",
  },
  {
    href: "/slides",
    icon: "/assets/slides.png",
    title: "Slides",
    text: "Your Story. Encrypted from Slide One.",
    image: "/slidecube.png",
    description:
      "Whether you’re pitching investors or training your team, your content stays protected — beautifully presented, privately shared..",
  },
 
]

const appIcons = [
  { href: "/mail", src: "/assets/mail.png", alt: "Mail" },
  { href: "/drive", src: "/assets/drive.png", alt: "Drive" },
  { href: "/meet", src: "/assets/meet.png", alt: "Meet" },
  { href: "/calendar", src: "/assets/calendar.png", alt: "Calendar" },

  { href: "/docs", src: "/assets/docs.png", alt: "Docs" },
  { href: "/sheets", src: "/assets/sheets.png", alt: "Sheets" },
  { href: "/slides", src: "/assets/slides.png", alt: "Slides" },
  { href: "/pad", src: "/assets/pad.png", alt: "Pad" },
  { href: "/forms", src: "/assets/forms.png", alt: "Forms" },
  { href: "/e-sign", src: "/assets/e-sign.png", alt: "E-Sign" },
  {
    href: "/password_manager",
    src: "/assets/password-manager.png",
    alt: "Password Manager",
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
    subtitle: "Secure storage, all yours.",
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15), 0 10px 15px -5px rgba(0, 0, 0, 0.1)",
      }}
      className="w-full max-w-[350px] h-auto min-h-[14rem] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100"
    >
      <div className="flex flex-col items-start gap-4 px-6 py-7 h-full">
        <motion.div
          className="bg-gradient-to-r from-[#5DADFF]/10 to-[#BD34FD]/10 px-3 py-1 rounded-full text-sm font-medium text-blue-700"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {subtitle}
        </motion.div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

function LogoPlaceholder({ index }) {
  const colors = [
    "text-blue-600",
    "text-red-500",
    "text-green-500",
    "text-purple-500",
    "text-blue-400",
    "text-indigo-600",
    "text-teal-500",
    "text-pink-500",
  ]

  const logos = [
    // Deutsche Bank-like logo
    <svg key="db" viewBox="0 0 24 24" fill="none" className={colors[index % colors.length]}>
      <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M4 12H20" stroke="currentColor" strokeWidth="2" />
    </svg>,

    // HSBC-like logo
    <svg key="hsbc" viewBox="0 0 24 24" fill="none" className={colors[(index + 1) % colors.length]}>
      <path d="M4 4L20 20M4 20L20 4" stroke="currentColor" strokeWidth="2" />
    </svg>,

    // Atom-like logo
    <svg key="atom" viewBox="0 0 24 24" fill="none" className={colors[(index + 2) % colors.length]}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M12 2C16.4183 2 20 6.47715 20 12C20 17.5228 16.4183 22 12 22" stroke="currentColor" strokeWidth="2" />
      <path d="M12 2C7.58172 2 4 6.47715 4 12C4 17.5228 7.58172 22 12 22" stroke="currentColor" strokeWidth="2" />
    </svg>,

    // Eagle-like logo
    <svg key="eagle" viewBox="0 0 24 24" fill="none" className={colors[(index + 3) % colors.length]}>
      <path
        d="M12 4C8 4 4 8 4 12C4 16 8 20 12 20C16 20 20 16 20 12C20 8 16 4 12 4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M12 8L8 12L12 16L16 12L12 8Z" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>,

    // Square-like logo
    <svg key="square" viewBox="0 0 24 24" fill="none" className={colors[(index + 4) % colors.length]}>
      <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="2" />
    </svg>,

    // Star-like logo
    <svg key="star" viewBox="0 0 24 24" fill="none" className={colors[(index + 5) % colors.length]}>
      <path d="M12 4L14 9H19L15 12L17 17L12 14L7 17L9 12L5 9H10L12 4Z" stroke="currentColor" strokeWidth="2" />
    </svg>,

    // Circle-like logo
    <svg key="circle" viewBox="0 0 24 24" fill="none" className={colors[(index + 6) % colors.length]}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>,

    // Droplet-like logo
    <svg key="droplet" viewBox="0 0 24 24" fill="none" className={colors[(index + 7) % colors.length]}>
      <path
        d="M12 4C12 4 6 10 6 14C6 18 9 20 12 20C15 20 18 18 18 14C18 10 12 4 12 4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>,
  ]

  return logos[index % logos.length]
}
