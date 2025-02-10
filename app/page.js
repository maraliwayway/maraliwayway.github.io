"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";


export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <nav
        className={`w-full p-4 fixed top-0 left-0 z-50 shadow-md transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-black-800 bg-opacity-70 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center font-extralight">
          <div className="flex items-center gap-4 text-white">
            {/* Logo or Name */}
            <a href="#home" className="hover:underline">Mara Liwayway</a>
          </div>
          <div className="flex items-center gap-8 text-white">
            {/* Navbar Links */}
            <a href="#home" className="hover:underline">About</a>
            <a href="#about" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
          </div>
        </div>
      </nav>
      <main className="flex flex-col gap-8 items-center text-center font-extralight text-lg">
        
        <h1 className="text-center text-6xl"> Mara Liwayway David </h1>
        <p> Hi! I'm Mara, a second-year CS student at Simon Fraser University. </p>

        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/maraliwayway"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          GitHub
        </a>


        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/maraliwayway/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="Linkedin icon"
            width={16}
            height={16}
          />
          Linkedin
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:mld18@sfu.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/email.svg"
            alt="Email icon"
            width={16}
            height={16}
          />
          Email
        </a>
      </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#999] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/resume.pdf"
            download="Mara_Liwayway_David_Resume.pdf"  // Specify the filename for the downloaded file
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
            aria-hidden
            src="/download.png"
            alt="Download icon"
            width={16}
            height={16}
            
          />
            Download Resume
          </a>

          
        </div>

        <p> Hi! I'm Mara, a second-year CS student at Simon Fraser University. </p>
        <p> Hi! I'm Mara, a second-year CS student at Simon Fraser University. </p>
        <p> Hi! I'm Mara, a second-year CS student at Simon Fraser University. </p>
        <p> Hi! I'm Mara, a second-year CS student at Simon Fraser University. </p>
        <p> Hi! I'm Mara, a second-year CS student at Simon Fraser University. </p>
        <p> Hi! I'm Mara, a second-year CS student at Simon Fraser University. </p>
        <p> Hi! I'm Mara, a second-year CS student at Simon Fraser University. </p>
        <p> Hi! I'm Mara, a second-year CS student at Simon Fraser University. </p>

      </main>
  
    </div>
  );
}
