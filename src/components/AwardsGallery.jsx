import { useState, useRef, useEffect } from "react";

const awards = [
  // { id: 1, src: "/awards/1.jpeg", title: "Best Educator Award", org: "EuroKids International", year: "2023" },
  { id: 4, src: "/awards/2.jpeg", title: "Excellence in Leadership", org: "National Education Forum", year: "2022" },
  { id: 5, src: "/awards/3.jpeg", title: "Doctorate Certification", org: "Osmania University", year: "2021" },
  { id: 2, src: "/awards/4.jpeg", title: "Curriculum Innovation Award", org: "CBSE", year: "2021" },
  { id: 3, src: "/awards/5.jpeg", title: "Outstanding Mentor", org: "Teacher's Guild of India", year: "2020" },
  { id: 6, src: "/awards/6.jpeg", title: "Early Childhood Specialist", org: "NIIT Foundation", year: "2019" },
  { id: 7, src: "/awards/7.jpeg", title: "Public Speaking Excellence", org: "Toastmasters International", year: "2019" },
  { id: 8, src: "/awards/8.jpeg", title: "HR Leadership Certificate", org: "SHRM India", year: "2018" },
  // { id: 9, src: "/awards/9.jpeg", title: "PGDCA — Rural Development", org: "IGNOU", year: "2017" },
  { id: 10, src: "/awards/10.jpeg", title: "Corporate Trainer Certification", org: "ISTD India", year: "2016" },
  { id: 11, src: "/awards/11.jpeg", title: "Outstanding Educator of the Year", org: "EuroKids International", year: "2015" },
  { id: 12, src: "/awards/12.jpeg", title: "Excellence in Teaching", org: "EuroKids International", year: "2014" },
  { id: 13, src: "/awards/13.jpeg", title: "Innovation in Education", org: "EuroKids International", year: "2013" },
];

export default function Gallery() {
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  // Duplicate for seamless loop
  const items = [...awards, ...awards];

  useEffect(() => {
    if (lightbox === null) return;
    const h = (e) => {
      if (e.key === "ArrowRight") setLightbox((l) => Math.min(l + 1, awards.length - 1));
      if (e.key === "ArrowLeft")  setLightbox((l) => Math.max(l - 1, 0));
      if (e.key === "Escape")     setLightbox(null);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lightbox]);

  return (
    <section id="gallery">
      <style>{STYLES}</style>

      <div className="sec-hdr reveal">
        <span className="sec-num">06</span>
        <h2>Awards &amp; Certifications</h2>
        <div className="sec-rule" />
      </div>

      {/* Fade edges */}
      <div className="gal-scene">
        <div className="gal-fade-left" />
        <div className="gal-fade-right" />

        <div
          className="gal-marquee"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className={`gal-track${paused ? " paused" : ""}`}>
            {items.map((a, i) => (
              <div
                key={i}
                className="gal-card"
                onClick={() => setLightbox(i % awards.length)}
              >
                <div className="gal-img">
                  <img src={a.src} alt={a.title} draggable="false" loading="lazy" />
                  <div className="gal-line" />
                </div>
                <div className="gal-info">
                  <span className="gal-year">{a.year}</span>
                  <p className="gal-title">{a.title}</p>
                  <span className="gal-org">{a.org}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="gal-lb" onClick={() => setLightbox(null)}>
          <div className="gal-lb-box" onClick={(e) => e.stopPropagation()}>
            <button className="gal-lb-close" onClick={() => setLightbox(null)}>×</button>
            <button
              className="gal-lb-arr left"
              onClick={() => setLightbox((l) => Math.max(l - 1, 0))}
              disabled={lightbox === 0}
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <img src={awards[lightbox].src} alt={awards[lightbox].title} className="gal-lb-img" />
            <button
              className="gal-lb-arr right"
              onClick={() => setLightbox((l) => Math.min(l + 1, awards.length - 1))}
              disabled={lightbox === awards.length - 1}
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="gal-lb-meta">
              <strong>{awards[lightbox].title}</strong>
              <span>{awards[lightbox].org} · {awards[lightbox].year}</span>
            </div>
            <span className="gal-lb-count">{lightbox + 1} / {awards.length}</span>
          </div>
        </div>
      )}
    </section>
  );
}

const STYLES = `
  #gallery {
    padding: 4rem 0;
    max-width: 100%;
    overflow: hidden;
  }

  #gallery .sec-hdr {
    max-width: 1100px;
    margin: 0 auto 2.5rem;
    padding: 0 2rem;
  }

  /* Scene clips the track and holds fade overlays */
  .gal-scene {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  /* Soft fade on left and right edges */
  .gal-fade-left,
  .gal-fade-right {
    position: absolute;
    top: 0; bottom: 0;
    width: 120px;
    z-index: 2;
    pointer-events: none;
  }
  .gal-fade-left  { left: 0;  background: linear-gradient(to right, var(--bg, #0f0f0f), transparent); }
  .gal-fade-right { right: 0; background: linear-gradient(to left,  var(--bg, #0f0f0f), transparent); }

  /* Marquee container */
  .gal-marquee {
    width: 100%;
    cursor: default;
  }

  /* Scrolling track — duplicated cards create seamless loop */
  .gal-track {
    display: flex;
    gap: 18px;
    width: max-content;
    padding: 8px 0 12px;
    animation: marqueeScroll 32s linear infinite;
  }
  .gal-track.paused {
    animation-play-state: paused;
  }

  @keyframes marqueeScroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* ── Card ── */
  .gal-card {
    flex-shrink: 0;
    width: 210px;
    border: 1px solid #222;
    border-radius: 5px;
    overflow: hidden;
    background: #111;
    cursor: pointer;
    transition: border-color 0.28s, transform 0.28s, box-shadow 0.28s;
  }
  .gal-card:hover {
    border-color: var(--accent, #c9a96e);
    transform: translateY(-5px);
    box-shadow: 0 14px 32px rgba(201,169,110,0.14);
  }

  .gal-img {
    position: relative;
    width: 210px;
    height: 155px;
    overflow: hidden;
    background: #0c0c0c;
  }
  .gal-img img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  .gal-card:hover .gal-img img { transform: scale(1.06); }

  /* Gold sweep line on hover */
  .gal-line {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: var(--accent, #c9a96e);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.32s ease;
  }
  .gal-card:hover .gal-line { transform: scaleX(1); }

  .gal-info {
    padding: 0.5rem 0.7rem 0.6rem;
    border-top: 1px solid #1c1c1c;
    display: flex;
    flex-direction: column;
    gap: 0.13rem;
  }
  .gal-year {
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent, #c9a96e);
    font-family: Georgia, serif;
  }
  .gal-title {
    margin: 0;
    font-size: 0.76rem;
    font-family: Georgia, serif;
    color: var(--text, #ddd);
    font-weight: 600;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .gal-org {
    font-size: 0.65rem;
    color: #666;
    font-family: Georgia, serif;
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* ── Lightbox ── */
  .gal-lb {
    position: fixed; inset: 0; z-index: 2000;
    background: rgba(0,0,0,0.92);
    backdrop-filter: blur(8px);
    display: flex; align-items: center; justify-content: center;
    padding: 1.5rem;
    animation: galFade 0.18s ease;
  }
  @keyframes galFade { from { opacity: 0; } to { opacity: 1; } }

  .gal-lb-box {
    position: relative;
    max-width: 700px; width: 100%;
    background: #0f0f0f;
    border: 1px solid var(--accent, #c9a96e);
    border-radius: 5px;
    overflow: hidden;
    animation: galPop 0.22s cubic-bezier(0.4,0,0.2,1);
  }
  @keyframes galPop { from { opacity:0; transform:scale(0.95); } to { opacity:1; transform:scale(1); } }

  .gal-lb-img {
    width: 100%;
    max-height: 68vh;
    object-fit: contain;
    display: block;
    background: #0a0a0a;
  }
  .gal-lb-meta {
    padding: 0.7rem 1rem 0.6rem;
    border-top: 1px solid #1e1e1e;
    display: flex; flex-direction: column; gap: 0.2rem;
  }
  .gal-lb-meta strong {
    font-family: Georgia, serif; font-size: 0.88rem; color: #ddd;
  }
  .gal-lb-meta span {
    font-size: 0.72rem; color: var(--accent, #c9a96e);
    font-family: Georgia, serif; font-style: italic;
  }
  .gal-lb-close {
    position: absolute; top: 8px; right: 10px; z-index: 5;
    width: 28px; height: 28px; border-radius: 50%;
    border: 1px solid var(--accent, #c9a96e);
    background: rgba(0,0,0,0.6); color: var(--accent, #c9a96e);
    font-size: 1.1rem; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
  }
  .gal-lb-close:hover { background: var(--accent, #c9a96e); color: #0f0f0f; }

  .gal-lb-arr {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 30px; height: 30px; border-radius: 50%;
    border: 1px solid var(--accent, #c9a96e);
    background: rgba(0,0,0,0.55); color: var(--accent, #c9a96e);
    cursor: pointer; z-index: 5;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
  }
  .gal-lb-arr:hover:not(:disabled) { background: var(--accent, #c9a96e); color: #0f0f0f; }
  .gal-lb-arr:disabled { opacity: 0.2; cursor: not-allowed; }
  .gal-lb-arr.left  { left: 8px; }
  .gal-lb-arr.right { right: 8px; }

  .gal-lb-count {
    position: absolute; bottom: 8px; right: 12px;
    font-size: 0.62rem; letter-spacing: 0.08em;
    color: #555; font-family: Georgia, serif;
  }

  @media (max-width: 600px) {
    .gal-card { width: 170px; }
    .gal-img  { width: 170px; height: 125px; }
    .gal-fade-left, .gal-fade-right { width: 60px; }
  }
`;