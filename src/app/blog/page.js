import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Why Privacy Matters in 2025",
    description:
      "Explore the growing importance of data protection and how UBS is leading the privacy-first revolution.",
    image: "/assets/images/blog1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Inside UBS Mail: Secure Email for Professionals",
    description:
      "Dive into the features that make UBS Mail the most secure email solution for teams and individuals.",
    image: "/assets/images/blog2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "The Future of Confidential Collaboration",
    description:
      "Discover how UBS Docs and Meet ensure encrypted communication and seamless teamwork.",
    image: "/assets/images/blog3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "What Makes a Privacy-First Office Suite?",
    description:
      "Learn the key principles behind truly private productivity tools—and how UBS designs every feature around them.",
    image: "/assets/images/blog4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Encrypted Collaboration: How UBS Meet Protects Your Conversations",
    description:
      "Go behind the scenes of UBS Meet and discover how we ensure every meeting is fully encrypted and secure by design.",
    image: "/assets/images/blog5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "No Ads. No Trackers. Just Work.",
    description:
      "Unlike traditional platforms, UBS does not monetize user data. Here's why that's critical for your workflow.",
    image: "/assets/images/blog6.jpg",
    link: "#",
  },
  {
    id: 7,
    title: "Zero-Knowledge Storage: What It Means and Why It Matters",
    description:
      "UBS Drive uses zero-knowledge encryption to ensure your files remain truly yours. We explain the tech in plain English.",
    image: "/assets/images/blog7.jpg",
    link: "#",
  },
  {
    id: 8,
    title: "How UBS Helps Remote Teams Stay Private and Productive",
    description:
      "See how distributed teams use UBS for secure collaboration without compromising on privacy or speed.",
    image: "/assets/images/blog8.jpg",
    link: "#",
  },
  {
    id: 9,
    title: "From Big Tech to Private Tech: A Founder’s Journey",
    description:
      "Hear the story behind UBS—from a mission-driven response to surveillance capitalism to building the future of private productivity.",
    image: "/assets/images/blog9.jpg",
    link: "#",
  },
  
];

const Blog = () => {
  return (
    <section className="min-h-screen py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          UBS <span className="text-blue-600">Blog</span>
        </h2>
        <p className="mt-2 text-gray-600">
          Insights, updates, and ideas on privacy-first productivity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h3>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <a
                href={post.link}
                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
