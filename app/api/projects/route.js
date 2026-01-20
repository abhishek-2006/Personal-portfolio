export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/abhishek-2006/repos", {
      headers: {
        "User-Agent": "portfolio",
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 }, // cache for 1 hour
    });

    if (!res.ok) throw new Error("GitHub API request failed");
    
    const repos = await res.json();

    const projects = await Promise.all(
      repos.map(async (repo) => {
        // Fetch languages for each repository to populate the tech stack
        const langRes = await fetch(repo.languages_url, {
          headers: { "User-Agent": "portfolio-app" },
        });

        const languages = langRes.ok ? await langRes.json() : {};
        const langs = Object.keys(languages);

        // --- ENHANCEMENT LOGIC: Intercept TicTacToe specifically ---
        const isTicTacToe = repo.name.toLowerCase().includes("Tictactoe");

        if (isTicTacToe) {
          return {
            name: "TicTacToe",
            description: "A premium Android edition of the classic game. Built with Flutter, featuring adaptive AI levels, neo-dark aesthetic, and smooth 60FPS animations.",
            url: repo.html_url,
            liveUrl: "/tictactoe",
            tech: ["Flutter", "Dart", "Android"],
            isGame: true,
            logo: "/tictactoe-logo.png",
            category: "Mobile"
          };
        }

        let category = "Web";
        if (langs.includes("Dart") || langs.includes("Kotlin")) category = "Mobile";
        else if (langs.includes("PHP") || langs.includes("Java")) category = "Full Stack";

        return {
          name: repo.name.replace(/-/g, " "),
          description: repo.description || "Experimental project focusing on modern architecture.",
          url: repo.html_url,
          liveUrl: repo.homepage || null,
          tech: langs.length ? langs : ["General"],
          isGame: false,
          logo: "/favicon.ico",
          category: category
        };
      })
    );

    // Sort projects so the Game appears first
    const sortedProjects = projects.sort((a, b) => {
      if (a.isGame) return -1;
      if (b.isGame) return 1;
      return 0;
    });

    return Response.json(sortedProjects);
  } catch (err) {
    console.error("Projects API Error:", err);
    return Response.json({ error: "Failed to load repos" }, { status: 500 });
  }
}