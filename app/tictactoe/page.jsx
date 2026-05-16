import TicTacToePage from "./TicTacToePage";

export const metadata = {
    title: 'Tic Tac Toe Game | Abhishek Shah',
    description: "TicTacToe by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
    alternates: {
      canonical: "https://abhishekshah-portfolio.vercel.app/tictactoe"
    },
    openGraph: {
        title: 'Tic Tac Toe Game | Abhishek Shah',
        description: "TicTacToe by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
        url: "https://abhishekshah-portfolio.vercel.app/tictactoe",
        images: ["https://abhishekshah-portfolio.vercel.app/tictactoe-logo.png"],
        siteName: "Abhishek Shah Portfolio"
    },
    keywords: [
        "Tic Tac Toe Game",
        "Tic Tac Toe by Abhishek Shah",
        "Tic Tac Toe offline",
        "Offline Tic Tac Toe",
        "Tic Tac Toe AI opponent",
        "Tic Tac Toe multiplayer",
        "Tic Tac Toe strategy",
        "Tic Tac Toe classic game",
        "Tic Tac Toe for Android",
        "Tic Tac Toe for Windows",
        "Tic Tac Toe free game",
        "Tic Tac Toe download",
        "Tic Tac Toe app",
        "xoxo game",
        "xoxo game online",
        "Tic Tac Toe fun game",
        "Tic Tac Toe competitive game",
        "xxo game online",
    ],
};

export default function page() {
    const schema = {
        "@context": "https://schema.org",
        "@type" : "SoftwareApplication",
        title: 'Tic Tac Toe Game',
        description: "TicTacToe by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
        name : "TicTacToe Game",
        operatingSystem : "Android",
        operatingSystem : "Windows",
        applicationCategory : "Game",
        image : "https://abhishekshah-portfolio.vercel.app/tictactoe-logo.png",
        alternates : "https://abhishekshah-portfolio.vercel.app/tictactoe"
    };

    return (
        <>
            <script type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <TicTacToePage />
        </>
    );
}