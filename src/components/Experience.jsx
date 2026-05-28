import React from 'react';

export default function Experience({
  label = "Experience",
  title = <>My journey<br />so far.</>,
  experienceData = [
    {
      dot: "🎓",
      date: "2025 Feb — Present",
      role: "MERN STACK Developer Intern",
      company: "TekTree · Full-time Internship",
      desc: "Built and maintained responsive web interfaces using React.js and Tailwind CSS. Integrated RESTful APIs, improved page performance by 40%, and contributed to reusable component libraries used across the product.",
      tags: ["React.js", "Tailwind", "REST APIs", "Git"]
    },
    {
      dot: "💼",
      date: "2025 Sep — 2026 Jan",
      role: "Frontend Developer Intern",
      company: "Ramansoft · Full-time Internship",
      desc: "Built and maintained responsive web interfaces using React.js and Tailwind CSS. Integrated RESTful APIs, improved page performance by 40%, and contributed to reusable component libraries used across the product.",
      tags: []
    },
    {
      dot: "⚡",
      date: "2025 March — 2025 Sep",
      role: "Self-Taught Developer",
      company: "Open Source & Personal Projects",
      desc: "Mastered the MERN stack through building 10+ projects from scratch. Contributed to open source, built APIs, learned TypeScript, and developed a deep understanding of modern full-stack architecture.",
      tags: ["MERN", "TypeScript", "Open Source"]
    }
  ]
}) {
  return (
    <section id="experience" className="px-5 md:px-10 py-24 max-w-[1200px] mx-auto">
      <div className="text-xs font-semibold tracking-[0.15em] uppercase text-accentCustom2 mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[1px] before:bg-accentCustom2 reveal">
        {label}
      </div>
      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 text-textCustom reveal reveal-delay-1">
        {title}
      </h2>
      
      <div className="timeline-line relative mt-16 pl-[1px]">
        {experienceData.map((item, idx) => (
          <div key={idx} className="timeline-item flex gap-6 md:gap-10 mb-12 relative items-start">
            <div className="w-10 h-10 bg-surface border-2 border-accentCustom rounded-xl flex items-center justify-center flex-shrink-0 text-lg relative z-10">
              {item.dot}
            </div>
            <div className="bg-surface border border-borderCustom rounded-2xl p-7 flex-1 transition-all duration-300 hover:border-accentCustom hover:translate-x-1">
              <div className="text-[10px] md:text-[12px] font-semibold text-accentCustom2 tracking-wider uppercase mb-2">
                {item.date}
              </div>
              <div className="font-display text-lg md:text-xl font-bold text-textCustom mb-1">
                {item.role}
              </div>
              <div className="text-mutedCustom text-sm mb-3">
                {item.company}
              </div>
              <div className="text-mutedCustom text-xs md:text-sm leading-relaxed">
                {item.desc}
              </div>
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-accentCustom/10 border border-accentCustom/20 text-accentCustom2 px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
