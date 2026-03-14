import { useState } from "react";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.target);
    try {
      const res = await fetch("https://formspree.io/f/xvzwqldd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function closeModal() {
    setOpen(false);
    setStatus("idle");
  }

  return (
    <section id="contact">
      <div
        className="sec-hdr reveal"
        style={{ justifyContent: "center", flexDirection: "column", textAlign: "center", gap: "0.5rem" }}
      >
        <span className="sec-num">05</span>
        <h2>Let's Connect</h2>
      </div>

      <p className="contact-intro reveal">
        Whether you're looking to collaborate, consult, or simply exchange ideas about education
        — I'd love to hear from you.
      </p>

      <div className="ccards">
        <div className="ccard reveal d1">
          <div className="clbl">Location</div>
          <div className="cval">Hyderabad, Telangana, India</div>
        </div>
        <div className="ccard reveal d2">
          <div className="clbl">Mail</div>
          <div className="cval">
            <a href="mailto:drshilpakotla@gmail.com" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
              drshilpakotla@gmail.com
            </a>
          </div>
        </div>
        <div className="ccard reveal d3">
          <div className="clbl">LinkedIn</div>
          <div className="cval">
            <a href="https://www.linkedin.com/in/dr-shilpa-kotla-a82324285/" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
              Dr. Shilpa Kotla
            </a>
          </div>
        </div>
      </div>

      <div className="ssub reveal" style={{ marginTop: "0.5rem" }}  >Led by Dr. Shilpa Kotla</div>

      <button
        className="btn-primary reveal d4 "
        style={{ marginTop: "1.5rem" }}
        onClick={() => setOpen(true)}
      >
        <span className="cval">Get in Touch</span>
      </button>

      {/* ── Modal Overlay ── */}
      {open && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "var(--bg, #1a1a1a)",
              border: "1px solid var(--accent, #eeb345)",
              borderRadius: "6px",
              width: "100%", maxWidth: "520px",
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
              animation: "modalIn 0.25s ease",
            }}
          >
            {/* Header */}
            <div style={{
              background: "var(--accent, #eeb345)",
              padding: "1.1rem 1.5rem",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <h3 style={{ margin: 0, color: "#0f0f0f", fontSize: "1.1rem", fontFamily: "Georgia, serif" }}>
                Get in Touch
              </h3>
              <button
                onClick={closeModal}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: "1.4rem", color: "#0f0f0f", lineHeight: 1, padding: "0 4px",
                }}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: "1.5rem" }}>
              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>✉️</div>
                  <p style={{ color: "var(--accent, #c9a96e)", fontSize: "1.1rem", fontFamily: "Georgia, serif" }}>
                    Message sent!
                  </p>
                  <p style={{ color: "var(--text-muted, #999)", fontSize: "0.9rem", marginTop: "0.4rem" }}>
                    Thank you — I'll get back to you soon.
                  </p>
                  <button
                    onClick={closeModal}
                    style={{
                      marginTop: "1.25rem",
                      padding: "0.6rem 1.5rem",
                      background: "var(--accent, #c9a96e)",
                      color: "#0f0f0f", border: "none", borderRadius: "4px",
                      cursor: "pointer", fontWeight: "bold",
                    }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <label style={labelStyle}>
                      Full Name *
                      <input name="name" required placeholder="Dr. Jane Smith" style={inputStyle} />
                    </label>
                    <label style={labelStyle}>
                      Email Address *
                      <input name="email" type="email" required placeholder="jane@example.com" style={inputStyle} />
                    </label>
                    <label style={labelStyle}>
                      Mobile Number
                      <input name="mobile" type="tel" placeholder="+91 98765 43210" style={inputStyle} />
                    </label>
                    <label style={labelStyle}>
                      Purpose
                      <select name="purpose" style={{ ...inputStyle, cursor: "pointer" }}>
                        <option value="">Select…</option>
                        <option>Collaboration</option>
                        <option>Consultation</option>
                        <option>Speaking Engagement</option>
                        <option>General Enquiry</option>
                        <option>Other</option>
                      </select>
                    </label>
                  </div>

                  <label style={{ ...labelStyle, marginTop: "1rem", display: "flex", flexDirection: "column" }}>
                    Organisation / Institution
                    <input name="organisation" placeholder="Your Organisation" style={inputStyle} />
                  </label>

                  <label style={{ ...labelStyle, marginTop: "1rem", display: "flex", flexDirection: "column" }}>
                    Message *
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="I'd love to discuss…"
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </label>

                  {status === "error" && (
                    <p style={{ color: "#e05c5c", fontSize: "0.85rem", marginTop: "0.75rem" }}>
                      Something went wrong. Please try again or email directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{
                      marginTop: "1.25rem",
                      padding: "0.75rem 1.75rem",
                      background: "var(--accent, #eeb345)",
                      color: "#0f0f0f", border: "none", borderRadius: "4px",
                      fontWeight: "bold", fontSize: "0.95rem",
                      cursor: status === "sending" ? "not-allowed" : "pointer",
                      opacity: status === "sending" ? 0.7 : 1,
                      transition: "opacity 0.2s",
                    }}
                  >
                    {status === "sending" ? "Sending…" : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}

// Shared styles
const labelStyle = {
  display: "flex", flexDirection: "column",
  gap: "0.35rem", fontSize: "0.8rem",
  color: "var(--accent, #eeb345)",
  fontFamily: "Georgia, serif",
};

const inputStyle = {
  padding: "0.55rem 0.75rem",
  background: "var(--input-bg, #111)",
  border: "1px solid var(--border, #333)",
  borderRadius: "3px",
  color: "var(--text, #eee)",
  fontSize: "0.9rem",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};
