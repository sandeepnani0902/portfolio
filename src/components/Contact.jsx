import React, { useState } from 'react';

export default function Contact({
  label = "Get In Touch",
  title = <>Let's build something<br />remarkable.</>,
  subtitle = "Whether you're a startup building something new, a recruiter with an exciting opportunity, or a fellow developer wanting to collaborate — I'd love to hear from you.",
  contactLinks = [
    { name: "GitHub", handle: "github.com/sandeepnani0902", icon: "💻", colorClass: "bg-accentCustom/15", url: "https://www.github.com/sandeepnani0902" },
    { name: "LinkedIn", handle: "linkedin.com/in/sandeep934/", icon: "in", colorClass: "bg-accentCustom3/12", url: "https://www.linkedin.com/in/sandeep934/" },
    { name: "Email", handle: "sandeep24.tech12@gmail.com", icon: "✉", colorClass: "bg-greenCustom/12", url: "mailto:sandeep24.tech12@gmail.com" },
    { name: "WhatsApp", handle: "+91 934-783-6411", icon: "💬", colorClass: "bg-greenCustom/12", url: "https://wa.me/919347836411" }
  ]
}) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields before sending.");
      return;
    }
    
    setIsSubmitting(true);
    console.log("Contact form submission data:", formData);
    
    // Simulate API delay
    setTimeout(() => {
      alert("Kindly approach me with other options, presently I am not available through mail forms.");
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="px-5 md:px-10 py-24 max-w-[1200px] mx-auto">
      <div className="text-xs font-semibold tracking-[0.15em] uppercase text-accentCustom2 mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[1px] before:bg-accentCustom2 reveal">
        {label}
      </div>
      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 text-textCustom reveal reveal-delay-1">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-16">
        <form className="flex flex-col gap-5 reveal" onSubmit={handleSendMessage}>
          <div className="flex flex-col gap-2">
            <label className="text-xs md:text-sm font-medium text-mutedCustom tracking-wider">Your Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-surface border border-borderCustom text-textCustom p-3.5 rounded-lg text-sm md:text-base outline-none resize-none transition-all duration-200 placeholder:text-mutedCustom/60 focus:border-accentCustom focus:bg-surface2 focus:ring-3 focus:ring-accentCustom/15" 
              placeholder="John Doe" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs md:text-sm font-medium text-mutedCustom tracking-wider">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-surface border border-borderCustom text-textCustom p-3.5 rounded-lg text-sm md:text-base outline-none resize-none transition-all duration-200 placeholder:text-mutedCustom/60 focus:border-accentCustom focus:bg-surface2 focus:ring-3 focus:ring-accentCustom/15" 
              placeholder="john@company.com" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs md:text-sm font-medium text-mutedCustom tracking-wider">Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-surface border border-borderCustom text-textCustom p-3.5 rounded-lg text-sm md:text-base outline-none resize-none transition-all duration-200 placeholder:text-mutedCustom/60 focus:border-accentCustom focus:bg-surface2 focus:ring-3 focus:ring-accentCustom/15 min-h-[140px]" 
              placeholder="Tell me about your project or opportunity..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-gradient-to-r from-accentCustom to-accentCustom2 text-white px-8 py-3.5 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(108,99,255,0.35)] disabled:opacity-50 cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message →"}
          </button>
        </form>

        <div className="reveal reveal-delay-1">
          <h3 className="font-display text-2xl font-bold text-textCustom mb-3">Open to new roles &amp; collaborations</h3>
          <p className="text-mutedCustom text-sm md:text-base leading-relaxed mb-8">{subtitle}</p>
          <div className="flex flex-col gap-4">
            {contactLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                className="flex items-center gap-4 p-4 bg-surface border border-borderCustom rounded-xl text-textCustom transition-all duration-300 hover:border-accentCustom hover:bg-surface2 hover:translate-x-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${link.colorClass}`}>{link.icon}</div>
                <div>
                  <div className="font-semibold text-sm md:text-base">{link.name}</div>
                  <div className="text-mutedCustom text-xs md:text-sm">{link.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
