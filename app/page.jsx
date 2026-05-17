import Hero from "@/app/components/Hero";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import MiniAbout from "@/app/components/MiniAbout";
import ThreeBackgroundDynamic from "@/app/components/ThreeBackgroundDynamic";

export const metadata = {
  title: "Abhishek Shah - Full-Stack Developer Portfolio",
  description: "Abhishek Shah - Professional full-stack developer. Explore projects, skills, games, and contact details. Specializing in MERN Stack, Flutter, and modern web technologies.",
  keywords: [
    "Abhishek Shah",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Portfolio",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Mobile App Developer",
    "Abhishek Shah Portfolio",
    "Developer Bardoli",
    "Developer Gujarat",
    "Indian Developer",
    "Tech Freelancer"
  ],
  alternates: {
    canonical: "https://abhishekshah-portfolio.vercel.app/",
  },
  openGraph: {
    title: "Abhishek Shah - Full-Stack Developer Portfolio",
    description: "Professional full-stack developer portfolio showcasing projects, skills, games, and services.",
    url: "https://abhishekshah-portfolio.vercel.app/",
    siteName: "Abhishek Shah Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg",
        width: 1200,
        height: 630,
        alt: "Abhishek Shah - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Shah - Full-Stack Developer Portfolio",
    description: "Professional full-stack developer portfolio showcasing projects, skills, games, and services.",
    images: ["https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg"],
    creator: "@shahabhishek409",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Abhishek Shah", url: "https://abhishekshah-portfolio.vercel.app" }],
};

function HomeJsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Abhishek Shah - Portfolio",
      "url": "https://abhishekshah-portfolio.vercel.app",
      "logo": "https://abhishekshah-portfolio.vercel.app/favicon.ico",
      "description": "Abhishek Shah - Professional full-stack developer specializing in MERN Stack, Flutter, and modern web technologies.",
      "sameAs": [
        "https://github.com/abhishek-2006",
        "https://www.linkedin.com/in/abhishekshah-dev/",
        "https://x.com/shahabhishek409",
        "https://www.instagram.com/abhishekshah_112/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "areaServed": "Worldwide",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "shahabhishek051@gmail.com",
        "telephone": "+91 78610 53202"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Abhishek Shah",
      "jobTitle": "Professional Full-Stack Developer & Software Engineer",
      "description": "Full-stack developer specializing in MERN Stack, Flutter, and modern web technologies. Building scalable applications with focus on performance, security, and user experience.",
      "url": "https://abhishekshah-portfolio.vercel.app",
      "image": "https://abhishekshah-portfolio.vercel.app/abhishek-shah-full-stack-developer.jpg",
      "email": "shahabhishek051@gmail.com",
      "telephone": "+91 78610 53202",
      "sameAs": [
        "https://github.com/abhishek-2006",
        "https://www.linkedin.com/in/abhishekshah-dev/",
        "https://x.com/shahabhishek409",
        "https://www.instagram.com/abhishekshah_112/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "knowsAbout": [
        "MERN Stack",
        "Full-Stack Web Development",
        "Mobile App Development",
        "Flutter",
        "React",
        "Next.js",
        "Node.js",
        "Database Design",
      ],
      "inLanguage": ["en", "hi", "gu"],
      "potentialAction": {
        "@type": "CommunicateAction",
        "target": "https://abhishekshah-portfolio.vercel.app/contact"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://abhishekshah-portfolio.vercel.app"
        }
      ]
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <main className="relative flex min-h-screen flex-col overflow-hidden">
        <ThreeBackgroundDynamic />
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
    </>
  );
}