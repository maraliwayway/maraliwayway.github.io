import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
            download="Mara_Liwayway_David_Resume.pdf"  
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
      </main>
  
    </div>
  );
}
