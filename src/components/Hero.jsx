import React from 'react';
import ParticleBackground from './ParticleBackground';

export default function Hero({
  greeting = "Hello, world — I'm",
  name = "SANDEEP JERIPOTHULA",
  role = "MERN Stack Developer",
  tagline = "I build fast, beautiful, and production-ready web applications that users love. From pixel-perfect UIs to scalable backend APIs.",
  availability = "Available for opportunities",
  primaryCtaText = "View My Work ↗",
  primaryCtaLink = "#projects",
  secondaryCtaText = "Download Resume ↓",
  secondaryCtaLink = "#contact",
  socials = [
    { name: "GitHub", url: "https://www.github.com/sandeepnani0902", icon: "⌥" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sandeep934/", icon: "in" },
    { name: "Email", url: "#contact", icon: "✉" },
  ]
}) {
  const handleScrollClick = (e, targetId) => {
    if (targetId.startsWith('#')) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-5 md:px-10 py-20 md:py-32" id="home">
      <ParticleBackground />
      <div className="hero-glow absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-[900px]">
        {availability && (
          <div className="inline-flex items-center gap-2 bg-greenCustom/10 border border-greenCustom/25 px-4 py-1.5 rounded-full text-xs md:text-sm text-greenCustom mb-8 animate-fade-up">
            <span className="w-[7px] h-[7px] bg-greenCustom rounded-full badge-pulse"></span>
            {availability}
          </div>
        )}
        <p className="font-display text-xs md:text-sm text-mutedCustom font-medium tracking-[0.12em] uppercase mb-4 animate-fade-up-delay-1 opacity-0">
          {greeting}
        </p>
        <h1 className="font-display text-4xl md:text-5vw lg:text-6xl font-extrabold leading-[1.0] mb-5 animate-fade-up-delay-2 opacity-0  text-center">
          <span className="bg-gradient-to-r from-white via-accentCustom2 to-accentCustom3 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>
        <p className="text-lg md:text-3xl text-mutedCustom font-light mb-6 animate-fade-up-delay-3 opacity-0">
          {role}
        </p>
        <p className="text-sm md:text-lg text-mutedCustom max-w-[560px] mx-auto mb-12 leading-relaxed animate-fade-up-delay-4 opacity-0">
          {tagline}
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-fade-up-delay-5 opacity-0">
          <a
            href={primaryCtaLink}
            className="bg-gradient-to-r from-accentCustom to-accentCustom2 text-white px-8 py-3.5 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(108,99,255,0.35)]"
            onClick={(e) => handleScrollClick(e, primaryCtaLink)}
          >
            {primaryCtaText}
          </a>
          {/* <a
            href={secondaryCtaLink}
            className="bg-transparent text-textCustom px-8 py-3.5 rounded-lg text-sm md:text-base font-medium transition-all duration-300 inline-flex items-center gap-2 border border-borderCustom2 hover:bg-surface hover:border-accentCustom hover:-translate-y-0.5"
            onClick={(e) => handleScrollClick(e, secondaryCtaLink)}
          >
            {secondaryCtaText}
          </a> */}
        </div>

        <div className="flex gap-5 justify-center mt-12 animate-fade-up-delay-6 opacity-0">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              className="group text-mutedCustom text-xs md:text-sm font-medium flex items-center gap-1.5 transition-colors duration-200 hover:text-accentCustom2"
              target={social.url.startsWith('#') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              onClick={social.url.startsWith('#') ? (e) => handleScrollClick(e, social.url) : undefined}
            >
              <div className="w-8 h-8 border border-borderCustom2 rounded-lg flex items-center justify-center text-sm md:text-base transition-all duration-200 group-hover:border-accentCustom group-hover:bg-accentCustom/10">
                {social.icon}
              </div>
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mutedCustom text-xs animate-fade-up-delay-8 opacity-0">
        <span>scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accentCustom2 to-transparent scroll-line-animation"></div>
      </div>
    </section>
  );
}
