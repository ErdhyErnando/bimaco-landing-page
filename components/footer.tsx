import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

const footerLinks = [
  { name: "BLOG", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
  { name: "WHY BIMACO?", href: "/why-bimaco" },
  { name: "JOIN US", href: "/join-us" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="sticky z-0 bottom-0 left-0 w-full h-[350px] bg-white text-darkBlue rounded-t-3xl shadow-[0_-5px_15px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-4 py-8 h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
          {/* Left - Partner Logos */}
          <div className="flex items-center space-x-6">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="HALAL Certified"
              width={60}
              height={60}
              className="object-contain"
            />
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="BPOM Certified"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Center - Navigation */}
          <div className="flex flex-col items-center space-y-4">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-montserrat hover:text-[#B79237] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#B79237] to-[#C9AE6A] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right - Social Media */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="font-montserrat font-semibold mb-2">FOLLOW US</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="hover:text-[#B79237] transition-all transform hover:-translate-y-1 duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom - Logo and Copyright */}
        <div className="flex flex-col items-center pt-6 border-t border-gray-200">
          <Link href="/">
            <div className="mb-4 relative group">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Bima Logo"
                width={120}
                height={40}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-[#B79237]/10 to-[#C9AE6A]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
          <p className="text-sm text-gray-600 font-montserrat">© {currentYear} Bimaco. all right reserved</p>
        </div>
      </div>
    </footer>
  )
}

