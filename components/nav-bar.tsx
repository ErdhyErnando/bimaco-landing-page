"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserCircle, Menu, X } from "lucide-react";
import bimacoLogo from "./../public/bimaco-logo.webp";

export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Don't hide navbar when mobile menu is open
      if (!mobileMenuOpen) {
        // Set visible if scrolling up or at the top of the page
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      } else {
        // Keep navbar visible when menu is open
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, mobileMenuOpen]);

  // Close mobile menu when resizing to larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    // Wrap everything in a React Fragment
    <>
      <nav
        // Ensure the nav itself has a high z-index, but lower than the menu
        className={`sticky top-0 z-40 w-full max-w-7xl mx-auto my-4 sm:py-1 md:py-4 px-6 md:px-12 flex items-center justify-between bg-white text-black rounded-xl shadow-lg transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Left Navigation - Visible only on desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/buy"
            className="bg-[#B79237] text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all font-montserrat"
          >
            Beli
          </Link>
          <Link
            href="#why-bima"
            className="text-black hover:text-[#B79237] transition-all font-montserrat"
          >
            Why Bima?
          </Link>
          <Link
            href="/blog"
            className="text-black hover:text-[#B79237] transition-all font-montserrat"
          >
            Blog
          </Link>
        </div>

        {/* Logo - Left on mobile, centered on desktop */}
        {/* Ensure logo stays above overlay when menu is closed, but below when open */}
        <div
          className={`md:absolute md:left-1/2 md:transform md:-translate-x-1/2 ${
            mobileMenuOpen ? "z-0" : "z-20"
          }`}
        >
          <Link href="/">
            <div className="relative flex flex-col items-center">
              <Image
                src={bimacoLogo}
                alt="Bimaco Logo"
                objectFit="cover"
                width={100}
                height={40}
                className=""
              />
              {/* <span className="text-xs text-[#B79237] mt-1 font-montserrat">
                LIFE FUTURE
              </span> */}
            </div>
          </Link>
        </div>

        {/* Right Navigation - Visible only on desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/become-agent"
            className="text-black hover:text-[#B79237] transition-all font-montserrat"
          >
            Jadi Agen
          </Link>
          <Link
            href="/faqs"
            className="text-black hover:text-[#B79237] transition-all font-montserrat"
          >
            FAQ
          </Link>
          <Link href="/account">
            <UserCircle className="w-6 h-6 text-black hover:text-[#B79237] transition-all" />
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button - Visible only on mobile */}
        {/* Ensure button is above everything when menu is open */}
        <button
          className={`md:hidden text-black hover:text-[#B79237] transition-all ${
            mobileMenuOpen ? "z-50 fixed top-8 right-6" : "z-20"
          }`} // Adjust z-index and position when open
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu Overlay and Panel are moved outside the nav element below */}
      </nav>

      {/* Mobile Menu Overlay - Now outside nav */}
      {/* Use a higher z-index (e.g., z-40) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel - Now outside nav */}
      {/* Use the highest z-index (e.g., z-50) */}
      <div
        className={`fixed right-0 top-0 h-full w-full bg-white z-50 md:hidden shadow-xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col p-6 pt-24 overflow-y-auto`} // Added pt-24 for spacing below fixed button
      >
        {" "}
        <button
          className={`md:hidden text-black hover:text-[#B79237] transition-all ${
            mobileMenuOpen ? "z-50 fixed top-8 right-6" : "z-20"
          }`} // Adjust z-index and position when open
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
        {/* Content is pushed down by pt-24 */}
        <div className="flex flex-col space-y-6">
          {/* Beli Button */}
          <Link
            href="/buy"
            className="bg-[#B79237] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all text-center font-montserrat"
            onClick={() => setMobileMenuOpen(false)}
          >
            Beli
          </Link>

          {/* Links Section */}
          <div className="border-t border-gray-200 pt-6 flex flex-col space-y-4 items-center">
            <Link
              href="/why-bima"
              className="text-black hover:text-[#B79237] transition-all font-montserrat"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Bima?
            </Link>
            <Link
              href="/blog"
              className="text-black hover:text-[#B79237] transition-all font-montserrat"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/become-agent"
              className="text-black hover:text-[#B79237] transition-all font-montserrat"
              onClick={() => setMobileMenuOpen(false)}
            >
              Jadi Agen
            </Link>
            <Link
              href="/faqs"
              className="text-black hover:text-[#B79237] transition-all font-montserrat"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/account"
              className="text-black hover:text-[#B79237] transition-all font-montserrat flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <UserCircle className="w-5 h-5 mr-2" />
              Account
            </Link>
          </div>
        </div>
      </div>
    </> // Close the React Fragment
  );
}
