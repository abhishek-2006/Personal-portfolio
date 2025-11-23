import Hero from "@/app/components/Hero";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import MiniAbout from "@/app/components/MiniAbout";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <MiniAbout />
      <FeaturedProjects />
    </main>
  );
}
