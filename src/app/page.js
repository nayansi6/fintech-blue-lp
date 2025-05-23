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
              <h1 className="font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl text-center">
                Privacy Starts at the Core.
              </h1>
            </div>

            <p className="text-center text-white text-shadow max-w-xl text-base sm:text-lg md:text-xl ">
              Every message, file, and interaction is protected by zero-knowledge encryption — by default, not request.
            </p>

            <div className="flex justify-center items-center mt-6">
              <Link
                href="#"
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-colors"
              >
                Create Account <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex mt-10 justify-center items-center text-center">
              <div className="flex flex-wrap justify-center items-center max-w-full">
                {appIcons.map((icon, index) => (
                  <motion.a
                    key={index}
                    href={icon.href}
                    className="group flex flex-col items-center m-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="w-14 sm:w-16 md:w-20 overflow-hidden">
                      <motion.img
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
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <>
          <section className="w-full py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl tracking-tight lg:text-4xl font-bold text-gray-800 mb-4">
                  A Secure Hub that minds its own{" "}
                  <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent">
                    Business{" "}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg sm:text-xl mx-auto">All-in-one. All buttoned up. All yours.</p>
              </div>

              <div className="text-left text-2xl sm:text-3xl font-semibold py-5 px-4 sm:px-10">
                <p className="text-gray-800">Our Products :</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-10 justify-items-center">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    href={service.href}
                    title={service.title}
                    text={service.text}
                    image={service.image}
                    description={service.description}
                    index={index}
                  />
                ))}
              </div>

              <div className="text-center mt-16 sm:mt-20">
                <motion.a
                  className="inline-block bg-white px-6 py-3 shadow-md border border-gray-700 rounded-xl hover:shadow-md hover:shadow-[#0066cc] cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Create A Free Account
                </motion.a>
              </div>
            </div>
          </section>
        </>

        {/* Features Section */}
        <>
          <section className="w-full">
            <div className="flex flex-col justify-center items-center">
              <div className="text-center flex flex-col justify-center gap-4 items-center px-4 sm:px-6">
                <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                  Don't let your work be someone else's{" "}
                  <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent animate-gradient-x">
                    business.
                  </span>
                </p>
                <small className="text-lg sm:text-xl text-gray-500">
                  Work in complete privacy, with full control of your data.
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
                      <p className="text-2xl sm:text-3xl md:text-2xl text-gray-800">Zero-Knowledge Encryption</p>
                      <small className="block text-start text-base sm:text-[17px] text-gray-500 mt-2">
                        We can't read your emails — and neither can anyone else.
                        <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent font-semibold">
                          {" "}
                          It's privacy by architecture — not policy.
                        </span>
                      </small>
                      <div className="mt-5">
                        <motion.a
                          className="inline-block bg-white px-6 py-3 shadow-md border border-gray-700 rounded-xl hover:shadow-md hover:shadow-[#0066cc] cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          Learn More
                        </motion.a>
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
                      <p className="text-2xl sm:text-3xl md:text-2xl text-gray-800">Multi-Node Encrypted Storage</p>
                      <small className="block text-start text-base sm:text-[17px] text-gray-500 mt-2">
                        Your files aren't in one place — and that's a good thing.
                        <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent font-semibold">
                          {" "}
                          It's security through distribution — not dependence.
                        </span>
                      </small>
                      <div className="mt-5">
                        <motion.a
                          className="inline-block bg-white px-6 py-3 shadow-md border border-gray-700 rounded-xl hover:shadow-md hover:shadow-[#0066cc] cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          Learn More
                        </motion.a>
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
                      <p className="text-2xl sm:text-3xl md:text-2xl text-gray-800">Swiss-Based Data Centers</p>
                      <small className="block text-start text-base sm:text-[17px] text-gray-500 mt-2">
                        Neutral ground, strict laws, maximum protection.
                        <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent font-semibold">
                          {" "}
                          It's legal protection by location — not loopholes.
                        </span>
                      </small>
                      <div className="mt-5">
                        <motion.a
                          className="inline-block bg-white px-6 py-3 shadow-md border border-gray-700 rounded-xl hover:shadow-md hover:shadow-[#0066cc] cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          Learn More
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </>

                {/* Feature 4 */}
                <>
                  <div className="w-full flex flex-col md:flex-row-reverse px-4 sm:px-6 md:px-10 mb-10 md:mb-20 gap-8 md:gap-16 lg:gap-20 justify-center items-center">
                    <div className="w-full md:w-1/2 lg:w-auto">
                      <div className="relative group">
                        <img
                          src="/complience_first.png"
                          className="w-full lg:h-[380px] h-auto max-w-full "
                          alt="Compliance-First Architecture"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 max-w-md">
                      <p className="text-2xl sm:text-3xl md:text-2xl text-gray-800">Compliance-First Architecture</p>
                      <small className="block text-start text-base sm:text-[17px] text-gray-500 mt-2">
                        We don't just meet standards — we're built on them.
                        <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent font-semibold">
                          {" "}
                          It's compliance in code — not just in checklists.
                        </span>
                      </small>
                      <div className="mt-5">
                        <motion.a
                          className="inline-block bg-white px-6 py-3 shadow-md border border-gray-700 rounded-xl hover:shadow-md hover:shadow-[#0066cc] cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          Learn More
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </>
              </div>

              {/* One Secure Stack Section */}
              <div className="flex flex-col-reverse lg:flex-row justify-start items-center lg:gap-0 gap-20 px-4 sm:px-6 lg:px-8  py-0">
                <div className="w-full flex flex-col gap-4 lg:w-1/3">
                  <div className="text-3xl sm:text-4xl text-center lg:text-start">
                    <p className="font-bold">One Secure</p>
                    <p className="font-bold">Stack</p>
                  </div>

                  <div className="flex flex-col leading-none text-center lg:text-start">
                    <span className="text-gray-700 text-lg">Everything you need to get things done. </span>
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <p className="w-48 bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] text-white text-center py-3 border shadow-md border-gray-700 rounded-xl hover:shadow-md hover:shadow-[#0066cc] cursor-pointer">
                      Join the Waitlist Today
                    </p>
                  </div>
                </div>

                {/* Presentation iframe */}
                <div className="w-[400px] lg:w-[800px] overflow-hidden">
                  <div className="relative aspect-video w-full">
                    <iframe
                      src="/assets/presentationAyu.html"
                      className="w-full h-full rounded-lg shadow-lg"
                      style={{ maxWidth: "100%" }}
                      title="Presentation"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>

        {/* Benefits Section */}
        <>
          <div>
            <section className="relative  flex justify-center bg-gradient-to-tl mt-20 lg:mb-0 from-blue-700 via-blue-400 to-blue-600 rounded-tr-[50px] sm:rounded-tr-[100px] lg:rounded-tr-[150px]">
              <div className="flex flex-col gap-5 max-w-[1371px] py-16 sm:py-20 px-4 sm:px-10 lg:px-20 text-center">
                <div className="mb-10 flex flex-col tracking-tight items-center sm:items-start gap-2">
                  <p className="text-white text-3xl sm:text-4xl font-semibold">Free, but far from basic. Explore</p>
                  <p className="text-white text-3xl sm:text-4xl font-semibold">all the benefits of UB System Stack</p>
                </div>

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

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] bg-blue-400/20 blur-3xl rounded-full"></div>
            </section>
          </div>
        </>

        {/* Mission & Vision Section */}
        <>
          <section className="px-4 py-16 sm:py-20 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-12">
                Privacy Is Our Starting Point —{" "}
                <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent">
                  Not an Afterthought
                </span>
              </h2>

              <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 justify-center items-center mb-8">
                {/* Left Card */}
                <div className="w-full flex flex-col mt-5 justify-center items-center gap-3 lg:gap-8 md:w-1/2">
                  <img src="/mission.png" className="w-full lg:h-[330px] h-auto rounded-3xl shadow-md" alt="Our Mission" />
                   <div className="flex flex-col text-start">
                  <p className="font-semibold text-gray-700">Mission:</p>
                  <p className="text-gray-500">
                    We started with a simple belief: teams shouldn't have to choose between working freely and staying
                    private. What drives us is the idea that security should never slow you down — it should empower
                    you. That's why we're building a unified workspace where privacy isn't patched in — it's part of the
                    blueprint.
                  </p>
                </div>
                </div>

                {/* Right Card */}
                <div className="w-full flex flex-col justify-center items-center  gap-3 lg:gap-8 md:w-1/2">
                  <img src="/vision.png" className="w-full lg:h-[330px] h-auto rounded-3xl shadow-md" alt="Our Vision" />
                  <div className="flex flex-col text-start">
                  <p className="font-semibold text-gray-700">Vision:</p>
                  <p className="text-gray-500">
                    We're fueled by a future where businesses aren't chained to platforms that exploit their data. Where
                    work happens across borders, systems, and devices — with encryption and decentralization built-in.
                    We imagine a world where control returns to the user, and we're here to help build it.
                  </p>
                </div>
                </div>
              </div>

            </div>
          </section>
        </>

        {/* Blog Section */}
        <>
          <section className="w-full py-16 sm:py-20">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Latest From Our{" "}
                  <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent">
                    Blog
                  </span>
                </h2>
                <p className="text-gray-600 text-xl sm:text-2xl mx-auto">Insights, stories, and expert advice</p>
              </div>

              <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {blogs.map((blog, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative pt-[60%]">
                      <img
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{blog.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                      <div className="flex justify-start">
                        <motion.a
                          href={blog.slug}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] text-white rounded-lg hover:opacity-90"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          Read More
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-12 sm:mt-16">
                <motion.a
                  className="inline-block bg-white px-6 py-3 shadow-md border border-gray-700 rounded-xl hover:shadow-md hover:shadow-[#0066cc] cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  View All Posts
                </motion.a>
              </div>
            </div>
          </section>
        </>

        {/* App Icons Section */}
        <>
          <section className="w-full py-10 sm:py-16">
            <div className="flex flex-wrap justify-center items-center max-w-full px-4">
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
                    className="relative w-12 h-12 sm:w-16 sm:h-16"
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

            <div className="flex flex-col justify-center mb-16 md:mb-24 items-center text-gray-800 px-4 sm:px-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold m-0 text-center"
              >
                <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent animate-gradient-x">
                  Work Tools
                </span>{" "}
                That Don't Let You <br className="hidden sm:block" />
                Compromise
              </motion.p>
              <motion.small
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="mt-5 text-base sm:text-lg text-gray-500"
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
                className="bg-white mt-8 text-gray-700 px-6 py-3 rounded-xl border border-gray-700 text-sm sm:text-base shadow-md hover:shadow-lg hover:shadow-[#0066cc]"
              >
                Create Account
              </motion.a>
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
    <motion.div
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
          <span className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-1 sm:gap-2">
            <p className="font-semibold text-gray-800">{title}:</p>
            <p className="text-gray-700">{text}</p>
          </span>
        </div>

        <a href={href} className="text-blue-600 font-medium flex items-center group ">
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
      className="w-full h-auto min-h-[14rem] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100"
    >
      <div className="flex flex-col items-start gap-4 px-4 sm:px-6 py-5 sm:py-7 h-full">
        <motion.div
          className="bg-gradient-to-r from-[#5DADFF]/10 to-[#BD34FD]/10 px-3 py-1 rounded-full text-sm font-medium text-blue-700"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {subtitle}
        </motion.div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
    </motion.div>
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
