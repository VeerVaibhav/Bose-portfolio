"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Code2,
  Mic2,
  GraduationCap,
  Sparkles,
  Play,
  ExternalLink,
  Zap,
  Trophy,
  BookOpen,
  Users,
  ChevronLeft,
  ChevronRight,
  Quote,
  Plus,
} from "lucide-react";
import {
  HERO,
  STATS,
  TECHFLUENCE,
  STARTUPS,
  EXPERIENCE,
  SKILLS_TECH,
  SKILLS_PM,
  SKILLS_TOOLS,
  KEY_PROJECT,
  OTHER_EVENTS,
  MEETS,
  SOCIAL_COMMENTS,
} from "../../lib/data";
import {
  ArcadeButton,
  Footer,
  Modal,
  PixelStar,
  SectionTitle,
  World,
} from "./Shared";

function Hero() {
  return (
    <section className="hero shell">
      <div className="hero-copy">
        <div className="intro-label">
          <span className="pixel-dot" /> WELCOME TO MY LITTLE CORNER OF THE
          INTERNET
        </div>
        <h1>
          SOUHARDYA
          <br />
          <span>
            BOSE<span className="hero-period">.</span>
          </span>
        </h1>
        <div className="role-sticker">PROFESSOR. BUILDER. COMMUNITY LEAD.</div>
        <p className="hero-description">
          Connecting <strong>people</strong>, building{" "}
          <strong>possibilities.</strong>
          <br />I turn big ideas into products, communities,
          <br className="desktop-break" /> and learning experiences that matter.
        </p>
        <div className="hero-actions">
          <ArcadeButton
            onClick={() =>
              document
                .getElementById("work")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <GameIcon /> EXPLORE MY WORK
          </ArcadeButton>
          <a href="#about" className="hero-about-link">
            Meet the human <Plus size={18} />
          </a>
        </div>
        <div className="hero-footnote">
          <span>BASED IN INDIA</span>
          <span>BUILDING BEYOND THE CLASSROOM</span>
        </div>
      </div>
      <div
        className="hero-art"
        aria-label="Souhardya Bose speaking at a university event"
      >
        <div className="hero-orbit" aria-hidden="true" />
        <PixelStar className="hero-star star-one" />
        <PixelStar className="hero-star star-two" />
        <span className="manga-word" aria-hidden="true">
          つくる
        </span>
        <div className="portrait-frame">
          <div className="portrait-top">
            <span>PLAYER PROFILE</span>
            <span>✦ ✦ ✦</span>
          </div>
          <div className="portrait-photo">
            <img
              src="/img/gallery/10.jpeg"
              alt="Souhardya Bose presenting at a podium"
              fetchPriority="high"
            />
            <div className="photo-halftone" />
            <span className="portrait-side">教える · 創る · つなぐ</span>
            <div className="portrait-caption">
              <span>PROFESSOR BY PROFESSION</span>
              <strong>BUILDER BY DEFAULT.</strong>
            </div>
          </div>
          <div className="portrait-bottom">
            <span>SOUHARDYA_BOSE</span>
            <span>↖ THAT’S ME!</span>
          </div>
        </div>
        <div className="floating-tag tag-teach">
          <GraduationCap size={21} />
          <span>
            TEACH.
            <br />
            <strong>INSPIRE. REPEAT.</strong>
          </span>
        </div>
        <div className="floating-tag tag-build">
          <Code2 size={20} /> ALWAYS BUILDING
        </div>
        <div className="manga-burst" aria-hidden="true">
          LET’S
          <br />
          GO!
        </div>
      </div>
      <a href="#about" className="scroll-cue">
        <span>SCROLL TO EXPLORE</span>
        <span>↓</span>
      </a>
    </section>
  );
}

function GameIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 6h12l3 12h-5l-2-3h-4l-2 3H3zM8 8v5M5.5 10.5h5M16 9h.1M18 12h.1" />
    </svg>
  );
}

function About() {
  return (
    <section id="about" className="section shell about-section">
      <SectionTitle eyebrow="A LITTLE LORE">
        MORE THAN <span>A TITLE.</span>
      </SectionTitle>
      <div className="about-grid">
        <div className="about-story">
          <div className="small-sticker">A CURIOUS MIND. MANY HATS.</div>
          <h3>
            Professor in the classroom.
            <br />
            Builder everywhere else.
          </h3>
          <p>
            I’m {HERO.name}, Assistant Professor &amp; Head of Student Success
            at Lovely Professional University. My work lives at the intersection
            of technology, education, and bringing people together.
          </p>
          <p>
            From co-building AI products to founding Techfluence, I’m here to
            help the next generation turn{" "}
            <span className="highlight-text">
              “what if” into “I made this.”
            </span>
          </p>
          <div className="identity-tags">
            <span>
              <GraduationCap size={17} /> EDUCATOR
            </span>
            <span>
              <Code2 size={17} /> BUILDER
            </span>
            <span>
              <Mic2 size={17} /> SPEAKER
            </span>
          </div>
        </div>
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <div className={`stat-card stat-${i}`} key={stat.label}>
              <span className="stat-spark" aria-hidden="true">
                ✦
              </span>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="lore-strip">
        <span>THE SHORT VERSION</span>
        <p>
          Technology is the tool. <strong>People are the point.</strong>
        </p>
        <PixelStar />
      </div>
    </section>
  );
}

function Work({ onProject }) {
  const [filter, setFilter] = useState("all");
  const tabs = useRef(null);
  useEffect(() => {
    const node = tabs.current;
    const change = (e) => setFilter(e.detail.value);
    node.addEventListener("change", change);
    return () => node.removeEventListener("change", change);
  }, []);
  const projects = [
    ...STARTUPS.map((p, i) => ({
      ...p,
      category: i === 1 ? "community" : "products",
    })),
    {
      name: KEY_PROJECT.title,
      tag: "AI · Research",
      desc: KEY_PROJECT.subtitle,
      category: "research",
      keyProject: true,
    },
  ];
  return (
    <section id="work" className="section shell">
      <SectionTitle
        eyebrow="IDEAS THAT LEFT THE NOTEBOOK"
        subtitle="A few things I’ve helped bring to life."
      >
        BUILT WITH <span>INTENT.</span>
      </SectionTitle>
      <div className="work-filter">
        <sakuga-tabs ref={tabs} label="Filter projects">
          <option value="all">All work</option>
          <option value="products">Products</option>
          <option value="community">Community</option>
          <option value="research">Research</option>
        </sakuga-tabs>
        <span className="filter-note">
          <Sparkles size={15} /> A LITTLE CURIOSITY GOES A LONG WAY
        </span>
      </div>
      <div
        className="projects-grid"
        role="tabpanel"
        aria-label={`${filter === "all" ? "All" : filter} projects`}
      >
        {projects
          .filter((p) => filter === "all" || p.category === filter)
          .map((project, index) => (
            <article
              className={`project-card project-${project.name.toLowerCase().replaceAll(/[^a-z]/g, "")}`}
              key={project.name}
            >
              <button
                className="project-art"
                onClick={() => onProject(project)}
                aria-label={`Explore ${project.name}`}
              >
                <ProjectArt name={project.name} />
                <span className="project-art-label">{project.tag}</span>
                <span className="project-open">
                  <Plus size={24} />
                </span>
              </button>
              <div className="project-info">
                <span className="eyebrow">
                  {project.keyProject
                    ? "INTELLIGENT SYSTEMS"
                    : project.role || "CYBERSECURITY"}
                </span>
                <h3>{project.name}</h3>
                <p>
                  {project.desc ||
                    "An AI-powered vulnerability assessment tool, built during my work at Indian Cyber Security Solutions."}
                </p>
                <button
                  onClick={() => onProject(project)}
                  className="text-button"
                >
                  Explore project <Plus size={16} />
                </button>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}

function ProjectArt({ name }) {
  if (name === "TeachGenie")
    return (
      <div className="genie-art">
        <span className="art-orb" />
        <Sparkles className="genie-spark" size={65} strokeWidth={1.4} />
        <span className="genie-type">
          Teach<span>Genie</span>
          <small>ONE MINUTE. INFINITE IMPACT.</small>
        </span>
        <span className="art-window">LESS PREP. MORE POSSIBILITY.</span>
      </div>
    );
  if (name === "Mentro")
    return (
      <div className="mentro-art">
        <div className="mentro-chat">
          Your next chapter?
          <br />
          <strong>Let’s figure it out.</strong>
          <span>✦</span>
        </div>
        <div className="mentro-type">
          mentro<span>HUMAN CONNECTION. REAL GROWTH.</span>
        </div>
      </div>
    );
  if (name === "VickyBytes")
    return (
      <div className="bytes-art">
        <div className="code-window">
          <span>
            ● ● ● <small>hello_world.tsx</small>
          </span>
          <code>
            <i>const</i> curiosity = <b>true</b>;<br />
            <br />
            <i>while</i> (curiosity) {"{"}
            <br />
            &nbsp;&nbsp;learn();
            <br />
            &nbsp;&nbsp;<b>build();</b>
            <br />
            &nbsp;&nbsp;share();
            <br />
            {"}"}
          </code>
        </div>
        <span className="bytes-label">
          VICKY<span>BYTES</span>
        </span>
      </div>
    );
  return (
    <div className="research-art">
      <div className="radar">
        <span />
        <span />
        <span />
        <Zap size={50} />
      </div>
      <strong>{name === "SAVE-AI" ? "SAVE—AI" : "AI × HEALTH"}</strong>
      <small>
        {name === "SAVE-AI" ? "INTELLIGENT DEFENSE" : "RESEARCH INTO REALITY"}
      </small>
    </div>
  );
}

function Techfluence({ onGuest, onEvent }) {
  const [selected, setSelected] = useState(5);
  const edition = TECHFLUENCE[selected];
  return (
    <section id="techfluence" className="techfluence-section">
      <div className="shell section">
        <SectionTitle
          eyebrow="THE COMMUNITY ARC"
          subtitle="Big ideas. Real conversations. A room full of possibility."
        >
          THIS IS <span>TECHFLUENCE.</span>
        </SectionTitle>
        <div className="techfluence-layout">
          <div className="techfluence-intro">
            <span className="edition-sticker">6 EDITIONS. ONE BIG IDEA.</span>
            <h3>
              Good things happen
              <br />
              when curious
              <br />
              <span>people collide.</span>
            </h3>
            <p>
              I founded Techfluence to bring students and industry leaders into
              the same room. Six editions later, the conversations keep getting
              bigger.
            </p>
            <div className="community-stats">
              <div>
                <strong>9M+</strong>
                <span>CONTENT REACH</span>
              </div>
              <div>
                <strong>30+</strong>
                <span>GLOBAL LEADERS</span>
              </div>
            </div>
          </div>
          <div className="edition-panel">
            <div
              className="edition-tabs"
              role="tablist"
              aria-label="Techfluence editions"
            >
              {TECHFLUENCE.map((e, i) => (
                <button
                  key={e.edition}
                  role="tab"
                  tabIndex={selected === i ? 0 : -1}
                  onKeyDown={(event) => {
                    const next =
                      event.key === "ArrowRight"
                        ? (i + 1) % 6
                        : event.key === "ArrowLeft"
                          ? (i + 5) % 6
                          : event.key === "Home"
                            ? 0
                            : event.key === "End"
                              ? 5
                              : null;
                    if (next !== null) {
                      event.preventDefault();
                      setSelected(next);
                      document.getElementById(`edition-${next}`).focus();
                    }
                  }}
                  aria-selected={selected === i}
                  aria-controls="edition-content"
                  id={`edition-${i}`}
                  onClick={() => setSelected(i)}
                >
                  S{e.edition}
                </button>
              ))}
            </div>
            <div
              id="edition-content"
              role="tabpanel"
              aria-labelledby={`edition-${selected}`}
            >
              <div className="edition-header">
                <h4>
                  TECHFLUENCE <span>{edition.edition}.0</span>
                </h4>
                <span>{edition.guests.length} SPEAKERS</span>
              </div>
              <div className="edition-summary">
                <p>{edition.desc}</p>
                <button
                  className="text-button"
                  onClick={() =>
                    onEvent({
                      ...edition,
                      name: `Techfluence ${edition.edition}.0`,
                      description: edition.desc,
                    })
                  }
                >
                  Explore this edition <Plus size={15} />
                </button>
              </div>
              <div className="guest-grid">
                {edition.guests.map((guest, i) => (
                  <button
                    className="guest-card"
                    key={guest.name}
                    onClick={() => onGuest(guest)}
                  >
                    <img src={guest.img} alt={guest.name} loading="lazy" />
                    <div>
                      <strong>{guest.name}</strong>
                      <span>{guest.tag}</span>
                    </div>
                    <Plus size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="event-strip">
          {OTHER_EVENTS.map((e) => (
            <button key={e.id} onClick={() => onEvent({ ...e, name: e.title })}>
              <Zap size={16} />
              <span>{e.title}</span>
              <small>{e.date}</small>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="section shell">
      <SectionTitle
        eyebrow="THE PATH SO FAR"
        action={
          <Link href="/experience" className="outline-link">
            The full journey <Plus size={17} />
          </Link>
        }
      >
        ALWAYS <span>LEVELING UP.</span>
      </SectionTitle>
      <div className="journey-list">
        {EXPERIENCE.slice(0, 3).map((exp, i) => (
          <article className="journey-row" key={exp.role}>
            <div className="journey-marker">
              <span>
                {i === 0 ? (
                  <Sparkles size={20} />
                ) : i === 1 ? (
                  <Code2 size={20} />
                ) : (
                  <GraduationCap size={20} />
                )}
              </span>
            </div>
            <div>
              <span className="eyebrow">{exp.period}</span>
              <h3>{exp.role}</h3>
              <p>{exp.org}</p>
            </div>
            <span className="journey-tag">
              {i === 0
                ? "THE CURRENT CHAPTER"
                : i === 1
                  ? "BUILDING & GROWING"
                  : "EDUCATION & IMPACT"}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section shell skills-section">
      <SectionTitle eyebrow="MY INVENTORY">
        TOOLS OF <span>THE TRADE.</span>
      </SectionTitle>
      <div className="skills-grid">
        {[
          [Code2, "BUILD & SHIP", SKILLS_TECH],
          [Users, "THINK & LEAD", SKILLS_PM],
          [Sparkles, "CREATE & EXPLORE", SKILLS_TOOLS],
        ].map(([Icon, title, skills]) => (
          <div className="skill-panel" key={title}>
            <Icon size={25} />
            <h3>{title}</h3>
            <div>
              {skills.map((s) => (
                <span key={s.name}>{s.name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Moments({ onPhoto }) {
  const [start, setStart] = useState(0);
  return (
    <section className="section shell">
      <SectionTitle
        eyebrow="PEOPLE MAKE THE JOURNEY"
        subtitle="A few conversations and encounters that stayed with me."
        action={
          <div className="carousel-controls">
            <button
              disabled={start === 0}
              onClick={() => setStart(Math.max(0, start - 3))}
              aria-label="Previous moments"
            >
              <ChevronLeft />
            </button>
            <button
              disabled={start + 3 >= MEETS.length}
              onClick={() => setStart(Math.min(MEETS.length - 3, start + 3))}
              aria-label="Next moments"
            >
              <ChevronRight />
            </button>
          </div>
        }
      >
        BEYOND <span>THE SCREEN.</span>
      </SectionTitle>
      <div className="moments-grid">
        {MEETS.slice(start, start + 3).map((meet, i) => (
          <button
            className={`moment-card moment-${i}`}
            key={meet.name}
            onClick={() => onPhoto(meet)}
          >
            <div className="moment-photo">
              <img
                src={meet.photos[0]}
                alt={`With ${meet.name}`}
                loading="lazy"
              />
            </div>
            <span className="moment-category">{meet.category}</span>
            <h3>{meet.name}</h3>
            <p>{meet.org}</p>
            <Plus size={20} />
          </button>
        ))}
      </div>
    </section>
  );
}

function Voices() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="section shell voices-section">
      <SectionTitle eyebrow="THE RIPPLE EFFECT">
        WORDS FROM <span>THE COMMUNITY.</span>
      </SectionTitle>
      <div className="voices-grid">
        {(expanded ? SOCIAL_COMMENTS : SOCIAL_COMMENTS.slice(1, 4)).map(
          (comment, i) => (
            <blockquote key={i}>
              <Quote size={28} />
              <p>{comment.text}</p>
              <a href={comment.linkedin} target="_blank" rel="noreferrer">
                Read the original on LinkedIn <ExternalLink size={14} />
              </a>
            </blockquote>
          ),
        )}
      </div>
      <button
        className="outline-link"
        style={{ marginTop: 25 }}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show fewer stories" : "More community stories"}
        <Plus size={16} />
      </button>
    </section>
  );
}

function More() {
  return (
    <section className="section shell more-section">
      <div>
        <p className="eyebrow">STILL CURIOUS?</p>
        <h2>
          THERE’S <span>MORE.</span>
        </h2>
        <p>Research, conversations, and a few side quests.</p>
      </div>
      <div className="more-links">
        {[
          [BookOpen, "Research papers", "/research"],
          [Trophy, "Patents & innovation", "/patents"],
          [Play, "Talks & content", "/content"],
          [Users, "Work with me", "/hire"],
        ].map(([Icon, label, href]) => (
          <Link key={href} href={href}>
            <Icon size={21} />
            <span>{label}</span>
            <Plus size={20} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [detail, setDetail] = useState(null);
  return (
    <World>
      <main id="main">
        <Hero />
        <div className="ticker" aria-hidden="true">
          <div>
            {Array.from({ length: 2 }, (_, i) => (
              <span key={i}>
                STAY CURIOUS <b>✦</b> BUILD SOMETHING <b>✦</b> BRING PEOPLE
                TOGETHER <b>✦</b> REPEAT <b>✦</b>{" "}
              </span>
            ))}
          </div>
        </div>
        <About />
        <Work onProject={(p) => setDetail({ type: "project", data: p })} />
        <Techfluence
          onGuest={(p) => setDetail({ type: "guest", data: p })}
          onEvent={(p) => setDetail({ type: "event", data: p, photo: 0 })}
        />
        <Journey />
        <Skills />
        <Moments
          onPhoto={(p) => setDetail({ type: "meet", data: p, photo: 0 })}
        />
        <Voices />
        <More />
      </main>
      <Footer />
      {detail && (
        <Modal title={detail.data.name} onClose={() => setDetail(null)}>
          {detail.type === "project" && (
            <>
              <div className="modal-project-art">
                <ProjectArt name={detail.data.name} />
              </div>
              <p>{detail.data.role}</p>
              <p>
                {detail.data.desc ||
                  "An AI-powered vulnerability assessment tool developed at Indian Cyber Security Solutions."}
              </p>
              {detail.data.keyProject && (
                <ul>
                  {KEY_PROJECT.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {detail.data.link && (
                <a
                  className="outline-link"
                  href={detail.data.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit {detail.data.name} <ExternalLink size={16} />
                </a>
              )}
            </>
          )}
          {detail.type === "guest" && (
            <>
              <img
                className="modal-guest-image"
                src={detail.data.img}
                alt={detail.data.name}
              />
              <p>{detail.data.desc}</p>
              {detail.data.importantInfo?.length > 0 && (
                <ul>
                  {detail.data.importantInfo.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              )}
              {detail.data.linkedin && (
                <a
                  className="outline-link"
                  href={detail.data.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn profile <ExternalLink size={16} />
                </a>
              )}
            </>
          )}
          {detail.type === "event" && (
            <>
              <p>{detail.data.description}</p>
              {detail.data.stats && (
                <div className="archive-tags">
                  {detail.data.stats.map((s) => (
                    <span key={s.label}>
                      {s.value} {s.label}
                    </span>
                  ))}
                </div>
              )}
              {detail.data.gallery?.length > 0 && (
                <>
                  <img
                    className="modal-photo"
                    src={detail.data.gallery[detail.photo]}
                    alt={`${detail.data.name} gallery`}
                  />
                  <div className="photo-pagination">
                    {detail.data.gallery.map((p, i) => (
                      <button
                        key={p}
                        className={i === detail.photo ? "selected" : ""}
                        onClick={() => setDetail({ ...detail, photo: i })}
                      >
                        Photo {i + 1}
                      </button>
                    ))}
                  </div>
                </>
              )}
              {detail.data.highlights && (
                <ul>
                  {detail.data.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </>
          )}
          {detail.type === "meet" && (
            <>
              <img
                className="modal-photo"
                src={detail.data.photos[detail.photo]}
                alt={`With ${detail.data.name}`}
              />
              <p>
                {detail.data.role} · {detail.data.org}
              </p>
              {detail.data.photos.length > 1 && (
                <div className="photo-pagination">
                  {detail.data.photos.map((p, i) => (
                    <button
                      key={p}
                      className={i === detail.photo ? "selected" : ""}
                      onClick={() => setDetail({ ...detail, photo: i })}
                    >
                      Photo {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </Modal>
      )}
    </World>
  );
}
