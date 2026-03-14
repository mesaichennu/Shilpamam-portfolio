import { useState, useEffect, useRef, useCallback } from "react";

// ── Dummy data — replace with your real items ──────────────────────────────
const ITEMS = [
  {
    id: 1,
    type: "award",
    icon: "🏆",
    title: "Best Educator Award",
    issuer: "National Council for Teacher Education",
    year: "2023",
    description:
      "Recognised for outstanding contribution to early childhood education and curriculum innovation across Telangana.",
  },
  {
    id: 2,
    type: "certification",
    icon: "📜",
    title: "Certified Early Childhood Professional",
    issuer: "Association for Childhood Education International",
    year: "2022",
    description:
      "International certification validating expertise in child development, pedagogy, and inclusive classroom practices.",
  },
  {
    id: 3,
    type: "award",
    icon: "🌟",
    title: "Excellence in Leadership",
    issuer: "EuroKids International",
    year: "2022",
    description:
      "Awarded for exemplary leadership in scaling the EuroKids centre network across Hyderabad with measurable quality outcomes.",
  },
  {
    id: 4,
    type: "certification",
    icon: "🎓",
    title: "Doctorate — Education Management",
    issuer: "Osmania University, Hyderabad",
    year: "2020",
    description:
      "Ph.D. focused on transformative leadership models in pre-primary education within the Indian subcontinent.",
  },
  {
    id: 5,
    type: "award",
    icon: "🥇",
    title: "Women in Education Award",
    issuer: "Telangana State Government",
    year: "2021",
    description:
      "State-level recognition for championing gender-inclusive teaching frameworks and mentoring women educators.",
  },
  {
    id: 6,
    type: "certification",
    icon: "📋",
    title: "Child Psychology & Development",
    issuer: "NIMHANS, Bangalore",
    year: "2019",
    description:
      "Advanced programme in applied child psychology, behavioural assessment, and therapeutic classroom strategies.",
  },
];

const VISIBLE = 3; // cards visible at once on desktop

export default function AwardsGallery() {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("all"); // all | award | certification
  const [animDir, setAnimDir] = useState(""); // "left" | "right"
  const autoRef = useRef(null);

  const filtered = ITEMS.filter((i) => filter === "all" || i.type === filter);
  const total = filtered.length;

  const go = useCallback(
    (dir) => {
      setAnimDir(dir);
      setActive((prev) =>
        dir === "right" ? (prev + 1) % total : (prev - 1 + total) % total
      );
    },
    [total]
  );

  // Auto-advance every 4 s
  useEffect(() => {
    autoRef.current = setInterval(() => go("right"), 4000);
    return () => clearInterval(autoRef.current);
  }, [go]);

  const pause = () => clearInterval(autoRef.current);

  // Clamp active index when filter changes
  useEffect(() => {
    setActive(0);
  }, [filter]);

  // Indices of visible cards
  const indices = Array.from(
    { length: Math.min(VISIBLE, total) },
    (_, k) => (active + k) % total
  );

  return (
    <section id="awards" style={styles.section}>
      {/* ── Heading ── */}
      <div style={styles.header}>
        <span style={styles.secNum}>06</span>
        <h2 style={styles.heading}>Awards & Certifications</h2>
        <div style={styles.rule} />
      </div>

      {/* ── Filter Tabs ── */}
      <div style={styles.tabs}>
        {["all", "award", "certification"].map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            style={{
              ...styles.tab,
              ...(filter === t ? styles.tabActive : {}),
            }}
          >
            {t === "all" ? "All" : t === "award" ? "🏆 Awards" : "📜 Certifications"}
          </button>
        ))}
      </div>

      {/* ── Carousel ── */}
      <div
        style={styles.carouselWrap}
        onMouseEnter={pause}
        onMouseLeave={() => {
          autoRef.current = setInterval(() => go("right"), 4000);
        }}
      >
        {/* Prev */}
        <button style={styles.arrow} onClick={() => go("left")} aria-label="Previous">
          ‹
        </button>

        <div style={styles.track}>
          {indices.map((idx, pos) => {
            const item = filtered[idx];
            const isCenter = pos === 1 || (VISIBLE < 3 && pos === 0);
            return (
              <div
                key={item.id}
                style={{
                  ...styles.card,
                  ...(isCenter ? styles.cardCenter : styles.cardSide),
                  animation: `cardSlide${animDir === "right" ? "In" : "InReverse"} 0.35s ease both`,
                  animationDelay: `${pos * 0.06}s`,
                }}
              >
                <div style={styles.iconRing}>
                  <span style={styles.iconEmoji}>{item.icon}</span>
                </div>
                <div
                  style={{
                    ...styles.badge,
                    background: item.type === "award" ? "#c9a96e22" : "#6ea8c922",
                    color: item.type === "award" ? "#c9a96e" : "#6ea8c9",
                    borderColor: item.type === "award" ? "#c9a96e44" : "#6ea8c944",
                  }}
                >
                  {item.type === "award" ? "Award" : "Certification"}
                </div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardIssuer}>{item.issuer}</p>
                <p style={styles.cardYear}>{item.year}</p>
                {isCenter && (
                  <p style={styles.cardDesc}>{item.description}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Next */}
        <button style={styles.arrow} onClick={() => go("right")} aria-label="Next">
          ›
        </button>
      </div>

      {/* ── Dot Indicators ── */}
      <div style={styles.dots}>
        {filtered.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setAnimDir(i > active ? "right" : "left");
              setActive(i);
            }}
            aria-label={`Go to ${i + 1}`}
            style={{
              ...styles.dot,
              ...(i === active ? styles.dotActive : {}),
            }}
          />
        ))}
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes cardSlideIn {
          from { opacity: 0; transform: translateX(32px) scale(0.96); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes cardSlideInReverse {
          from { opacity: 0; transform: translateX(-32px) scale(0.96); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        #awards button:hover { opacity: 0.85; }
      `}</style>
    </section>
  );
}

// ── Styles ─────────────────────────────────────────────────────────────────
const styles = {
  section: {
    padding: "5rem 2rem",
    maxWidth: "1100px",
    margin: "0 auto",
    fontFamily: "Georgia, 'Times New Roman', serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  secNum: {
    display: "block",
    fontSize: "0.75rem",
    letterSpacing: "0.25em",
    color: "var(--accent, #c9a96e)",
    marginBottom: "0.4rem",
    textTransform: "uppercase",
  },
  heading: {
    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
    color: "var(--text, #333)",
    margin: "0 0 0.75rem",
    fontWeight: "normal",
    letterSpacing: "0.02em",
  },
  rule: {
    width: "60px",
    height: "2px",
    background: "var(--accent, #c9a96e)",
    margin: "0 auto",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    gap: "0.75rem",
    marginBottom: "2.5rem",
    flexWrap: "wrap",
  },
  tab: {
    padding: "0.45rem 1.25rem",
    border: "1px solid var(--border, #333)",
    borderRadius: "2rem",
    background: "transparent",
    color: "var(--text-muted, #888)",
    cursor: "pointer",
    fontSize: "0.85rem",
    letterSpacing: "0.04em",
    transition: "all 0.2s",
    fontFamily: "Georgia, serif",
  },
  tabActive: {
    background: "var(--accent, #c9a96e)",
    borderColor: "var(--accent, #c9a96e)",
    color: "#0f0f0f",
    fontWeight: "bold",
  },
  carouselWrap: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  arrow: {
    flexShrink: 0,
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    border: "1px solid var(--accent, #c9a96e)",
    background: "transparent",
    color: "var(--accent, #c9a96e)",
    fontSize: "1.6rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.2s",
    fontFamily: "Georgia, serif",
    lineHeight: 1,
  },
  track: {
    flex: 1,
    display: "flex",
    gap: "1.25rem",
    overflow: "hidden",
    alignItems: "stretch",
  },
  card: {
    flex: "1 1 0",
    borderRadius: "6px",
    padding: "1.75rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "0.65rem",
    transition: "transform 0.3s, box-shadow 0.3s",
    minWidth: 0,
  },
  cardCenter: {
    background: "var(--card-bg, #1c1c1c)",
    border: "1px solid var(--accent, #c9a96e)",
    boxShadow: "0 8px 32px rgba(201,169,110,0.15)",
    transform: "scale(1.03)",
  },
  cardSide: {
    background: "var(--card-bg-dim, #161616)",
    border: "1px solid var(--border, #2a2a2a)",
    opacity: 0.72,
    transform: "scale(0.97)",
  },
  iconRing: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    border: "1px solid var(--accent, #c9a96e)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.25rem",
    background: "var(--accent-subtle, #c9a96e12)",
  },
  iconEmoji: {
    fontSize: "1.6rem",
    lineHeight: 1,
  },
  badge: {
    fontSize: "0.7rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "0.2rem 0.75rem",
    borderRadius: "2rem",
    border: "1px solid",
    fontFamily: "Georgia, serif",
  },
  cardTitle: {
    fontSize: "1rem",
    color: "var(--text, #eee)",
    margin: 0,
    fontWeight: "normal",
    lineHeight: 1.35,
  },
  cardIssuer: {
    fontSize: "0.8rem",
    color: "var(--accent, #c9a96e)",
    margin: 0,
    fontStyle: "italic",
  },
  cardYear: {
    fontSize: "0.75rem",
    color: "var(--text-muted, #666)",
    margin: 0,
    letterSpacing: "0.1em",
  },
  cardDesc: {
    fontSize: "0.82rem",
    color: "var(--text-muted, #999)",
    margin: "0.25rem 0 0",
    lineHeight: 1.6,
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    marginTop: "1.75rem",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    border: "none",
    background: "var(--border, #333)",
    cursor: "pointer",
    padding: 0,
    transition: "background 0.2s, transform 0.2s",
  },
  dotActive: {
    background: "var(--accent, #c9a96e)",
    transform: "scale(1.35)",
  },
};