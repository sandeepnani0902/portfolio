import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GithubActivity from './components/GithubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Global Intersection Observer for scroll-reveal animations
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once visible, we can stop observing it
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px', // slightly offset trigger point for smoother feel
      }
    );

    // Observe all components utilizing scroll reveals
    const revealElements = document.querySelectorAll('.reveal, .timeline-item');
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Custom Mouse Cursor follower */}
      <CustomCursor />

      {/* Global Navigation Bar */}
      <Navbar logo="Sandeep Portfolio" />

      {/* Main sections */}
      <Hero />
      
      <div className="w-full h-[1px] bg-borderCustom m-0"></div>
      <About />
      
      <div className="w-full h-[1px] bg-borderCustom m-0"></div>
      <Skills />
      
      <Experience />
      
      <div className="w-full h-[1px] bg-borderCustom m-0"></div>
      <Projects />
      
      <div className="w-full h-[1px] bg-borderCustom m-0"></div>
      <GithubActivity />
      
      <Contact />
      
      <Footer designer="Sandeep" role="MERN Stack Developer" year={2026} />
    </>
  );
}
