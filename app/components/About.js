import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="h-screen flex items-center justify-center px-4 mt-10 font-extralight">
      <div className="flex flex-col items-center gap-16 lg:gap-20">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-4xl md:text-5xl text-extralight mt-20 text-center"
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
          <div className="flex justify-center ">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                aria-hidden
                src="/about.jpg"
                alt="Mara Liwayway David headshot"
                width={600}
                height={600}
                quality={100}
                className="rounded-lg"
              />
            </motion.div>

          </div>

          <div className="flex flex-col gap-4 text-left">
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-base sm:text-lg"
            >
              I'm Mara, a second-year student at Simon Fraser University, pursuing a Bachelor of Science in Computing Science. My passion for the technology sector sparked when I participated in Hackergal's 4th annual hackathon in grade 8, where I found joy in problem-solving and thinking creatively. Fast-forwarding, I love to share the amazing wonders of code, especially through teaching.
            </motion.p>

            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-base sm:text-lg"
            >
              For over 3 years, I've been teaching as a coding instructor, working with organizations like{" "}
              <a
                className="text-blue-500 hover:underline hover:underline-offset-4"
                href="https://www.codeninjas.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Ninjas
              </a>,{" "}
              <a
                className="text-blue-500 hover:underline hover:underline-offset-4"
                href="https://sciencealive.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SFU Science Alive
              </a>
              , and hosting workshops at events like{" "}
              <a
                className="text-blue-500 hover:underline hover:underline-offset-4"
                href="https://trycatch.cs.sfu.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try/Catch 2024
              </a>
              , an outreach event designed for female and non-binary high school students (Fun fact: I helped develop the website).
            </motion.p>

            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-base sm:text-lg"
            >
              My interests include UI/UX design, web development, and tech for good. I aspire to continue blending teaching, outreach, and coding into a software or full-stack developer career, empowering others while building innovative solutions.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


