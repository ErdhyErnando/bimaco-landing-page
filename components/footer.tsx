import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import bimacoLogo from "./../public/bimaco-logo.webp";
import halalMui from "./../public/halal-mui.webp";
import bpomLogo from "./../public/bpom-logo.webp";

const footerLinks = [
  { name: "BLOG", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
  { name: "WHY BIMACO?", href: "/why-bimaco" },
  { name: "JOIN US", href: "/join-us" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sticky z-0 bottom-0 left-0 w-full bg-white text-darkBlue rounded-t-2xl shadow-[0_-5px_15px_rgba(0,0,0,0.2)]">
      {/* Adjusted padding and removed fixed height */}
      <div className="container mx-auto px-4 py-8">
        {/* Removed mb-8 from grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left - Partner Logos */}
          <div className="flex items-center justify-center md:justify-start space-x-6">
            {" "}
            {/* Centered on mobile */}
            <Image
              src={halalMui}
              alt="HALAL MUI Certified"
              width={35}
              height={35}
              className="object-contain"
            />
            <Image
              src={bpomLogo}
              alt="BPOM Logo Certified"
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
                const Icon = social.icon;
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
                );
              })}
            </div>
          </div>

          {/* Bottom - Logo and Copyright - Moved inside grid */}
          {/* Added col-span-1 md:col-span-3 to make it span full width */}
          {/* Added mt-8 for spacing */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-center pt-2 mt-8 border-t border-gray-200">
            <Link href="/">
              <div className="mb-4 relative group">
                <Image
                  src={bimacoLogo}
                  alt="Bimaco Logo"
                  width={120}
                  height={40}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {/* Added absolute positioning and pointer-events-none to the hover effect div */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#B79237]/10 to-[#C9AE6A]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </Link>
            <p className="text-sm text-gray-600 font-montserrat">
              © {currentYear} Bimaco. all right reserved
            </p>
          </div>
        </div>{" "}
        {/* End of grid div */}
      </div>{" "}
      {/* End of container div */}
    </footer>
  );
}
