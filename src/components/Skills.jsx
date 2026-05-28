import React from 'react';

export default function Skills({
  label = "Technical Skills",
  title = <>Full-stack expertise,<br />modern toolchain.</>,
  subtitle = "A carefully curated skill set built through real projects, internships, and relentless self-improvement.",
  skillsData = [
    {
      icon: "⚛️",
      title: "Frontend Development",
      desc: "Pixel-perfect UIs with modern frameworks and best practices",
      wide: true,
      glow: true,
      delayClass: "reveal",
      skills: [
        { name: "React.js", color: "bg-accentCustom3" },
        { name: "Next.js", color: "bg-accentCustom3" },
        { name: "TypeScript", color: "bg-accentCustom3" },
        { name: "Tailwind CSS", color: "bg-accentCustom2" },
        { name: "HTML5", color: "bg-accentCustom2" },
        { name: "CSS3", color: "bg-accentCustom2" },
        { name: "JavaScript (ES6+)", color: "bg-accentCustom3" },
      ]
    },
    {
      icon: "🛠",
      title: "Backend & APIs",
      desc: "Scalable server logic and RESTful API design",
      delayClass: "reveal reveal-delay-1",
      skills: [
        { name: "Node.js", color: "bg-greenCustom" },
        { name: "Express.js", color: "bg-greenCustom" },
        { name: "REST APIs", color: "bg-greenCustom" },
      ]
    },
    {
      icon: "🗄",
      title: "Database",
      desc: "Data modeling and efficient query design",
      delayClass: "reveal reveal-delay-1",
      skills: [
        { name: "MongoDB", color: "bg-greenCustom" },
        { name: "Mongoose", color: "bg-greenCustom" },
        { name: "MySql", color: "bg-greenCustom" },
      ]
    },
    {
      icon: "🔧",
      title: "Tools & DevOps",
      desc: "Modern developer workflow and version control",
      delayClass: "reveal reveal-delay-2",
      skills: [
        { name: "Git & GitHub", color: "bg-pinkCustom" },
        { name: "VS Code", color: "bg-pinkCustom" },
        { name: "Vercel", color: "bg-pinkCustom" },
        { name: "Render", color: "bg-pinkCustom" },
      ]
    },
    {
      icon: "📈",
      title: "SEO & Growth",
      desc: "Technical SEO, WordPress, performance optimization",
      delayClass: "reveal reveal-delay-2",
      skills: [
        { name: "SEO", color: "bg-accentCustom3" },
        { name: "WordPress", color: "bg-accentCustom3" },
        { name: "Analytics", color: "bg-accentCustom3" },
      ]
    },
    {
      icon: "📱",
      title: "Responsive Design",
      desc: "Mobile-first, cross-browser, accessible interfaces",
      delayClass: "reveal reveal-delay-3",
      skills: [
        { name: "Mobile First", color: "bg-accentCustom2" },
        { name: "Accessible", color: "bg-accentCustom2" },
      ]
    }
  ]
}) {
  return (
    <div className="bg-bg2 border-t border-b border-borderCustom" id="skills">
      <section className="px-5 md:px-10 py-24 max-w-[1200px] mx-auto">
        <div className="text-xs font-semibold tracking-[0.15em] uppercase text-accentCustom2 mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[1px] before:bg-accentCustom2 reveal">
          {label}
        </div>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 text-textCustom reveal reveal-delay-1">
          {title}
        </h2>
        <p className="text-mutedCustom text-base md:text-lg max-w-[560px] leading-relaxed reveal reveal-delay-2">
          {subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pb-24">
          {skillsData.map((card, idx) => (
            <div
              key={idx}
              className={`bg-surface border border-borderCustom rounded-2xl p-7 transition-all duration-300 relative overflow-hidden hover:border-borderCustom2 hover:bg-surface2 hover:-translate-y-1 ${card.wide ? 'md:col-span-2' : ''} ${card.tall ? 'md:row-span-2' : ''} ${card.delayClass}`}
            >
              {card.glow && <div className="bento-glow absolute top-0 right-0 w-[120px] h-[120px] pointer-events-none"></div>}
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <div className="font-display text-lg font-bold text-textCustom mb-2">{card.title}</div>
              <div className="text-mutedCustom text-xs md:text-sm leading-relaxed mb-4">{card.desc}</div>
              <div className="flex flex-wrap gap-2">
                {card.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="bg-bg3 border border-borderCustom px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 hover:border-accentCustom2 hover:text-accentCustom2 hover:bg-accentCustom/5">
                    <div className={`w-1.5 h-1.5 rounded-full ${skill.color}`}></div>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
