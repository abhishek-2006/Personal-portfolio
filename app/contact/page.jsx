export const metadata = {
    title: 'Contact | Abhishek Shah',
    description: "Get in touch with Abhishek Shah for projects or collaborations.",
    alternates: {
      canonical: "https://abhishekshah-portfolio.vercel.app/contact"
    },
    openGraph: {
        title: 'Contact | Abhishek Shah',
        description: "Get in touch with Abhishek Shah for projects or collaborations.",
        url: "https://abhishekshah-portfolio.vercel.app/contact",
        images: ["https://abhishekshah-portfolio.vercel.app/profile.jpg"],
        siteName: "Abhishek Shah Portfolio"
    },
};

import ContactPage from "./Contact";

export default function page() {
    return <ContactPage />
}