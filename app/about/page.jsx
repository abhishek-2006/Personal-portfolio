export const metadata = {
    title: 'About | Abhishek Shah',
    description: "About Abhishek Shah – Software developer skilled in full-stack web development and mobile apps. Explore his journey, technical skills, and projects.",
    alternates: {
      canonical: "https://abhishekshah-portfolio.vercel.app/about",
    },
    keywords: [
        "Abhishek Shah about",
        "Abhishek Shah biography",
        "Abhishek Shah background",
        "Abhishek Shah journey",
        "Abhishek Shah skills", 
        "Abhishek Shah experience",
        "Abhishek Shah education",
        "Abhishek Shah software developer",
        "Abhishek Shah full stack developer",
        "Abhishek Shah web developer",
        "Abhishek Shah mobile app developer",
        "Abhishek Shah portfolio",
        "Abhishek Shah career",
        "Abhishek Shah professional background",
    ],    
    openGraph: {
        title: 'About | Abhishek Shah',
        description: "About Abhishek Shah – Software developer skilled in full-stack web development and mobile apps. Explore his journey, technical skills, and projects.",
        url: "https://abhishekshah-portfolio.vercel.app/about",
        siteName: "Abhishek Shah Portfolio",
        images: [
          {
            url: "https://abhishekshah-portfolio.vercel.app/profile.jpg",
            width: 1200,
            height: 630,
            alt: "Abhishek Shah - About Me",
          },
        ],
        locale: "en_US",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "About | Abhishek Shah",
        description: "Explore the professional journey, skills, and education of Abhishek Shah.",
        images: ["https://abhishekshah-portfolio.vercel.app/profile.jpg"],
        creator: "@shahabhishek409",
    },
};

function JsonLd() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Abhishek Shah",
      "jobTitle": "Professional Full-Stack Developer",
      "url": "https://abhishekshah-portfolio.vercel.app",
      "image": "https://abhishekshah-portfolio.vercel.app/profile.jpg",
      "sameAs": [
        "https://github.com/abhishek-2006",
        "https://www.linkedin.com/in/abhishekshah-dev/",
        "https://x.com/shahabhishek409"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Uka Tarsadia University"
      },
      "knowsAbout": ["Full-Stack Web Development", "Mobile App Development", "Flutter", "React", "Next.js"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
    />
  );
}

import AboutPage from "./About";

export default function Page() {
    return (
      <>
        <JsonLd />
        <AboutPage />
      </>
    );
}   