import React from "react";
import beeigeLogo from "../assets/images/beeigeLogo.png";
import { User, Search, ShoppingCart, Heart, ChevronDown } from "lucide-react";

const HeaderSection = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="mr-8">
          <img
            src={beeigeLogo}
            alt="Beeige Logo"
            className="h-8 md:h-12 lg:h-16 w-auto object-contain mr-8 max-w-none"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex md:space-x-8">
          <a
            href="#home"
            className="text-lg text-gray-600 font-libre"
          >
            Home
          </a>
          <a
            href="#shop"
             className="text-lg text-gray-600 font-libre flex items-center gap-1"
          >
            Shop
            <ChevronDown/>
          </a>
          <a
            href="#about"
            className="text-lg text-gray-600 font-libre"
          >
            About
          </a>
          <a
            href="#blog"
            className="text-lg text-gray-600 font-libre"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-lg text-gray-600 font-libre"
          >
            Contact
          </a>
          <a
            href="#pages"
            className="text-lg text-gray-600 font-libre"
          >
            Pages
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 ml-auto">
          <button>
            <span className="flex items-center space-x-1">
              <User color="#29a8f0"/>
              <span className="hidden md:inline text-sky-400">Login / Register</span>
            </span>
          </button>
          <button>
            <Search color="#29a8f0"/>
          </button>
          <button>
            <ShoppingCart color="#29a8f0"/>
          </button>
          <button>
            <Heart color="#29a8f0"/>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <nav className="flex flex-col items-center md:hidden space-y-2 mt-4">
        <a href="#home" className="text-lg text-gray-600 font-libre">
          Home
        </a>
        <a href="#shop" className="text-lg text-gray-600 font-libre flex items-center gap-1">
          Shop
          <ChevronDown/>
        </a>
        <a href="#about" className="text-lg text-gray-600 font-libre">
          About
        </a>
        <a href="#blog" className="text-lg text-gray-600 font-libre">
          Blog
        </a>
        <a href="#contact" className="text-lg text-gray-600 font-libre">
          Contact
        </a>
        <a href="#pages" className="text-lg text-gray-600 font-libre">
          Pages
        </a>
      </nav>
    </header>
  );
};

export default HeaderSection;
