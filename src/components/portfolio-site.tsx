"use client";

import { useEffect } from "react";
import { socials } from "@/data/portfolio";

type LinkIcon = "globe" | "whatsapp" | "mail" | "phone" | "instagram" | "youtube" | "tiktok" | "arrow" | "code" | "design" | "play";

function Icon({ name, size = 20 }: { name: LinkIcon; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true } as const;

  if (name === "globe") {
    return <svg {...common}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/><path d="M3.5 12h17M12 3c2.2 2.4 3.4 5.4 3.4 9S14.2 18.6 12 21M12 3C9.8 5.4 8.6 8.4 8.6 12S9.8 18.6 12 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>;
  }
  if (name === "whatsapp") {
    return <svg {...common}><path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L4 20l1.1-4A8.2 8.2 0 1 1 20.2 11.7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M9 8.2c.3-.6.6-.6.9-.6h.4c.2 0 .4.1.5.4l.9 2.1c.1.3 0 .5-.1.7l-.6.8c-.2.2-.2.4-.1.6.5 1 1.3 1.8 2.3 2.3.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l2 .9c.3.1.4.3.4.5 0 .3-.1 1.2-.8 1.9-.6.6-1.4 1-2.5.7-1.1-.2-2.7-.8-4.4-2.3-1.4-1.3-2.4-2.8-2.7-3.9-.3-1.1 0-2 .4-2.5.4-.4.8-.5 1.3-.3Z" fill="currentColor"/></svg>;
  }
  if (name === "mail") {
    return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  }
  if (name === "phone") {
    return <svg {...common}><path d="M7.2 4.3 9.3 8c.3.5.2 1.1-.2 1.5l-1.3 1.2a13.1 13.1 0 0 0 5.5 5.5l1.2-1.3c.4-.4 1-.5 1.5-.2l3.7 2.1c.5.3.8.9.6 1.5l-.5 1.6c-.2.7-.9 1.2-1.6 1.1C9.9 20.3 3.7 14.1 3 5.8c-.1-.7.4-1.4 1.1-1.6l1.6-.5c.6-.2 1.2.1 1.5.6Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  }
  if (name === "instagram") {
    return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>;
  }
  if (name === "youtube") {
    return <svg {...common}><path d="M21 8.2a3 3 0 0 0-2.1-2.2C17.1 5.5 12 5.5 12 5.5s-5.1 0-6.9.5A3 3 0 0 0 3 8.2 28.6 28.6 0 0 0 2.6 12c0 1.3.1 2.6.4 3.8A3 3 0 0 0 5.1 18c1.8.5 6.9.5 6.9.5s5.1 0 6.9-.5a3 3 0 0 0 2.1-2.2c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8Z" fill="currentColor"/><path d="m10 15.2 5.2-3.2L10 8.8v6.4Z" fill="white"/></svg>;
  }
  if (name === "tiktok") {
    return <svg {...common}><path d="M15.3 3c.3 2.5 1.7 4 4.4 4.2v3a8 8 0 0 1-4.3-1.3v6.3a6.2 6.2 0 1 1-5.3-6.1v3.2a3.1 3.1 0 1 0 2.1 2.9V3h3.1Z" fill="currentColor"/></svg>;
  }
  if (name === "code") {
    return <svg {...common}><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2.5-11-3 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  }
  if (name === "design") {
    return <svg {...common}><path d="m4 19.5 3.2-1 11-11L14.5 3.8l-11 11-1 3.2 1.5 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="m13.5 4.8 3.7 3.7" stroke="currentColor" strokeWidth="1.5"/></svg>;
  }
  if (name === "play") {
    return <svg {...common}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="m10 8.5 5.5 3.5-5.5 3.5v-7Z" fill="currentColor"/></svg>;
  }
  return <svg {...common}><path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

const links = [
  {
    label: "Visit my portfolio",
    meta: "bobmanuel.name.ng",
    href: "https://bobmanuel.name.ng",
    icon: "globe" as const,
    primary: true,
  },
  {
    label: "WhatsApp me",
    meta: "+234 911 240 3944",
    href: "https://wa.me/2349112403944",
    icon: "whatsapp" as const,
  },
  {
    label: "Email me",
    meta: "tdsbob29@gmail.com",
    href: "mailto:tdsbob29@gmail.com",
    icon: "mail" as const,
  },
  {
    label: "Call me",
    meta: "0911 240 3944",
    href: "tel:+2349112403944",
    icon: "phone" as const,
  },
];

const work = [
  { label: "Build", title: "Full-Stack Development", text: "Responsive websites and complete digital solutions, from interface to backend functionality.", icon: "code" as const },
  { label: "Design", title: "Graphic Design", text: "Visuals for brands, businesses and creators — including social graphics and promotional designs.", icon: "design" as const },
  { label: "Create", title: "Video Editing", text: "Short-form edits, motion, VFX, transitions and visual storytelling for digital content.", icon: "play" as const },
];

function socialIcon(platform: (typeof socials)[number]["platform"]): LinkIcon {
  if (platform === "Instagram") return "instagram";
  if (platform === "YouTube") return "youtube";
  return "tiktok";
}

export default function PortfolioSite() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="link-page">
      <div className="background-orb orb-one" aria-hidden="true" />
      <div className="background-orb orb-two" aria-hidden="true" />

      <section className="link-shell">
        <header className="link-header reveal is-visible">
          <a className="wordmark" href="#top" aria-label="Bobmanuel home">BOB<span>MANUEL</span><i>.</i></a>
          <span className="availability"><i /> Available for projects</span>
        </header>

        <section className="intro-card reveal is-visible" id="top">
          <div className="intro-copy">
            <div className="hero-kicker"><span>01</span><i /> WHO I AM</div>
            <p className="eyebrow">FULL-STACK DEVELOPER · GRAPHIC DESIGNER · VIDEO EDITOR</p>
            <h1>I build, design and create digital experiences.</h1>
            <p className="intro-text">
              I build websites and complete digital solutions for businesses, creators and personal brands — and I also create graphics and edit videos.
            </p>
            <div className="hero-meta">
              <span><b>Based in</b> Nigeria</span>
              <span><b>Open to</b> New projects</span>
            </div>
          </div>
          <div className="profile-image-wrap">
            <span className="image-stamp">SCOTT / 01</span>
            <img
              className="profile-image"
              src="/scott-profile.webp"
              alt="Scott profile artwork"
              width={400}
              height={400}
            />
          </div>
        </section>

        <section className="links-block reveal" aria-labelledby="connect-title">
          <div className="section-heading section-heading-row">
            <div>
              <div className="hero-kicker"><span>02</span><i /> CONNECT</div>
              <h2 id="connect-title">Everything in one place.</h2>
            </div>
            <span className="section-index">LINKS / 04</span>
          </div>

          <div className="main-links">
            {links.map((link) => (
              <a
                key={link.label}
                className={`contact-link${link.primary ? " contact-link-primary" : ""}`}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="contact-icon"><Icon name={link.icon} /></span>
                <span className="contact-copy"><strong>{link.label}</strong><small>{link.meta}</small></span>
                <span className="contact-arrow"><Icon name="arrow" /></span>
              </a>
            ))}
          </div>

          <div className="social-grid" aria-label="Social media links">
            {socials.map((social) => (
              <a key={social.platform} className="social-card" href={social.url} target="_blank" rel="noreferrer">
                <span className="social-icon"><Icon name={socialIcon(social.platform)} /></span>
                <span><strong>{social.platform}</strong><small>{social.handle}</small></span>
                <Icon name="arrow" size={17} />
              </a>
            ))}
          </div>
        </section>

        <section className="work-block reveal" aria-labelledby="work-title">
          <div className="section-heading section-heading-light section-heading-row">
            <div>
              <div className="hero-kicker"><span>03</span><i /> WHAT I DO</div>
              <h2 id="work-title">Build. Design. Create.</h2>
            </div>
            <span className="section-index">SKILLS / 03</span>
          </div>
          <div className="work-grid">
            {work.map((item, index) => (
              <article className="work-card" key={item.label}>
                <div className="work-top"><span>0{index + 1}</span><Icon name={item.icon} size={24} /></div>
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <div className="work-divider" />
                <small>{item.text}</small>
              </article>
            ))}
          </div>
        </section>

        <footer className="link-footer reveal">
          <div>
            <div className="footer-mark"><span>BM</span><i>+</i></div>
            <a className="wordmark footer-wordmark" href="#top">BOB<span>MANUEL</span><i>.</i></a>
            <p>Full-Stack Developer · Graphic Designer · Video Editor</p>
          </div>
          <p className="footer-tagline">Build. Design. Create.</p>
        </footer>
      </section>
    </main>
  );
}
