import Hero from "@/app/components/Hero";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import MiniAbout from "@/app/components/MiniAbout";
import ThreeBackground from "@/app/components/ThreeBackground";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <ThreeBackground />
      {/* H1 for Search Engine indexing */}
      <h1 className="sr-only">Abhishek Shah | Professional Full-Stack Developer and Software Engineer</h1>
      
      <div className="relative z-10 w-full">
        <Hero />
        <MiniAbout />
        <FeaturedProjects /> 
      </div>

      {/* Hidden section for SEO purposes */}
      <section className="sr-only">
        <div className="max-w-4xl text-[10px] md:text-xs text-slate-500 leading-relaxed uppercase tracking-widest">
          <h2 className="text-white/20 mb-4 font-bold">Engineering Methodology & Technical Philosophy</h2>
          <p className="mb-4">
            As a <span className="text-white/40 font-bold">Professional Full-Stack Developer</span>, I focus on engineering robust digital solutions that 
            integrate seamless user interfaces with high-performance backend architectures. My approach as a 
            <span className="text-white/40 font-bold">Software Engineer</span> involves utilizing modern frameworks like Next.js and React to build 
            scalable applications that prioritize speed, security, and cross-platform compatibility for a global audience. 
          </p>
          <p className="mb-4">
            I specialize in the full software development lifecycle, ranging from initial system design and database schema modeling to 
            cloud deployment and continuous performance optimization. By staying at the forefront of web technologies, I ensure 
            that every line of code contributes to a meaningful user experience while maintaining the high technical standards 
            required by modern generative engines and search algorithms. 
          </p>
          <p>
            Whether developing complex logic for interactive applications or optimizing web infrastructure for maximum efficiency, 
            my goal is to deliver clean, maintainable codebases. I am deeply committed to technical excellence and 
            professional growth within the evolving landscape of web and mobile development, constantly exploring new 
            methodologies to solve intricate engineering challenges through efficient software design.
          </p>
        </div>
      </section>
    </main>
  );
}