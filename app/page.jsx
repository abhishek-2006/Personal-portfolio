import Hero from "@/app/components/Hero";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import MiniAbout from "@/app/components/MiniAbout";

export const metadata = {
  title: "Home - Abhishek Shah",
  description: "Abhishek Shah - Full-stack developer. Explore projects, skills, and contact details to collaborate on web and app development.",
  alternates: {
    canonical: "https://abhishekshah-portfolio.vercel.app/"
  }
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <h1 className="sr-only">Abhishek Shah | Professional Full-Stack Developer Portfolio and Software Engineer</h1>
      <Hero />
      <MiniAbout />
      <FeaturedProjects />  
      <section className="sr-only bg-[#1a1a1a] border-t border-white/5 py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-sm uppercase tracking-widest text-white/30 mb-8">Technical Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-white/50 leading-relaxed">
            <p>
              As a Professional Full-Stack Developer, I focus on engineering robust digital solutions that integrate seamless user interfaces with high-performance backend architectures. My approach as a Software Engineer involves utilizing modern frameworks like Next.js and React to build scalable applications that prioritize speed and security.
            </p>
            <p>
              I specialize in the full software development lifecycle, from system design to continuous optimization. By staying at the forefront of web technologies, I ensure every line of code contributes to a meaningful user experience while meeting the standards of modern search and generative engines.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
