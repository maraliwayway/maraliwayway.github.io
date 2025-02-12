"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { motion } from 'framer-motion';


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
      
      

      <motion.nav
        className={`w-full p-4 fixed top-0 left-0 z-50 shadow-md transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-black-800 bg-opacity-70 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center font-extralight text-lg">
          <div className="flex items-center gap-4 text-white">
            <a href="/" className="hover:underline">Mara Liwayway</a>
          </div>
          <div className="flex items-center gap-8 text-white">
            <a href="#about" className="hover:underline">About Me</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
          </div>
        </div>
      </motion.nav>

      <main className="flex flex-col gap-10 pt-40 font-extralight text-lg">
        
        <motion.h1
          className="text-center text-7xl mt-20"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Mara Liwayway David
        </motion.h1>

        <motion.p
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Aspiring software developer passionate about teaching, outreach, and coding.
        </motion.p>

        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <motion.a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/maraliwayway"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Image
              aria-hidden
              src="/github.svg"
              alt="GitHub icon"
              width={16}
              height={16}
            />
            GitHub
          </motion.a>

          <motion.a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/maraliwayway/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Image
              aria-hidden
              src="/linkedin.svg"
              alt="Linkedin icon"
              width={16}
              height={16}
            />
            Linkedin
          </motion.a>

          <motion.a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:mld18@sfu.ca"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Image
              aria-hidden
              src="/email.svg"
              alt="Email icon"
              width={16}
              height={16}
            />
            Email
          </motion.a>
        </div>

        <motion.div
          className="flex justify-center items-center gap-4 text-center flex-col sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <a
            className="mb-40 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#999] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
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
        </motion.div>

        
        <About />
        <Projects />
        <Experience />

      </main>
    </div>
  );
}
