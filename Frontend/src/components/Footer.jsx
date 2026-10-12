import React from "react";
import { FaUtensils, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white mt-12">
      <div className="max-w-[1640px] mx-auto px-6 sm:px-10 py-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <FaUtensils className="text-orange-500" />
              Best <span className="text-orange-500">Eats</span>
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
                <a href="/#about" className="hover:text-orange-500 transition">
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
                besteats@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Best Eats. All rights reserved.</p>

          <p>
            Made with <span className="text-red-500">♥</span> for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
