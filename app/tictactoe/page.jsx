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
};

export default function page() {
    const schema = {
        "@context": "https://schema.org",
        "@type" : "SoftwareApplication",
        title: 'Tic Tac Toe Game',
        description: "TicTacToe by Abhishek Shah is a clean, fast, and strategic game. Play against AI or friends and enjoy a smooth classic gameplay experience.",
        name : "TicTacToe Game",
        operatingSystem : "Android",
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