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
        const isTicTacToe = repo.name.toLowerCase().includes("tictactoe");
        let category = "Web";
        if (langs.includes("Dart") || langs.includes("Kotlin")) category = "Mobile";
        else if (langs.includes("PHP") || langs.includes("Java")) category = "Full Stack";

        return {
          name: repo.name.replace(/-/g, " "),
           description: isTicTacToe
            ? "A premium Android edition of the classic game. Built with Flutter, featuring adaptive AI levels and neo-dark aesthetic."
            : repo.description || "Experimental project focusing on modern architecture.",
          url: repo.html_url,
          liveUrl: isTicTacToe ? "/tictactoe" : repo.homepage || null,
          tech: langs.length ? langs : ["General"],
          isGame: isTicTacToe,
          icon: isTicTacToe ? "game" : null,
          logo: isTicTacToe ? "/tictactoe-logo.png" : "/favicon.ico",
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