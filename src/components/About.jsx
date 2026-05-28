import React from 'react';

export default function About({
  label = "About Me",
  title = <>Passionate developer.<br />Relentless learner.</>,
  paragraphs = [
    <>I'm a <strong className="text-textCustom font-medium">MERN Stack Developer</strong> with a deep passion for crafting digital experiences that are fast, intuitive, and impactful. Every project I build reflects my commitment to clean code and thoughtful design.</>,
    <>Starting from an <strong className="text-textCustom font-medium">internship</strong> where I developed real-world frontend skills, to freelancing and shipping full-stack applications — my journey has been driven by curiosity and a hunger to grow.</>,
    <>I specialize in building <strong className="text-textCustom font-medium">responsive UIs with React.js</strong>, scalable APIs with Node.js &amp; Express, and seamless database architectures with MongoDB. I also bring SEO expertise from hands-on WordPress experience.</>
  ],
  stats = [
    { number: "5+", label: "Projects Shipped", delayClass: "reveal" },
    { number: "10+", label: "Tech Stack Items", delayClass: "reveal reveal-delay-1" },
    { number: "100%", label: "Responsive Design", delayClass: "reveal reveal-delay-2" },
    { number: "∞", label: "Drive to Learn", delayClass: "reveal reveal-delay-3" }
  ],
  philosophy = {
    avatar: "JS",
    title: "My Philosophy",
    text: "I believe great software sits at the intersection of elegant code and beautiful design. I don't just write code — I craft experiences that users remember and businesses rely on.",
    tags: ["Clean Code", "Performance First", "User-Centric", "Agile Mindset", "Open Source", "Lifelong Learner"]
  }
}) {
  return (
    <section id="about" className="px-5 md:px-10 py-24 max-w-[1200px] mx-auto">
      <div className="text-xs font-semibold tracking-[0.15em] uppercase text-accentCustom2 mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[1px] before:bg-accentCustom2 reveal">
        {label}
      </div>
      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 text-textCustom reveal reveal-delay-1">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mt-16">
        <div className="space-y-5 reveal">
          {paragraphs.map((p, idx) => (
            <p key={idx} className="text-mutedCustom text-base leading-relaxed">{p}</p>
          ))}
          
          <div className="grid grid-cols-2 gap-5 mt-8">
            {stats.map((stat, idx) => (
              <div key={idx} className={`bg-surface border border-borderCustom rounded-xl p-6 transition-all duration-300 hover:border-accentCustom hover:bg-surface2 hover:-translate-y-0.5 ${stat.delayClass}`}>
                <div className="font-display text-4xl font-extrabold bg-gradient-to-r from-accentCustom2 to-accentCustom3 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-mutedCustom text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-card bg-surface border border-borderCustom rounded-2xl p-10 relative overflow-hidden reveal reveal-delay-2">
          <div className="w-20 h-20 bg-gradient-to-br from-accentCustom to-accentCustom2 rounded-2xl flex items-center justify-center font-display text-3xl font-extrabold text-white mb-6">
            {philosophy.avatar}
          </div>
          <div className="font-display text-2xl font-bold text-textCustom mb-3">
            {philosophy.title}
          </div>
          <p className="text-mutedCustom text-sm leading-relaxed">{philosophy.text}</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {philosophy.tags.map((tag, idx) => (
              <span key={idx} className="bg-accentCustom/10 border border-accentCustom/20 text-accentCustom2 px-3 py-1 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
