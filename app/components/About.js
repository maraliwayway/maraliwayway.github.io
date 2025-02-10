import Image from "next/image";

const About = () => {
    return (
      <section id="about" className="h-screen flex items-center justify-center">

        <div className="flex flex-col items-center gap-20">
        <h1 className="text-5xl text-extralight">About Me</h1>

        <div className="grid grid-cols-2 gap-0">


            <Image
            aria-hidden
            src="/mara.jpg"
            alt="Mara Liwayway David headshot"
            width={500}
            height={500}
          />


            <div className="flex flex-col gap-4 text-left">
            <p>

                For over 3 years, I've been teaching as a coding instructor, working
                with organizations like <a
                                        className="text-gray-400 hover:underline hover:underline-offset-4"
                                        href="https://github.com/maraliwayway"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        > Code Ninjas</a>,                       <a
                                        className="text-gray-400 hover:underline hover:underline-offset-4"
                                        href="https://github.com/maraliwayway"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        > SFU Science Alive</a>
                , and hosting workshops at events like 
                                        <a
                                        className="text-gray-400 hover:underline hover:underline-offset-4"
                                        href="https://github.com/maraliwayway"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        > Try/Catch 2024</a>, 
                an outreach event designed for female and non-binary high school students (Fun fact: I helped develop the website).</p>

            <p>
                My interests include UI/UX design, web development, and tech for good. I aspire to continue blending teaching, outreach, and coding
                into a software of full-stack developer career, empowering others while building innovative solutions.

                
            </p>
            </div>
    

        </div>
        </div>
      </section>
    );
  };

  export default About;
  