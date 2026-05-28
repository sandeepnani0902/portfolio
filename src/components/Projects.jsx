import React from 'react';

export default function Projects({
  label = "Projects",
  title = <>Work that<br />speaks volumes.</>,
  subtitle = "Every project is a story — of problems solved, skills sharpened, and value delivered.",
  projectsData = [
    {
      title: "CineStream — Movie Streaming App",
      desc: "A full-featured Netflix-inspired streaming platform with user authentication, watchlist management, video previews, and a recommendation engine. Built with a focus on performance and seamless UX.",
      emoji: "🎬",
      bgClass: "p1",
      featured: true,
      delayClass: "reveal",
      stack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT Auth"],
      links: [
        { label: "↗ Live Demo(Admin)", url: "https://movie-flix-product-admin-frontend.vercel.app/" },
        { label: "↗ Live Demo(Client)", url: "https://movie-flix-product-client-frontend.vercel.app/" },
        { label: "⌥ GitHub", url: "https://github.com/sandeepnani0902/movie-flix-product-admin-frontend.git" }
      ]
    },
    {
      title: "TaskFlow — Task Manager",
      desc: "A Notion-inspired productivity app with real-time updates, drag-and-drop boards, team collaboration, and priority tagging.",
      emoji: "✅",
      bgClass: "p2",
      featured: false,
      delayClass: "reveal",
      stack: ["Next.js", "TypeScript", "MongoDB", "REST API"],
      links: [
        { label: "↗ Live Demo", url: "#" },
        { label: "⌥ GitHub", url: "#" }
      ]
    },
    {
      title: "HireHub — Job Platform",
      desc: "A LinkedIn-style job board with role-based access, resume uploads, intelligent filtering, and recruiter dashboards.",
      emoji: "💼",
      bgClass: "p3",
      featured: false,
      delayClass: "reveal reveal-delay-1",
      stack: ["MERN Stack", "TypeScript", "JWT"],
      links: [
        { label: "↗ Live Demo", url: "#" },
        { label: "⌥ GitHub", url: "#" }
      ]
    },
    {
      title: "SkyView — Weather App",
      desc: "A beautiful weather application with animated forecasts, geolocation, 7-day outlook, and air quality index using OpenWeather API.",
      emoji: "⛅",
      bgClass: "p4",
      featured: false,
      delayClass: "reveal reveal-delay-2",
      stack: ["React.js", "API Integration", "CSS Animations"],
      links: [
        { label: "↗ Live Demo", url: "#" },
        { label: "⌥ GitHub", url: "#" }
      ]
    },
    {
      title: "GitScope — GitHub Explorer",
      desc: "An analytics dashboard for GitHub profiles with repo stats, contribution graphs, language breakdowns, and user comparisons via GitHub API.",
      emoji: "🐙",
      bgClass: "p5",
      featured: false,
      delayClass: "reveal reveal-delay-3",
      stack: ["React.js", "GitHub API", "Charts"],
      links: [
        { label: "↗ Live Demo", url: "#" },
        { label: "⌥ GitHub", url: "#" }
      ]
    }
  ]
}) {
  return (
    <section id="projects" className="px-5 md:px-10 py-24 max-w-[1200px] mx-auto">
      <div className="text-xs font-semibold tracking-[0.15em] uppercase text-accentCustom2 mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[1px] before:bg-accentCustom2 reveal">
        {label}
      </div>
      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 text-textCustom reveal reveal-delay-1">
        {title}
      </h2>
      <p className="text-mutedCustom text-base md:text-lg max-w-[560px] leading-relaxed reveal reveal-delay-2">
        {subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className={`bg-surface border border-borderCustom rounded-2xl overflow-hidden transition-all duration-300 hover:border-borderCustom2 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)] group ${project.featured ? 'md:col-span-2' : ''} ${project.delayClass}`}
          >
            <div className={`project-preview relative overflow-hidden flex items-center justify-center ${project.featured ? 'h-[260px]' : 'h-[200px]'} ${project.bgClass}`}>
              <div className="project-emoji text-6xl filter grayscale-[30%] transition-transform duration-300 group-hover:scale-110">{project.emoji}</div>
            </div>
            <div className="p-6">
              <div className="font-display text-xl font-bold text-textCustom mb-2">{project.title}</div>
              <div className="text-mutedCustom text-sm leading-relaxed mb-4">{project.desc}</div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.map((tech, tIdx) => (
                  <span key={tIdx} className="bg-bg3 border border-borderCustom px-2.5 py-1 rounded text-[11px] font-medium text-mutedCustom">{tech}</span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    className="inline-flex items-center gap-1.5 text-mutedCustom text-xs md:text-sm font-medium border border-borderCustom px-3.5 py-2 rounded-lg transition-all duration-200 hover:text-accentCustom2 hover:border-accentCustom hover:bg-accentCustom/5 cursor-pointer"
                    target={link.url.startsWith('#') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
