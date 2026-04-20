export const metadata = {
  title: "Skills | Abhishek Shah",
  description: "Explore Abhishek Shah\'s technical skills including Frontend, Backend, Mobile Development, and Database technologies like React, Next.js, Node.js, and Flutter.",
  keywords: [
    "Abhishek Shah Skills",
    "Frontend Development Skills",
    "Backend Development Skills",
    "Mobile App Development",
    "Full Stack Technologies",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Flutter Developer",
    "Database Management"
  ],
  alternates: {
    canonical: "https://abhishekshah-portfolio.vercel.app/skills",
  },
  openGraph: {
    title: "Skills | Abhishek Shah",
    description: "Explore Abhishek Shah\'s technical skills including Frontend, Backend, Mobile Development, and Database technologies.",
    url: "https://abhishekshah-portfolio.vercel.app/skills",
    siteName: "Abhishek Shah Portfolio",
    images: [{ url: "/profile.jpg", width: 1200, height: 630, alt: "Abhishek Shah Skills" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills | Abhishek Shah",
    description: "Explore Abhishek Shah\'s technical skills including Frontend, Backend, Mobile Development, and Database technologies.",
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

function SkillsJsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Abhishek Shah",
        "jobTitle": "Full-Stack Developer",
        "url": "https://abhishekshah-portfolio.vercel.app",
        "knowsAbout": [
          "Frontend Development",
          "Backend Development",
          "Mobile App Development",
          "React",
          "Next.js",
          "Node.js",
          "Flutter",
          "MongoDB",
          "MySQL",
          "Tailwind CSS"
        ]
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
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Skills",
          "item": "https://abhishekshah-portfolio.vercel.app/skills"
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

import SkillsClient from "./skillsClient";

export default function page() {
    return (
      <>
        <SkillsJsonLd />
        <SkillsClient />
      </>
    );
}