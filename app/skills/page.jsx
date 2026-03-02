export const metadata = {
  title: "Skills | Abhishek Shah",
  description: "Explore Abhishek Shah\'s technical skills including Flutter, React, Node.js, and Modern Web technologies.",
  alternates: {
    canonical: "https://abhishekshah-portfolio.vercel.app/skills",
  },
  openGraph: {
    title: "Skills | Abhishek Shah",
    description: "Explore Abhishek Shah\'s technical skills including Flutter, React, Node.js, and Modern Web technologies.",
    url: "https://abhishekshah-portfolio.vercel.app/skills",
    siteName: "Abhishek Shah Portfolio",
  },
};

import SkillsClient from "./skillsClient";

export default function page() {
    return <SkillsClient />;
}