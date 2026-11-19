"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Sparkles,
  Mail,
  MapPin,
  Copy,
  Check,
  Gamepad2,
} from "lucide-react";
import { CONTACT } from "../../lib/data";

export function ArcadeButton({
  children,
  onClick,
  secondary = false,
  className = "",
}) {
  const element = useRef(null);
  useEffect(() => {
    const node = element.current;
    const handler = (event) => {
      if (event.composedPath().some((item) => item.tagName === "BUTTON"))
        onClick?.(event);
    };
    node.addEventListener("click", handler);
    return () => node.removeEventListener("click", handler);
  }, [onClick]);
  return (
    <sakuga-button
      ref={element}
      variant={secondary ? "secondary" : undefined}
      className={className}
    >
      {children}
    </sakuga-button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Souhardya Bose home">
          <span className="brand-icon">
            SB<span>+</span>
          </span>
          <span>
            SOUHARDYA
            <span className="brand-last">
              BOSE<span className="pink">.</span>
            </span>
          </span>
        </Link>
        <nav
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {[
            ["The story", "/#about"],
            ["My work", "/#work"],
            ["Techfluence", "/#techfluence"],
            ["The journey", "/experience"],
          ].map(([name, href]) => (
            <Link key={href} onClick={() => setOpen(false)} href={href}>
              {name}
            </Link>
          ))}
        </nav>
        <Link href="/#contact" className="header-cta">
          LET’S TALK <Sparkles size={15} />
        </Link>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
    </>
  );
}

export function World({ children }) {
  return (
    <div className="arcade-world">
      <div className="ambient" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <Header />
      {children}
    </div>
  );
}

export function SectionTitle({ eyebrow, children, subtitle, action }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span className="tiny-cross">+</span> {eyebrow}
        </p>
        <h2>{children}</h2>
        {subtitle && <p className="section-description">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function PixelStar({ className = "" }) {
  return (
    <svg
      className={`pixel-star ${className}`}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13 0h6v10h3v3h10v6H22v3h-3v10h-6V22h-3v-3H0v-6h10v-3h3z" />
    </svg>
  );
}

export function Footer() {
  const [copied, setCopied] = useState(false);
  const toast = useRef(null);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      toast.current?.show?.("Email copied. Let’s build!");
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.current?.show?.("Copy unavailable. Use the email link.");
    }
  }
  return (
    <>
      <section id="contact" className="contact-section shell">
        <div className="contact-inner">
          <PixelStar className="contact-star" />
          <p className="eyebrow">THE NEXT CHAPTER STARTS WITH A HELLO</p>
          <h2>
            LET’S BUILD
            <br />
            <span>SOMETHING.</span>
          </h2>
          <p>
            A product. A community. A better way to learn.
            <br />
            Have something in mind? I’d love to hear it.
          </p>
          <a className="contact-email" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          <div className="contact-actions">
            <ArcadeButton
              onClick={() => {
                window.location.href = `mailto:${CONTACT.email}`;
              }}
            >
              <Mail size={18} /> SAY HELLO
            </ArcadeButton>
            <button onClick={copyEmail} className="text-button">
              {copied ? <Check size={17} /> : <Copy size={17} />}
              {copied ? "Copied!" : "Copy email"}
            </button>
          </div>
          <span className="contact-location">
            <MapPin size={15} /> {CONTACT.location}
          </span>
        </div>
      </section>
      <footer className="site-footer shell">
        <Link href="/" className="footer-brand">
          SB<span>+</span>
        </Link>
        <p>© {new Date().getFullYear()} Souhardya Bose. Made with curiosity.</p>
        <span>
          <Gamepad2 size={18} /> ALWAYS A WORK IN PROGRESS
        </span>
        <a href="#main">BACK TO TOP ↑</a>
      </footer>
      <sakuga-toast ref={toast} className="arcade-toast" />
    </>
  );
}

export function Modal({ title, onClose, children }) {
  const dialog = useRef(null);
  useEffect(() => {
    const node = dialog.current;
    node.showModal();
    const prior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prior;
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="arcade-dialog"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-labelledby="dialog-title"
    >
      <div className="dialog-top">
        <span className="eyebrow">A CLOSER LOOK</span>
        <button onClick={onClose} aria-label="Close details">
          <X />
        </button>
      </div>
      <h2 id="dialog-title">{title}</h2>
      {children}
    </dialog>
  );
}
