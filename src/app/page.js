"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
      src: "/assets/chat.png",
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
  ];

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
     ];

     const step=[
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="max-w-[1440px]">
    <div className="bg-gray-50">
      <section className="bg-gradient-to-tl max-h-screen from-blue-600 via-blue-400 to-blue-600 h-[600px] rounded-bl-[100px]">
        <div className="max-w-7xl mb-10 flex flex-col md:flex-row items-center justify-between overflow-hidden ">
          {/* Left side content */}
          <div className="w-full md:w-1/2 text-white z-10 mb-10  p-4 md:p-8 lg:p-12 md:mb-0">
            <div className="flex flex-col text-5xl items-start mb-5">
              <div className="font-bold">Create physical and</div>
              <div className=" font-bold">virtual cards for your</div>
              <div className="text-5xl font-bold">business</div>
            </div>

            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Get your card <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-400 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Read documentation
              </Link>
            </div>
          </div>

          {/* Right side card mockups */}
          <div className=" w-1/2 mt-32">
          <div className=" h-[450px] w-[800px] mt-20 shadow-lg shadow-white ml-10 overflow-hidden">
                        <img src="/email-img.png" alt="Profile" className="h-[450px] w-[1000px] shadow-lg shadow-white overflow-hidden"    />

          </div>
          </div>
        </div>
      </section>
        <FadeInSection>
        <section className="w-full py-20 lg:py-28">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                A Secure Hub that minds its own{" "}
                <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent">
                  Business{" "}
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">All-in-one. All buttoned up. All yours.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  href={service.href}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="bg-[#1a2235] text-white overflow-hidden relative py-16 md:py-24 mb-20 rounded-tr-[100px]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className=" items-center">
              <div className="text-center mb-20">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 space-y-3">
                  Don’t let your work be someone <br />{" "}
                  <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text  text-transparent animate-gradient-x">
                    else’s business.
                  </span>
                  <br className="hidden sm:block" />
                  <small className="text-xl text-gray-500">
                    Work in complete privacy, with full control of your data.
                  </small>
                </p>
              </div>

              <FadeInSection>
                <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-10 justify-center mb-10 md:mb-20 gap-8 md:gap-20 items-center">
                  <div className="w-full md:w-auto relative group">
                    <iframe
                      src="/assets/presentation4.html"
                      className="w-full min-w-[300px] sm:min-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] rounded-3xl border border-gray-100 shadow-xl transition-all duration-300 group-hover:shadow-2xl"
                    />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#5DADFF]/10 to-[#BD34FD]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-6 max-w-md">
                    <p>
                      unified binary system was built on a simple belief:{" "}
                      <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] font-semibold bg-clip-text text-transparent">
                        your data belongs to you
                      </span>
                      . In a digital world dominated by surveillance and
                      monetization, we provide a radically private, integrated
                      office suite for professionals, teams, and businesses who
                      value{" "}
                      <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] font-semibold bg-clip-text text-transparent">
                        control, clarity, and confidentiality
                      </span>
                      . From email and storage to docs and meetings—every tool
                      is engineered for security without compromise.
                    </p>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="w-full flex flex-col md:flex-row px-4 sm:px-6 md:px-10 gap-8 md:gap-20 justify-center items-center">
                  <div className="space-y-3  max-w-md order-2 md:order-1">
                    <p>
                      We envision a future where individuals and organizations
                      can create, collaborate, and connect without being tracked
                      or sold. unified binary system is redefining digital
                      productivity—where{" "}
                      <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] font-semibold bg-clip-text text-transparent">
                        privacy is the default, not a luxury
                      </span>
                      . We aim to become the most trusted digital workspace for
                      the{" "}
                      <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] font-semibold bg-clip-text text-transparent">
                        privacy-first generation
                      </span>
                      .
                    </p>
                  </div>
                  <div className="w-full md:w-auto order-1 md:order-2">
                    <div className="w-full md:w-auto relative group">
                      <iframe
                        src="/assets/presentation5.html"
                        className="w-full min-w-[300px] sm:min-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] rounded-3xl border border-gray-100 shadow-xl transition-all duration-300 group-hover:shadow-2xl"
                      />
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#5DADFF]/10 to-[#BD34FD]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>

          {/* Background gradient */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/30 to-transparent rounded-full blur-3xl"></div>
        </section>
      </FadeInSection>
      <FadeInSection>
            <section className="w-full bg-gray-200 py-10 rounded-tr-[100px]">
              <div className="flex flex-col gap-5 mt-10  justify-center items-center text-center">
                <div className="flex flex-wrap gap-1 justify-center items-center max-w-full px-2">
                   {appIcons.map((icon, index) => (
                  <a key={index} href={icon.href} className="group flex flex-col  space-y-1">
                    <img
                      src={icon.src || "/placeholder.svg"}
                      className="relative w-16 h-16 transition-transform duration-300 group-hover:-translate-y-2"
                      alt={icon.alt || ""}
                    />
                    <span className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      {icon.alt}
                    </span>
                  </a>
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
                    That Don’t Let You  <br className="hidden sm:block" />
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
                    className="bg-gradient-to-r from-[#6C70FF] to-[#5D7DFF] mt-8 text-white px-6 py-3 rounded-3xl text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 font-medium"
                  >
                    Create Account
                  </motion.a>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-items-center">
                  {featureCards.map((card, index) => (
                    <FeatureCard key={index} title={card.title} subtitle={card.subtitle} description={card.description} index={index} />
                  ))}
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section className="w-full bg-gray-200 ">
            <div className="flex flex-col justify-center border-t-3 border-gray-400 py-15 rounded-tr-[150px] items-center gap-20 sm:gap-28 md:gap-36">
              
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
                   Don’t let your work be someone <br/> <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent animate-gradient-x">
                      else’s business. 
                    </span>
                    <br className="hidden sm:block" />
                    <small className="text-xl text-gray-500">Work in complete privacy, with full control of your data.</small>
                  </p>
                </div>
            

              {/* Feature 1 */}
              <FadeInSection>
                <div className="flex flex-col md:flex-row w-full px-4 sm:px-6 md:px-10 gap-8 md:gap-20 justify-center items-center">
                  <div className="w-full md:w-auto">
                    <div className="relative group">
                      <iframe
                        src="/assets/presentation3.html"
                        allowFullScreen
                        className="w-full min-w-[300px] sm:min-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] rounded-3xl border border-gray-100 shadow-xl transition-all duration-300 group-hover:shadow-2xl"
                      />
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#5DADFF]/10 to-[#BD34FD]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="max-w-md">
                    <p className="text-2xl sm:text-3xl md:text-2xl text-gray-800 font-serif">
                      "Privacy Built In, Security Locked Down"
                    </p>
                    <small className="block text-start text-base sm:text-[17px] text-gray-500 ml-4 mt-2">
                      Every action — from writing to sharing — is protected with strong encryption. UBS was built from the ground up to 
                       <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent font-semibold">
                        {" "}
                        keep your data safe, always.
                      </span>
                    </small>
                  </div>
                </div>
              </FadeInSection>

              {/* Feature 2 */}
              <FadeInSection>
                <div className="w-full  flex flex-col md:flex-row px-4 sm:px-6 md:px-10 gap-8 md:gap-20 justify-center items-center">
                  <div className="space-y-3  max-w-md order-2 md:order-1">
                    <div className="text-2xl sm:text-3xl md:text-2xl font-serif text-gray-800">
                      <p>"Zero-Knowledge Architecture"</p>
                    </div>
                    <p className="text-base sm:text-lg px-3 text-gray-500 leading-relaxed">
                    Only you hold the keys. UBS can’t read or access your files, messages, or any content — 
                    <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent font-semibold">
                        {" "}
                       and never will.
                      </span>
                    </p>
                   
                  </div>
                  <div className="w-full md:w-auto order-1 md:order-2">
                    <div className="relative group">
                      <iframe
                        src="/assets/presentation5.html"
                        className="w-full min-w-[300px] sm:min-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] rounded-3xl border border-gray-100 shadow-xl transition-all duration-300 group-hover:shadow-2xl"
                      />
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#5DADFF]/10 to-[#BD34FD]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              {/* Feature 3 */}
              <FadeInSection>
                <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-10 justify-center mb-10 md:mb-20 gap-8 md:gap-20 items-center">
                  <div className="w-full md:w-auto relative group">
                    <iframe
                      src="/assets/presentation4.html"
                      className="w-full min-w-[300px] sm:min-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] rounded-3xl border border-gray-100 shadow-xl transition-all duration-300 group-hover:shadow-2xl"
                    />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#5DADFF]/10 to-[#BD34FD]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-2 max-w-md">
                    <p className="text-2xl sm:text-3xl md:text-2xl font-serif text-gray-800">
                     "One Account. All Tools. Free Forever."
                    </p>
                    <p className="text-base sm:text-lg text-gray-500 px-5 leading-relaxed">
                      Use everything — docs, chat, storage, calendar — with one secure login. No paywalls. No traps. 
                      <span className="bg-gradient-to-r from-[#5DADFF] to-[#BD34FD] bg-clip-text text-transparent font-semibold">
                        {" "}
                        Just freedom to work, for life.
                      </span>
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </section>
          </FadeInSection>

      <FadeInSection>
        <div className="bg-gray-200">
          <section className="relative bg-gradient-to-tl from-blue-700 via-blue-400 to-blue-600 py-10 lg:py-20 rounded-tr-[100px]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-left mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Get started in minutes and connect <br className="hidden md:block" /> all your accounts in one place
              </h2>
            </div>
            {/* Floating logos */}
            <div className="relative h-[300px] md:h-[400px]">
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
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3 + (index % 2),
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="relative w-[60%] h-[60%]">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      fill
                      sizes={`${logo.size * 0.6}px`}
                      className="object-contain p-1"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step) => (
                <div key={step.id} className="px-8 text-white">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-teal-300 text-blue-900 font-bold flex items-center justify-center text-lg">
                      {step.id}
                    </div>
                  </div>
                  <h3 className="text-xl text-white font-bold mb-3">{step.title}</h3>
                  <p className="text-blue-100">{step.description}</p>
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
                  <h3 className="text-xl text-white font-bold mb-3">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Background blur effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] bg-blue-400/20 blur-3xl rounded-full"></div>
        </section>
        </div>
      </FadeInSection>

        <FadeInSection>
        <section className="w-full bg-gray-200 rounded-tl-[100px] mt-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
            {/* Testimonial */}
            <div className="flex flex-col lg:flex-row  items-center mb-24">

              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl lg:text-5xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Compliance built card for businesses 
                </h2>

                <div className="space-y-1">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">Identity verifications</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">Secure credit card data tokenization</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">Online and mobile payments</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">IGlobal regulations and compliance</span>
                  </div>
                </div>
              </div>
              {/* Testimonial Card */}
              <div className="w-full lg:w-1/2 max-w-xl">
                <div>
                  <iframe
                      src="/assets/presentationAyu.html"
                      className="w-full min-w-[400px] sm:min-w-[600px] h-[350px] sm:h-[450px] md:h-[500px] transition-all duration-300 group-hover:shadow-2xl"
                    />
                </div>
         
              </div>

              {/* Content */}
              
            </div>

            {/* FAQ Section */}
            <div className="mt-10 lg:mt-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12">FAQs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {/* Question 1 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">How can I add money to my account?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua, ut enim ad minim veniam.
                  </p>
                </div>

                {/* Question 2 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">How do I get started with card payments?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua, ut enim ad minim veniam.
                  </p>
                </div>

                {/* Question 3 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">How is my document data stored/secured?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua, ut enim ad minim veniam.
                  </p>
                </div>

                {/* Question 4 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Can I get a standard card for free?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua, ut enim ad minim veniam.
                  </p>
                </div>

                {/* Question 5 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    I do not want to pay now, how can I proceed?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua, ut enim ad minim veniam.
                  </p>
                </div>

                {/* Question 6 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    I don&apos;t have the required documents, how can I proceed?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua, ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>       

    </div>
    </div>
  );
}

function ServiceCard({ href, icon, title, description, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      }}
      className="w-full max-w-[350px] h-auto min-h-[12rem] bg-white hover:border hover:border-[#173E73] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="flex flex-col gap-3 p-5 h-full">
        <span className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-2 rounded-lg">
            <img
              src={icon || "/placeholder.svg"}
              className="w-10 h-10"
              alt={title}
            />
          </div>
          <p className="text-xl font-semibold text-gray-800">{title}</p>
        </span>
        <div className="flex-grow text-gray-600">{description}</div>
        <a
          href={href}
          className="text-blue-600 font-medium flex items-center group"
        >
          See more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

function FadeInSection({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    href: "/mail",
    icon: "/assets/mail.png",
    title: "ubs Mail",
    description:
      "Secure, private email with powerful features—built for teams who value control and clarity.",
  },
  {
    href: "/drive",
    icon: "/assets/drive.png",
    title: "ubs Drive",
    description:
      "Store, share, and sync your files with end-to-end encrypted cloud storage—on your terms.",
  },
  {
    href: "/meet",
    icon: "/assets/meet.png",
    title: "ubs Meet",
    description:
      "Host encrypted video meetings that respect your time and your data—no installs, no surveillance.",
  },
  {
    href: "/calendar",
    icon: "/assets/calendar.png",
    title: "ubs Calendar",
    description:
      "Plan, schedule, and stay in sync—your private, encrypted calendar for work and life.",
  },
  {
    href: "/contacts",
    icon: "/assets/contacts.png",
    title: "ubs Contacts",
    description:
      "Manage and organize your professional network securely—no ads, no leaks, just clarity.",
  },
  {
    href: "/task",
    icon: "/assets/task.png",
    title: "ubs Tasks",
    description:
      "Capture thoughts, tasks, and ideas—securely synced across all your devices, always encrypted.",
  },
  {
    href: "/docs",
    icon: "/assets/docs.png",
    title: "ubs Docs",
    description:
      "Collaborate in real-time on beautifully simple, secure documents—no data leaks, no distractions.",
  },
  {
    href: "/sheets",
    icon: "/assets/sheets.png",
    title: "ubs Sheets",
    description:
      "Analyze, calculate, and visualize with privacy-first spreadsheets—built for serious work.",
  },
  {
    href: "/slides",
    icon: "/assets/slides.png",
    title: "ubs Slides",
    description:
      "Design impactful presentations together—real-time collaboration with zero data compromise.",
  },
];

const appIcons = [
  { href: "/mail", src: "/assets/mail.png", alt: "Mail" },
  { href: "/drive", src: "/assets/drive.png", alt: "Drive" },
  { href: "/meet", src: "/assets/meet.png", alt: "Meet" },
  { href: "/chat", src: "/assets/chat.png", alt: "Chat" },
  { href: "/calendar", src: "/assets/calendar.png", alt: "Calendar" },
  { href: "/contacts", src: "/assets/contacts.png", alt: "Contacts" },
  { href: "/task", src: "/assets/task.png", alt: "Task" },
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
];

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
];

function FeatureCard({ title, subtitle, description, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      }}
      className="w-full max-w-[350px] h-auto min-h-[14rem] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100"
    >
      <div className="flex flex-col items-start gap-3 px-5 py-6 h-full">
        <div className="bg-gradient-to-r from-[#5DADFF]/10 to-[#BD34FD]/10 px-3 py-1 rounded-full text-sm font-medium text-blue-700">
          {subtitle}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
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
  ];

  const logos = [
    // Deutsche Bank-like logo
    <svg
      key="db"
      viewBox="0 0 24 24"
      fill="none"
      className={colors[index % colors.length]}
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M4 12H20" stroke="currentColor" strokeWidth="2" />
    </svg>,

    // HSBC-like logo
    <svg
      key="hsbc"
      viewBox="0 0 24 24"
      fill="none"
      className={colors[(index + 1) % colors.length]}
    >
      <path d="M4 4L20 20M4 20L20 4" stroke="currentColor" strokeWidth="2" />
    </svg>,

    // Atom-like logo
    <svg
      key="atom"
      viewBox="0 0 24 24"
      fill="none"
      className={colors[(index + 2) % colors.length]}
    >
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2C16.4183 2 20 6.47715 20 12C20 17.5228 16.4183 22 12 22"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 2C7.58172 2 4 6.47715 4 12C4 17.5228 7.58172 22 12 22"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>,

    // Eagle-like logo
    <svg
      key="eagle"
      viewBox="0 0 24 24"
      fill="none"
      className={colors[(index + 3) % colors.length]}
    >
      <path
        d="M12 4C8 4 4 8 4 12C4 16 8 20 12 20C16 20 20 16 20 12C20 8 16 4 12 4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 8L8 12L12 16L16 12L12 8Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>,

    // Square-like logo
    <svg
      key="square"
      viewBox="0 0 24 24"
      fill="none"
      className={colors[(index + 4) % colors.length]}
    >
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>,

    // Star-like logo
    <svg
      key="star"
      viewBox="0 0 24 24"
      fill="none"
      className={colors[(index + 5) % colors.length]}
    >
      <path
        d="M12 4L14 9H19L15 12L17 17L12 14L7 17L9 12L5 9H10L12 4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>,

    // Circle-like logo
    <svg
      key="circle"
      viewBox="0 0 24 24"
      fill="none"
      className={colors[(index + 6) % colors.length]}
    >
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>,

    // Droplet-like logo
    <svg
      key="droplet"
      viewBox="0 0 24 24"
      fill="none"
      className={colors[(index + 7) % colors.length]}
    >
      <path
        d="M12 4C12 4 6 10 6 14C6 18 9 20 12 20C15 20 18 18 18 14C18 10 12 4 12 4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>,
  ];

  return logos[index % logos.length];
}

