import React, { useState } from "react";
import { FaUtensils, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import logo from "../assets/Logo.png";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="bg-gray-950 text-white mt-12">
      <div className="max-w-[1640px] mx-auto px-6 sm:px-10 py-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <img src={logo} alt="cravely" className="h-10 w-13 bg-black" />
              <h1 className="text-2xl md:text-3xl lg:text-4xl px-2">Cravely</h1>
            </h1>

            <p className="text-gray-400 mt-4 leading-7">
              Delicious food, fresh ingredients, and flavors you'll love. Find
              your favorites and enjoy every bite with Best Eats.
            </p>

            <div className="flex gap-4 mt-5 text-xl">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/Jenish-Mhrzn"
                aria-label="GitHub"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/" className="hover:text-orange-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/#food" className="hover:text-orange-500 transition">
                  Our Menu
                </a>
              </li>
              <li>
                <a
                  onClick={() => setIsOpen(true)}
                  className="hover:text-orange-500 transition cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="hover:text-orange-500 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Opening Hours</h2>
            <ul className="space-y-3 text-gray-400">
              <li>Monday – Friday</li>
              <li className="text-white">10:00 AM – 9:00 PM</li>
              <li>Saturday – Sunday</li>
              <li className="text-white">11:00 AM – 10:00 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>

            <div className="flex items-start gap-3 text-gray-400 mb-4">
              <MdLocationOn className="text-orange-500 text-xl mt-1" />
              <p>Kathmandu, Nepal</p>
            </div>

            <div className="flex items-start gap-3 text-gray-400">
              <MdEmail className="text-orange-500 text-xl mt-1" />
              <a
                href="mailto:contact@besteats.com"
                className="hover:text-orange-500 transition"
              >
                cravely@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Cravely. All rights reserved.</p>

          <p>
            Made with <span className="text-red-500">♥</span> for food lovers.
          </p>
        </div>
      </div>
      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* About Us Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Box */}
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#e9e1f7] p-6 sm:p-9 text-gray-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-title"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-4 text-3xl leading-none text-gray-500 hover:text-black transition-colors"
              aria-label="Close About Us"
            >
              &times;
            </button>

            {/* Modal Heading */}
            <h2 id="about-title" className="text-2xl font-bold mb-5 pr-8">
              About Cravely 🍽️
            </h2>

            <hr className="border-gray-300 mb-5" />

            {/* About Description */}
            <p className="text-base leading-7 mb-5">
              At Cravely, we believe great food brings people together. Our
              passion is serving delicious meals made with quality ingredients
              and a whole lot of love.
            </p>

            <p className="text-base leading-7 mb-5">
              Whether you're craving a quick bite, a satisfying meal, or
              something special to brighten your day, we've got something for
              everyone. We believe ordering food should be simple, convenient,
              and enjoyable from start to finish.
            </p>

            <p className="text-base leading-7 mb-5">
              Our goal is to bring your favorite flavors closer to you, one
              delicious meal at a time.
            </p>

            <hr className="border-gray-300 my-5" />

            {/* Footer */}
            <div className="text-center py-2">
              <p className="text-lg font-bold">
                Good Food. Great Taste. Happy Moments. ❤️
              </p>

              <p className="text-sm text-gray-600 mt-3">
                Thank you for choosing Cravely!
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
