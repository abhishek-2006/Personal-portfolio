import ChessPage from "./chessPage";

export const metadata = {
    title: 'Chess Game | Abhishek Shah',
    description: "Chess by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
    alternates: {
      canonical: "https://abhishekshah-portfolio.vercel.app/chess"
    },
    openGraph: {
        title: 'Chess Game | Abhishek Shah',
        description: "Chess by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
        url: "https://abhishekshah-portfolio.vercel.app/chess",
        images: ["https://abhishekshah-portfolio.vercel.app/chess-logo.png"],
        siteName: "Abhishek Shah Portfolio"
    },
    keywords: [
        "Chess Game",
        "Chess by Abhishek Shah",
        "Shatranj Game",
        "Play Chess offline",
        "Offline Chess Game",
        "Offline chess download",
        "Chess offline",
        "Offline Chess",
        "Chess AI opponent",
        "Chess multiplayer",
        "Chess strategy",
        "Chess classic game",
        "Chess for Android",
        "Chess for Windows",
        "Chess free game",
        "Chess download",
        "Chess app",
        "Chess fun game",
        "Chess competitive game",
        "download chess offline",
        "play chess offline",
        "best chess game",
        "shatranj game",
        "chess game by abhishek shah",
        "chess game for android",
    ],
};

export default function page() {
    const schema = {
        "@context": "https://schema.org",
        "@type" : "SoftwareApplication",
        title: 'Chess Game',
        description: "Chess by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
        name : "Chess Game",
        operatingSystem : "Android",
        operatingSystem : "Windows",
        applicationCategory : "Game",
        image : "https://abhishekshah-portfolio.vercel.app/chess-logo.png",
        alternates : "https://abhishekshah-portfolio.vercel.app/chess"
    };

    return (
        <>
            <script type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <ChessPage />
        </>
    );
}