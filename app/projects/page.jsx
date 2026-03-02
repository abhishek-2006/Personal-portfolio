export const metadata = {
    title: 'Projects | Abhishek Shah',
    description: "Abhishek Shah’s portfolio projects featuring full-stack apps, modern web solutions, and real-world development work.",
    alternates: {
      canonical: "https://abhishekshah-portfolio.vercel.app/projects",
    },
    openGraph: {
        title: 'Projects | Abhishek Shah',
        description: "Abhishek Shah’s portfolio projects featuring full-stack apps, modern web solutions, and real-world development work.",
        url: "https://abhishekshah-portfolio.vercel.app/projects",
        siteName: "Abhishek Shah Portfolio",
    },
};

import ProjectsPage from "./ProjectsPage";

export default function page() {
    return <ProjectsPage />;
}