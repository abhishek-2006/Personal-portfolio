"use client";
import { motion } from "framer-motion";

export default function SkillsPage() {
    const skills = [
    {
        title: "Frontend",
        color: "from-cyan-500 to-blue-500",
        items: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Mobile Development",
        color: "from-pink-500 to-rose-500",
        items: ["Flutter", "Android (XML)", "Android (Kotlin/Java)"],
    },
    {
        title: "Backend",
        color: "from-purple-500 to-indigo-500",
        items: ["PHP", "Node.js"],
    },
    {
        title: "Database",
        color: "from-orange-500 to-red-500",
        items: ["MySQL", "MongoDB", "Firebase"],
    },
    {
        title: "Tools & Others",
        color: "from-green-500 to-lime-500",
        items: ["Git", "VS Code"],
    },    
];


    return (
    <div className="min-h-screen w-full bg-black text-white pt-32 pb-20 px-6">
      {/* Header */}
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
        >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
        </h1>
        <p className="text-gray-400 text-lg mt-4">
            A blend of everything I love building with.
        </p>
        </motion.div>

      {/* Split Layout */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {skills.map((category, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="p-[1px] rounded-2xl bg-gradient-to-r 
                ${category.color} shadow-lg"
            >
            <div className="rounded-2xl bg-black/60 backdrop-blur-xl p-8 h-full">
            <h2
                className={`text-2xl font-semibold bg-gradient-to-r ${category.color} text-transparent bg-clip-text mb-6`}
            >
                {category.title}
            </h2>

              {/* Skills */}
            <div className="flex flex-wrap gap-3">
                {category.items.map((skill, idx) => (
                <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-xl bg-white/10 text-gray-200
                    border border-white/10 backdrop-blur-md hover:bg-white/20 
                    transition cursor-default"
                >
                    {skill}
                </motion.span>
                ))}
            </div>
            </div>
        </motion.div>
        ))}
    </div>
    </div>
);
}
