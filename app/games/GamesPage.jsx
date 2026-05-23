"use client"

import { useEffect, useState } from "react";
import SignatureBar from "../components/SignatureBar";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import {
  Github,
  Layers,
  Gamepad2,
} from "lucide-react";

const GameCard = ({ game, i }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <m.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{ duration: 0.5, delay: i * 0.1, type: "spring", bounce: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="group relative p-px rounded-4xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/40 bg-linear-to-br from-cyan-500/30 via-transparent to-purple-500/10 border border-cyan-500/30 will-change-transform"
    >
      <div className="h-full rounded-4xl backdrop-blur-md p-8 flex flex-col border border-white/5 min-h-105 bg-gradient-to-br from-cyan-950/20 to-purple-950/10">
        {/* Category Indicator */}
        <m.div
          className="flex justify-between items-start mb-6"
          animate={{
            opacity: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <m.div
            className="p-3 rounded-2xl border shadow-inner bg-cyan-500/15 border-cyan-500/30 text-cyan-400"
            whileHover={{
              background: "rgba(34, 211, 238, 0.25)",
              borderColor: "rgba(34, 211, 238, 0.5)",
            }}
          >
            <Gamepad2 size={20} />
          </m.div>
          <Layers className="text-white/10 size-12 -mr-4 -mt-4 group-hover:text-white/15 transition-colors duration-500" />
        </m.div>

        <m.h2
          className="text-2xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors drop-shadow-lg"
          animate={{ opacity: isHovered ? 1 : 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {game.name}
        </m.h2>

        <m.p
          className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-4 font-medium"
          animate={{ opacity: isHovered ? 0.95 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {game.description || "No description provided."}
        </m.p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {game.tech.map((lang) => (
            <m.span
              key={lang}
              whileHover={{ scale: 1.05 }}
              className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-lg bg-white/5 text-slate-300 font-bold border border-white/10 shadow-sm hover:bg-white/10 transition-colors cursor-pointer"
            >
              {lang}
            </m.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 pt-6 border-t border-white/5">
          {game.liveUrl && (
            <m.a
              href={game.liveUrl}
              className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Gamepad2 size={16} />
              Play Now
            </m.a>
          )}
          <m.a
            href={game.url ?? game.html_url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={16} />
            Source
          </m.a>
        </div>
      </div>
    </m.div>
  );
};

export default function GamesPage({ initialGames }) {
  const [games, setGames] = useState(initialGames || null);

  useEffect(() => {
    if (initialGames) return;

    async function load() {
      try {
        const res = await fetch("/api/projects");
        let githubData = [];

        if (res.ok) {
          githubData = await res.json();
        }

        const processedGames = githubData.reduce((acc, repo) => {
        const repoName = repo.name.toLowerCase().replace(/[-_\s]/g, "");

        let processedRepo;

        if (repoName.includes("tictactoe")) {
          processedRepo = {
            ...repo,
            name: "TicTacToe",
            liveUrl: "/tictactoe",
            isGame: true,
            logo: "/tictactoe-logo.png",
          };
        } else if (repoName.includes("chess")) {
          processedRepo = {
            ...repo,
            name: "Chess",
            liveUrl: "/chess",
            isGame: true,
            logo: "/chess-logo.png",
          };
        } else {
          processedRepo = {
            ...repo,
            tech: repo.tech || ["Web"],
            isGame: repo.isGame || false,
          };
        }

  if (processedRepo.isGame) {
    acc.push(processedRepo);
  }

  return acc;
}, []);

        setGames(processedGames);

      } catch (err) {
        console.error("Fetch error:", err);
        setGames([
          { name: "TicTacToe", description: "Premium Android edition with adaptive AI.", tech: ["Flutter", "Dart", "Android"], url: "#", liveUrl: "/tictactoe", isGame: true, logo: "/tictactoe-logo.png" },
          { name: "Chess", description: "Modern beautiful cross-platform chess application.", tech: ["Flutter", "Dart", "Android"], url: "#", liveUrl: "/chess", isGame: true, logo: "/chess-logo.png" }
        ]);
      }
    }
    load();
  }, [initialGames]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen w-full bg-[#030712] text-white pt-24 pb-20 px-6 relative overflow-hidden selection:bg-cyan-500/30">

        {/* Background Aesthetic Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {/* Main Cyan Glow - 3D Rotating */}
          <m.div
            className="absolute top-[-10%] right-[-10%] size-[50%] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.2)_0%,transparent_70%)]"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: "blur(60px)",
            }}
          />

          {/* Secondary Purple Glow - 3D Rotating */}
          <m.div
            className="absolute bottom-[-10%] left-[-10%] size-[50%] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.2)_0%,transparent_70%)]"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{
              filter: "blur(60px)",
            }}
          />

          {/* Tertiary Cyan Accent - Counter Rotation */}
          <m.div
            className="absolute top-1/2 right-1/4 size-[40%] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.15)_0%,transparent_70%)]"
            animate={{
              y: [0, 40, -20, 0],
              x: [0, -30, 40, 0],
              scale: [0.8, 1.2, 0.9, 0.8],
              rotate: [0, 90, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: "blur(80px)",
            }}
          />

          {/* Deep Blue Accent - Opposite Direction */}
          <m.div
            className="absolute bottom-1/4 left-1/3 size-[35%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)]"
            animate={{
              y: [0, -50, 20, 0],
              x: [0, 40, -30, 0],
              scale: [1, 0.9, 1.1, 1],
              rotate: [360, 180, 90, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{
              filter: "blur(70px)",
            }}
          />

          {/* Floating Mesh-like Background */}
          <m.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(34,211,238,0.1) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(34,211,238,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "100px 100px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
          body { font-family: 'Plus Jakarta Sans', sans-serif; }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .animate-shimmer {
            animation: shimmer 3s infinite;
          }
        `}</style>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header Section */}
          <header className="flex flex-col items-center text-center mb-16" style={{ perspective: 1200 }}>
            <m.div
              initial={{ opacity: 0, scale: 0.5, rotateX: 90, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 mb-6"
              whileHover={{
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.6)",
                borderColor: "rgba(34, 211, 238, 0.8)",
                background: "rgba(34, 211, 238, 0.15)",
                scale: 1.05,
              }}
            >
              <m.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Gamepad2 size={14} className="fill-cyan-400/30" />
              </m.div>
              Games Hub
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: -100, rotateX: -80, z: -300 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
              transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
              className="text-6xl md:text-8xl font-semibold py-4 text-center bg-linear-to-r from-white via-cyan-100 to-blue-400 bg-clip-text text-transparent leading-none drop-shadow-2xl"
              style={{
                perspective: 1000,
                textShadow: "0 0 30px rgba(34, 211, 238, 0.3)",
              }}
              whileHover={{
                scale: 1.02,
              }}
            >
              My Games
            </m.h1>

            <m.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mt-6 font-medium leading-relaxed">
                A dedicated collection of{" "}
                <m.span
                  className="text-cyan-400 font-bold drop-shadow-sm"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(34, 211, 238, 0)",
                      "0 0 20px rgba(34, 211, 238, 1)",
                      "0 0 0px rgba(34, 211, 238, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  mobile and web games
                </m.span>{" "}
                built from scratch. From classics like Chess to TicTacToe.
              </p>
            </m.div>
          </header>

          {/* Games Grid */}
          <m.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{ perspective: 1200 }}
          >
            {!games &&
              [...Array(3)].map((_, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="h-95 bg-white/5 rounded-4xl border border-white/10 animate-pulse"
                />
              ))}
            <AnimatePresence mode="popLayout">
              {games && games.map((game, i) => (
                <GameCard key={game.name} game={game} i={i} />
              ))}
            </AnimatePresence>
          </m.div>

          {/* Empty State */}
          <AnimatePresence>
            {games && games.length === 0 && (
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center py-24"
              >
                <m.p
                  className="text-slate-500 text-xl italic font-medium"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  No games found.
                </m.p>
              </m.div>
            )}
          </AnimatePresence>
        </div>
        <SignatureBar />
      </div>
    </LazyMotion>
  );
}