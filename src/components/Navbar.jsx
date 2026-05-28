import React, { useEffect, useState } from 'react';

export default function Navbar({ logo = "My Portfolio", links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
] }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div id="progress" style={{ width: `${scrollProgress}%` }}></div>
      
      <nav className="fixed top-0 w-full z-[500] px-5 py-4 md:px-10 md:py-5 flex justify-between items-center backdrop-blur-[20px] bg-bg/70 border-b border-borderCustom transition-all duration-300">
        <div className="font-display font-extrabold text-xl bg-gradient-to-r from-accentCustom2 to-accentCustom3 bg-clip-text text-transparent">
          {logo}
        </div>
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((link, idx) => (
            <li key={idx}>
              <a 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-mutedCustom text-sm font-medium tracking-[0.03em] hover:text-textCustom transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-accentCustom2 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a 
          href="#contact" 
          className="bg-accentCustom text-white px-5 py-2 rounded-md text-xs md:text-sm font-semibold transition-all duration-200 hover:bg-accentCustom2 hover:-translate-y-[1px] cursor-pointer"
          onClick={(e) => handleLinkClick(e, '#contact')}
        >
          Contact Me →
        </a>
      </nav>
    </>
  );
}
