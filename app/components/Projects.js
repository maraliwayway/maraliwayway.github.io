import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "LockedIn",
    domain: "Web Development",
    image: "/lockedin.png",
    github: "https://github.com/suhaylp/lockedin",
    description: "A motivation app tailored for computer science students, combining a LeetCode tracker, job application organizer, and witty quotes to keep you inspired and on track."
  },
  {
    title: "Emergency Report System",
    domain: "Web Development",
    image: "/emergency.png",
    github: "https://github.com/biancadimaano/ecomm-website",
    description: "A new web-based system for Metro Vancouver that allows you to report and view emergency reports."
  },
  {
    title: "Try/Catch 2024 Website",
    domain: "Web Development",
    image: "/tc2024.png",
    github: "https://github.com/try-catch2024/try-catch2024",
    description: "Redesigned SFU Women in Computing Science's Try/Catch 2024 website, an annual outreach event for female and non-binary high school students."
  }

];

const Projects = () => {
  return (
    <section id="projects" className="py-20text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl ftext-center mb-16 text-center">Projects</h1>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-black-900 border border-gray-500 rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] hover:shadow-2xl"
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                width={1200} 
                height={600} 
                className="w-full h-90"
              />
              <div className="p-6">
                <h2 className="text-3xl ">{project.title}</h2>
                <p className="text-sm text-gray-400 mt-1">{project.domain}</p>
                <p className="mt-4 ">{project.description}</p>
                <Link 
                  href={project.github} 
                  target="_blank"
                  className="inline-block mt-6 text-blue-500 hover:underline transition "
                >
                  View on GitHub →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;