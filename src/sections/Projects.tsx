import smokeTalkLandingPage from "@/assets/images/smoke-talk.png";
import wordleLandingPage from "@/assets/images/wordle-game-2.png";
import sharonaAppImage from '@/assets/images/sharona-app.png';
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Wordle",
    year: "2024",
    title: "Wordle Game",
    results: [
      { title: "The classic and known game Wordle" },
      { title: "Implemented in English and Hebrew" },
    ],
    link: "https://wordle-game-english-hebrew.vercel.app/",
    image: wordleLandingPage,
    isMobile: false
  },
  {
    company: "Sharona Nails",
    year: "2023",
    title: "CRM Management System",
    results: [
      { title: "AI Chatbot for making appointments" },
      { title: "All the information is in the app" },
      { title: "Statistics about client" },
    ],
    link: "",
    image: sharonaAppImage,
    isMobile: true
  },
  {
    company: "Smoke Talk",
    year: "2022",
    title: "Ecommerce Digital Store",
    results: [
      { title: "Another channel for selling products" },
      { title: "Increased sales by 25%" },
      { title: "Increased customers cycle by 18%" }
    ],
    link: "https://www.smoketalk.co.il",
    image: smokeTalkLandingPage,
    isMobile: false
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects-section" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader 
          title="Featured Projects" 
          eyebrow="Real-World Results"
          description="See how I transformed concepts into engaging digital experiences." 
        /> 
        <div className="flex flex-col mt-10 gap-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <ProjectCard key={project.title} project={project} style={{
              top: `calc(64px + ${projectIndex * 40}px)`
            }}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;