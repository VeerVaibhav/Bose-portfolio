"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  FileText,
  ExternalLink,
  GraduationCap,
  Code2,
  Mic2,
  Sparkles,
  ChevronLeft,
  Play,
} from "lucide-react";
import { patentsData, researchData, contentData } from "../../lib/archive-data";
import {
  EXPERIENCE,
  ABOUT_EDUCATION,
  ACHIEVEMENTS,
  ABOUT_HIGHLIGHTS,
  PROGRAM_GALLERY,
  PODCASTS,
  PEOPLE,
  MEETS,
  TECHFLUENCE,
  CONTACT,
} from "../../lib/data";
import { Footer, Modal, SectionTitle, World } from "./Shared";

const pages = {
  patents: [
    "RESEARCH & INNOVATION",
    "IDEAS WORTH",
    "PROTECTING.",
    "Exploring the intersection of education, artificial intelligence, and intelligent systems.",
  ],
  research: [
    "THE RESEARCH LOG",
    "CURIOSITY INTO",
    "DISCOVERY.",
    "Research into better learning experiences, practical AI, and meaningful technology.",
  ],
  experience: [
    "EVERY CHAPTER COUNTS",
    "THE JOURNEY",
    "SO FAR.",
    "A path through teaching, product building, community, and education reform.",
  ],
  content: [
    "PLAY. LEARN. REPEAT.",
    "IDEAS OUT",
    "LOUD.",
    "Conversations, lessons, and perspectives from the people building what’s next.",
  ],
  hire: [
    "LET’S MAKE AN IMPACT",
    "GOOD IDEAS NEED",
    "GOOD PEOPLE.",
    "A technical partner, an educator, a speaker, or someone to bring the community together. Let’s talk.",
  ],
};

function SearchableRecords({ type }) {
  const [query, setQuery] = useState("");
  const source = type === "patents" ? patentsData : researchData;
  const filtered = source.filter((item) =>
    [
      item.title,
      item.number,
      item.journal,
      ...(item.technologies || item.keywords || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <>
      <div className="archive-toolbar">
        <label className="search-field">
          <Search size={19} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              type === "patents"
                ? "Search patents or technologies…"
                : "Search papers, journals or topics…"
            }
            aria-label={
              type === "patents" ? "Search patents" : "Search research papers"
            }
          />
        </label>
        <span>
          {filtered.length} {filtered.length === 1 ? "RECORD" : "RECORDS"}
        </span>
      </div>
      <div className="archive-grid">
        {filtered.map((item) => (
          <article className="archive-card" key={item.id}>
            <div className="archive-meta">
              <FileText size={18} />
              <span>{item.year}</span>
              <span>{item.status}</span>
            </div>
            <h2>{item.title}</h2>
            <p>{item.number || item.journal}</p>
            <p style={{ marginTop: 18 }}>{item.description}</p>
            <div className="archive-tags">
              {(item.technologies || item.keywords).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p style={{ fontSize: 13, marginBottom: 20 }}>
              {(item.inventors || item.authors).join(" · ")}
            </p>
            {item.pdfUrl && item.pdfUrl !== "#" ? (
              <a
                className="outline-link"
                href={item.pdfUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={16} /> View patent document
              </a>
            ) : (
              <span className="unavailable">
                Document link not provided yet
              </span>
            )}
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state">
          No matching records. Try a different keyword.
        </div>
      )}
    </>
  );
}

function Experience() {
  const [photo, setPhoto] = useState(null);
  return (
    <>
      <div className="full-journey">
        {EXPERIENCE.map((exp, i) => (
          <article className="journey-row" key={exp.role}>
            <div className="journey-marker">
              <span>
                {i === 0 ? <Sparkles size={20} /> : <GraduationCap size={20} />}
              </span>
            </div>
            <div>
              <p className="eyebrow">{exp.period}</p>
              <h3>{exp.role}</h3>
              <p>{exp.org}</p>
              <ul className="journey-bullets">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <img src={exp.img} alt={exp.org} loading="lazy" />
          </article>
        ))}
      </div>
      <div className="archive-highlight">
        <p className="eyebrow">NEP SAARTHI · UGC</p>
        <h3 style={{ marginBottom: 12 }}>
          Student Ambassador for Academic Reforms
        </h3>
        <p style={{ marginBottom: 18 }}>
          Supporting the transformation of higher education in India.
        </p>
        <a
          className="outline-link"
          href="/pdf/UGC%20appointment%20letter.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <FileText size={16} /> View appointment letter
        </a>
      </div>
      <section className="section">
        <SectionTitle eyebrow="THE FOUNDATION">
          ALWAYS <span>A STUDENT.</span>
        </SectionTitle>
        <div className="education-strip">
          {ABOUT_EDUCATION.map((e) => (
            <div key={e.degree}>
              <h3>{e.degree}</h3>
              <p>{e.school}</p>
            </div>
          ))}
        </div>
      </section>
      <SectionTitle eyebrow="MILESTONES ALONG THE WAY">
        A LITTLE <span>MOMENTUM.</span>
      </SectionTitle>
      <div className="achievements-grid">
        {ACHIEVEMENTS.map((a) => (
          <article key={a.title}>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </article>
        ))}
      </div>
      <section className="section">
        <SectionTitle eyebrow="OUTSIDE THE CLASSROOM">
          LEARNING <span>IN THE WILD.</span>
        </SectionTitle>
        <div className="program-grid">
          {PROGRAM_GALLERY.map((p) => (
            <button
              key={p.src}
              onClick={() => setPhoto(p)}
              aria-label={`Open ${p.alt}`}
            >
              <img src={p.src} alt={p.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </section>
      {photo && (
        <Modal title={photo.alt} onClose={() => setPhoto(null)}>
          <img className="modal-photo" src={photo.src} alt={photo.alt} />
        </Modal>
      )}
    </>
  );
}

function contentPhoto(item) {
  if (item.thumbnail) return { src: item.thumbnail, alt: item.title };
  const name = (item.guestName || "").toLowerCase().replace(/[^a-z]/g, "");
  const portraits = [
    ...PEOPLE,
    ...MEETS,
    ...TECHFLUENCE.flatMap((e) => e.guests),
  ];
  const person = portraits.find(
    (p) =>
      name.length > 4 &&
      p.name
        .toLowerCase()
        .replace(/[^a-z]/g, "")
        .includes(name),
  );
  return person
    ? { src: person.img || person.photos?.[0], alt: person.name }
    : {
        src: "/img/gallery/10.jpeg",
        alt: "Souhardya Bose presenting at a university event",
      };
}

function Content() {
  const [category, setCategory] = useState("Talks");
  const [query, setQuery] = useState("");
  const [detail, setDetail] = useState(null);
  const items =
    category === "Talks"
      ? PODCASTS
      : contentData.filter(
          (c) => category === "All lessons" || c.topic === category,
        );
  const filtered = items.filter((p) =>
    [p.title, p.guestName, p.topic]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <>
      <div className="archive-toolbar">
        <label className="search-field">
          <Search size={19} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search talks and lessons…"
            aria-label="Search content"
          />
        </label>
        <span>{filtered.length} RESULTS</span>
      </div>
      <div
        className="content-filters"
        role="group"
        aria-label="Content categories"
      >
        {["Talks", "All lessons", "AI", "GenAI", "Java", "DSA"].map((t) => (
          <button
            key={t}
            className={category === t ? "active" : ""}
            aria-pressed={category === t}
            onClick={() => setCategory(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="archive-grid">
        {filtered.map((p, i) => (
          <article className="archive-card" key={`${p.title}-${i}`}>
            <img
              className="archive-content-image"
              src={contentPhoto(p).src}
              alt={contentPhoto(p).alt}
              loading="lazy"
            />
            <div className="archive-meta">
              <Play size={17} />
              {p.guestOrg || p.topic || p.type}
            </div>
            <h2>{p.title}</h2>
            <p>{p.guestName || p.type}</p>
            {p.desc && <p style={{ marginTop: 12 }}>{p.desc}</p>}
            <div className="archive-tags">
              {(p.tags || [p.topic]).filter(Boolean).map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {p.link && p.link !== "#" ? (
              <a
                className="outline-link"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                <Play size={16} /> Watch conversation
              </a>
            ) : (
              <button className="outline-link" onClick={() => setDetail(p)}>
                View lesson details
              </button>
            )}
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state">
          No matching content. Try another search.
        </div>
      )}
      {detail && (
        <Modal title={detail.title} onClose={() => setDetail(null)}>
          <p>
            {detail.topic} · {detail.type}
          </p>
          <p>
            The original portfolio lists this lesson, but a viewing link hasn’t
            been provided yet.
          </p>
          <a
            className="outline-link"
            href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`About your lesson: ${detail.title}`)}`}
          >
            Ask about this lesson
          </a>
        </Modal>
      )}
    </>
  );
}

function Hire() {
  const services = [
    {
      Icon: Code2,
      title: "Build a product.",
      desc: "Bring an idea to life with a partner who connects technology, product thinking, and real user needs.",
      bullets: [
        "Full-stack development",
        "AI-powered learning experiences",
        "Product strategy & roadmaps",
      ],
    },
    {
      Icon: GraduationCap,
      title: "Share the knowledge.",
      desc: "Practical, hands-on learning that connects the classroom to the industry.",
      bullets: [
        "AI & technology workshops",
        "Technical mentoring",
        "Student success & career guidance",
      ],
    },
    {
      Icon: Mic2,
      title: "Bring people together.",
      desc: "Create the conversations and communities that help people take their next step.",
      bullets: [
        "Keynotes & technology talks",
        "Community building",
        "Industry & academia connections",
      ],
    },
  ];
  return (
    <>
      <div className="archive-services">
        {services.map(({ Icon, ...s }) => (
          <article key={s.title}>
            <Icon size={30} />
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
            <ul>
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(s.title)}`}
              className="text-button"
            >
              Let’s talk <ExternalLink size={15} />
            </a>
          </article>
        ))}
      </div>
      <section className="section">
        <SectionTitle eyebrow="A LITTLE CONTEXT">
          EXPERIENCE <span>THAT CONNECTS.</span>
        </SectionTitle>
        <div className="archive-grid">
          {ABOUT_HIGHLIGHTS.map((h) => (
            <article className="archive-card" key={h.text}>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
      </section>
      <div className="archive-highlight">
        <p>
          For collaboration, speaking, workshops, or product enquiries, email{" "}
          <a href={`mailto:${CONTACT.email}`} style={{ color: "var(--cyan)" }}>
            {CONTACT.email}
          </a>
          .
        </p>
      </div>
    </>
  );
}

export default function Archive({ type }) {
  const [eyebrow, first, second, desc] = pages[type];
  return (
    <World>
      <main id="main">
        <section className="archive-hero shell">
          <Link href="/" className="back-link">
            <ChevronLeft size={17} /> Back to my world
          </Link>
          <p className="eyebrow">{eyebrow}</p>
          <h1>
            {first}
            <br />
            <span>{second}</span>
          </h1>
          <p>{desc}</p>
        </section>
        <section className="archive-body shell">
          {["research", "patents"].includes(type) ? (
            <SearchableRecords type={type} />
          ) : type === "experience" ? (
            <Experience />
          ) : type === "content" ? (
            <Content />
          ) : (
            <Hire />
          )}
        </section>
      </main>
      <Footer />
    </World>
  );
}
