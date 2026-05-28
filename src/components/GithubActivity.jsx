import React, { useEffect, useMemo, useRef, useState } from 'react';

export default function GithubActivity({
  label = "GitHub Activity",
  title = <>Code, commit,<br />repeat.</>,
  stats = [
    { number: "200+", label: "Contributions", delayClass: "reveal" },
    { number: "15+", label: "Repositories", delayClass: "reveal reveal-delay-1" },
    { number: "5", label: "Projects Starred", delayClass: "reveal reveal-delay-2" },
    { number: "98%", label: "Commit Streak", delayClass: "reveal reveal-delay-3" }
  ],
  languages = [
    { name: "JavaScript", percentage: 42, color: "#a78bfa" }, // Custom accentCustom2
    { name: "TypeScript", percentage: 28, color: "#38bdf8" }, // Custom accentCustom3
    { name: "CSS", percentage: 18, color: "#f472b6" }, // Custom pinkCustom
    { name: "HTML", percentage: 12, color: "#34d399" } // Custom greenCustom
  ]
}) {
  const [animateBars, setAnimateBars] = useState(false);
  const langBarsRef = useRef(null);

  // Generate mock contribution calendar data once (364 squares)
  const squares = useMemo(() => {
    const levels = ['', 'l1', 'l2', 'l3', 'l4'];
    return Array.from({ length: 364 }, () => {
      const r = Math.random();
      let level = levels[0];
      if (r > 0.65) level = levels[1];
      if (r > 0.78) level = levels[2];
      if (r > 0.88) level = levels[3];
      if (r > 0.95) level = levels[4];
      return level;
    });
  }, []);

  useEffect(() => {
    const target = langBarsRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setAnimateBars(true);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const getSquareBgClass = (level) => {
    switch (level) {
      case 'l1': return 'bg-accentCustom/20';
      case 'l2': return 'bg-accentCustom/40';
      case 'l3': return 'bg-accentCustom/65';
      case 'l4': return 'bg-accentCustom';
      default: return 'bg-bg3';
    }
  };

  return (
    <div className="bg-bg2 border-t border-b border-borderCustom">
      <div className="px-5 md:px-10 py-24 max-w-[1200px] mx-auto" id="github">
        <div className="text-xs font-semibold tracking-[0.15em] uppercase text-accentCustom2 mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[1px] before:bg-accentCustom2 reveal">
          {label}
        </div>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 text-textCustom reveal reveal-delay-1">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((stat, idx) => (
            <div key={idx} className={`bg-surface border border-borderCustom rounded-2xl p-7 text-center transition-all duration-300 hover:border-accentCustom2 hover:-translate-y-1 ${stat.delayClass}`}>
              <div className="font-display text-4xl font-extrabold bg-gradient-to-r from-accentCustom2 to-accentCustom3 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-mutedCustom text-xs mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-surface border border-borderCustom rounded-2xl p-7 reveal">
          <div className="text-sm font-semibold mb-5 text-mutedCustom">
            Contribution Activity — Last 12 Months
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(52, 1fr)',
              gap: '3px'
            }}
          >
            {squares.map((level, idx) => (
              <div
                key={idx}
                className={`w-full aspect-square rounded-[2px] transition-transform duration-200 hover:scale-150 ${getSquareBgClass(level)}`}
              ></div>
            ))}
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 reveal"
          ref={langBarsRef}
        >
          <div className="text-sm md:text-base font-semibold mb-4 text-textCustom md:col-span-2">
            Top Languages
          </div>
          {languages.map((lang, idx) => (
            <div key={idx} className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-textCustom font-medium">{lang.name}</span>
                <span className="text-mutedCustom">{lang.percentage}%</span>
              </div>
              <div className="h-1 bg-bg3 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-[width] duration-[1500ms] ease-out"
                  style={{
                    width: animateBars ? `${lang.percentage}%` : '0%',
                    background: lang.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
