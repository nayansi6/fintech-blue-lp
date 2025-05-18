import Link from "next/link"
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Rss,
  Youtube,
  MessageCircle,
  Send,
  Music2,
  CircleUser,
} from "lucide-react"

export default function SocialLinks() {
  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <CircleUser className="w-5 h-5" />, href: "https://reddit.com", label: "Reddit" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Rss className="w-5 h-5" />, href: "https://rss.com", label: "RSS" },
    { icon: <CircleUser className="w-5 h-5" />, href: "https://threads.net", label: "Threads" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "https://whatsapp.com", label: "WhatsApp" },
    { icon: <Send className="w-5 h-5" />, href: "https://telegram.org", label: "Telegram" },
    { icon: <CircleUser className="w-5 h-5" />, href: "https://medium.com", label: "Medium" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com", label: "YouTube" },
    { icon: <Music2 className="w-5 h-5" />, href: "https://tiktok.com", label: "TikTok" },

  ]

  return (
    <div className="bg-gray-800 rounded-lg">
      <div className="flex gap-1 flex-wrap">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            aria-label={link.label}
            className="bg-gray-700 rounded-lg p-1 flex items-center justify-center text-gray-500 hover:bg-gray-600 transition-colors"
          >
            {link.icon}
          </Link>
        ))}
      </div>
      {/* <div className=" flex gap-1">
        {socialLinks.slice(7, 13).map((link, index) => (
          <Link
            key={index}
            href={link.href}
            aria-label={link.label}
            className="bg-purple-200 rounded-lg p-3 flex items-center justify-center text-white hover:bg-purple-300 transition-colors"
          >
            {link.icon}
          </Link>
        ))}
      </div> */}
    </div>
  )
}
