'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ModeToggle } from '../ui/ThemeToggle';

const HomeHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full py-4 bg-[var(--color-white)] dark:bg-gray-900 shadow-md">
      <div className="w-full mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-xl font-bold text-[var(--color-black)] dark:text-[var(--color-white)]">
          <a href="/">After School Study Club</a>
        </div>

        {/* Desktop Nav + Theme */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex space-x-6 items-center">
            <a href="/" className="text-lg text-[var(--color-black)] dark:text-[var(--color-white)] hover:text-[var(--color-teal)]">Home</a>
            <a href="#about" className="text-lg text-[var(--color-black)] dark:text-[var(--color-white)] hover:text-[var(--color-teal)]">About</a>
            <a href="#features" className="text-lg text-[var(--color-black)] dark:text-[var(--color-white)] hover:text-[var(--color-teal)]">Features</a>
            <a href="#signup" className="text-lg text-[var(--color-black)] dark:text-[var(--color-white)] hover:text-[var(--color-teal)]">Sign Up</a>
            <Button className="bg-[var(--color-black)] hover:bg-[var(--color-black)] dark:bg-[var(--color-teal)] dark:hover:bg-[var(--color-orange)] dark:text-[var(--color-black)] text-[var(--color-white)]">
              Join the Club
            </Button>
          </nav>
          <ModeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-[var(--color-black)] dark:text-[var(--color-white)]"
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--color-white)] dark:bg-[var(--color-orange)] text-[var(--color-black)] dark:text-[var(--color-white)] py-4 px-6 space-y-4">
          <a href="/" className="block text-lg hover:text-[var(--color-teal)]">Home</a>
          <a href="#about" className="block text-lg hover:text-[var(--color-teal)]">About</a>
          <a href="#features" className="block text-lg hover:text-[var(--color-teal)]">Features</a>
          <a href="#signup" className="block text-lg hover:text-[var(--color-teal)]">Sign Up</a>
          <Button className="bg-[var(--color-teal)] hover:bg-[var(--color-orange)] text-[var(--color-white)] w-full">
            Join the Club
          </Button>
        </div>
      )}
    </header>
  );
};

export default HomeHeader;
