export const metadata = {
    title: 'Projects & Portfolio | Abhishek Shah',
    description: "Explore Abhishek Shah’s portfolio of real-world projects, featuring full-stack applications, modern web solutions, mobile apps, and scalable systems.",
    alternates: {
      canonical: "https://abhishekshah-portfolio.vercel.app/projects",
    },
    keywords: [
        "Abhishek Shah projects",
        "Abhishek Shah portfolio",
        "Full stack developer projects",
        "Web development projects",
        "Software development projects",
        "Mobile app development projects",
        "React projects",
        "Node.js projects",
        "Next.js projects",
        "JavaScript projects",
        "TypeScript projects",
        "Abhishek Shah web solutions",
        "Abhishek Shah real-world projects",
        "Abhishek Shah coding projects",
        "Full stack projects",
        "Modern web projects",
        "Abhishek Shah development work",
        "Abhishek Shah project showcase",
        "Frontend projects",
        "Backend projects"
    ],
    openGraph: {
        title: 'Projects & Portfolio | Abhishek Shah',
        description: "Explore Abhishek Shah’s portfolio of real-world projects, featuring full-stack applications, modern web solutions, mobile apps, and scalable systems.",
        url: "https://abhishekshah-portfolio.vercel.app/projects",
        siteName: "Abhishek Shah Portfolio",
        images: [{ url: "/profile.jpg", width: 1200, height: 630, alt: "Abhishek Shah Projects Portfolio" }],
        type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Projects & Portfolio | Abhishek Shah",
      description: "Explore Abhishek Shah’s portfolio of real-world projects, featuring full-stack applications, modern web solutions, mobile apps, and scalable systems.",
      images: ["/profile.jpg"],
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

function ProjectsJsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Projects & Portfolio | Abhishek Shah",
      "description": "A collection of software development projects by Abhishek Shah.",
      "url": "https://abhishekshah-portfolio.vercel.app/projects",
      "author": {
        "@type": "Person",
        "name": "Abhishek Shah",
        "url": "https://abhishekshah-portfolio.vercel.app"
      },
      "copyrightYear": new Date().getFullYear(),
      "copyrightNotice": "Copyright © Abhishek Shah. All rights reserved."
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
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": "https://abhishekshah-portfolio.vercel.app/projects"
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

import ProjectsPage from "./ProjectsPage";
import { GET } from "../api/projects/route";

async function getProjects() {
  try {
    const res = await GET();
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch projects server-side:", error);
  }
  return null;
}

export default async function page() {
    const initialProjects = await getProjects();
    
    return (
      <>
        <ProjectsJsonLd />
        <ProjectsPage initialProjects={initialProjects} />
      </>
    );
}