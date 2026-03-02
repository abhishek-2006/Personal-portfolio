import ContactPage from "./Contact";

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
        images: [{ url: "/profile.jpg", width: 1200, height: 630, alt: "Abhishek Shah" }],
        type: "website",
        siteName: "Abhishek Shah Portfolio"
    },
    keywords: [
        "Contact Abhishek Shah",
        "Get in touch with Abhishek Shah",
        "Abhishek Shah contact details",
        "Full stack developer contact",
        "Contact Abhishek Shah for projects",
        "Contact Abhishek Shah for collaborations",
        "Abhishek Shah phone number",
        "Abhishek Shah email address",
        "Abhishek Shah social media links",
        "Contact information for Abhishek Shah",
        "Abhishek Shah contact info",
        "Abhishek Shah contact page",
        "Contact Abhishek Shah for freelance work",
        "Full stack developer contact information",
        "Full stack developer India",
        "Abhishek Shah contact information",
        "Abhishek Shah email",
        "Abhishek Shah social media",
        "Contact Abhishek Shah for web development",
        "Contact Abhishek Shah for software development",
        "Contact Abhishek Shah for mobile app development",
    ]
};

function ContactJsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Abhishek Shah",
      "description": "The official contact point for Abhishek Shah's professional services.",
      "url": "https://abhishekshah-portfolio.vercel.app/contact",
      "mainEntity": {
        "@type": "Person",
        "name": "Abhishek Shah",
        "jobTitle": "Full-Stack Developer",
        "email": "shahabhishek051@gmail.com",
        "telephone": "+91 78610 53202",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bardoli",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        }
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
          "name": "Contact",
          "item": "https://abhishekshah-portfolio.vercel.app/contact"
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

export default function page() {
    return (
        <>
            <ContactJsonLd />
            <ContactPage />
        </>
    );
}