
import React from "react";

// Simple Icons
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiGithub,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiDocker,
  SiCplusplus,
  SiJava,
  SiPython,
  SiTailwindcss,
  SiBootstrap,
  SiGooglecloud,
  SiMysql,
  SiPostgresql,
  SiNeo4j,
  SiGit,
} from "react-icons/si";

// Font Awesome
import { FaAws } from "react-icons/fa";

// ============================================
// SKILLS DATA
// ============================================

const skills = [
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    color: "#1572B6",
  },
  {
    name: "SASS",
    icon: SiSass,
    color: "#CC6699",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "React JS",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
  },
  {
    name: "Node JS",
    icon: SiNodedotjs,
    color: "#5FA04E",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C",
  },
  {
    name: "Java",
    icon: SiJava,
    color: "#ED8B00",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952B3",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "#FF9900",
  },
  {
    name: "Google Cloud",
    icon: SiGooglecloud,
    color: "#4285F4",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "Neo4j",
    icon: SiNeo4j,
    color: "#008CC1",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
];

// ============================================
// SKILLS COMPONENT
// ============================================

function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-[#111111] px-[6%] py-20 text-white md:px-[9%]"
    >
      {/* Section Heading */}

      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[5px] text-yellow-400">
          My Expertise
        </p>

        <h2 className="text-3xl font-bold md:text-5xl">
          Technical{" "}
          <span className="text-yellow-400">
            Skills
          </span>
        </h2>

        <p className="mt-5 text-sm leading-7 text-gray-400 md:text-base">
          Technologies and tools I use to build modern,
          scalable and user-friendly applications.
        </p>
      </div>

      {/* Skills Grid */}

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="
                group flex h-36 cursor-pointer
                flex-col items-center justify-center gap-4
                rounded-xl border border-white/[0.04]
                bg-[#171717]
                shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                transition-all duration-300
                hover:-translate-y-2
                hover:border-white/10
                hover:bg-[#202020]
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]
                md:h-40
              "
            >
              {/* Technology Icon */}

              <Icon
                className="
                  text-5xl
                  transition-transform duration-300
                  group-hover:scale-110
                  md:text-6xl
                "
                style={{
                  color: skill.color,
                }}
              />

              {/* Technology Name */}

              <h3
                className="
                  text-center text-xs font-semibold
                  uppercase tracking-wider
                  text-gray-200
                  transition-colors duration-300
                  group-hover:text-white
                  md:text-sm
                "
              >
                {skill.name}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
