export default function Contact() {
  return (
    <section id="contact">
      <div className="sec-hdr reveal" style={{ justifyContent: 'center', flexDirection: 'column', textAlign: 'center', gap: '0.5rem' }}>
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
          <div className="clbl">Pronouns</div>
          <div className="cval">She / Her</div>
        </div>
        <div className="ccard reveal d3">
          <div className="clbl">LinkedIn</div>
          <div className="cval">
            <a
              href="https://www.linkedin.com/in/dr-shilpa-kotla-a82324285/"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline' }}
            >
              Dr. Shilpa Kotla
            </a>
          </div>
        </div>
      </div>

      <div className="sbadge reveal">EuroKids International Pre-School &amp; Day Care</div>
      <div className="ssub reveal" style={{ marginTop: '0.5rem' }}>Led by Dr. Shilpa Kotla</div>
    </section>
  )
}
