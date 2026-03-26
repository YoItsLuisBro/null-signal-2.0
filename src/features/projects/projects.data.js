import rawWaveCover from "../../assets/projects/raw-wave-cover.png";
import glitchtype93Cover from "../../assets/projects/glitchtype93-cover.png";
import cyberHeavenCover from "../../assets/projects/cyber-heaven-cover.png";

export const projects = [
  {
    slug: "raw-wave",
    title: "RAW//WAVE",
    description:
      "A brutalist music interface experiment focused on hierarchy, interaction, and a loud visual system built to feel distinct at first glance.",
    stack: ["React", "Vite", "Tailwind", "UI Design"],
    liveUrl: "https://raw-wave.vercel.app/",
    repoUrl: "https://github.com/YoItsLuisBro/raw-wave",
    image: rawWaveCover,
    featured: true,
    status: "Live",
    year: "2026",
    category: "Frontend",
  },
  {
    slug: "glitchtype93",
    title: "GLITCHTYPE '93",
    description:
      "A retro-styled experimental interface with glitch-heavy branding, high-contrast presentation, and a deliberately loud visual identity.",
    stack: ["React", "Vite", "CSS", "Experimental UI"],
    liveUrl: "https://glitchtype93.vercel.app/",
    repoUrl: "https://github.com/YoItsLuisBro/glitchtype93",
    image: glitchtype93Cover,
    featured: true,
    status: "Live",
    year: "2026",
    category: "Creative UI",
  },
  {
    slug: "cyber-heaven",
    title: "CYBER HEAVEN",
    description:
      "A neo-brutalist productivity hub that combines modular workflows, focused interface design, and a stronger product-system feel.",
    stack: ["React", "TypeScript", "Vite", "Supabase"],
    liveUrl: "https://cyberheaven.app/",
    repoUrl: "https://github.com/YoItsLuisBro/cyberheaven",
    image: cyberHeavenCover,
    featured: true,
    status: "Live",
    year: "2026",
    category: "Product App",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
