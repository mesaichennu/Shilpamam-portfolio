// Place shilpa.jpeg in src/assets/ — update this path if your filename differs
// e.g. import shilpaImg from '../assets/shilpa.jpeg'
const shilpaImg = 'https://kalapeksha.vercel.app/shilpa.jpeg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">Principal &amp; Educational Leader</div>
        <h1>Dr. Shilpa <em>Kotla</em></h1>
        <p className="hero-tagline">
          4+ years leading EuroKids International Pre-School &amp; Day Care — nurturing young minds
          and building joyful, purposeful, empowering learning spaces for early childhood.
        </p>
        <div className="hero-cta-row">
          <a href="#about" className="btn-primary"><span className="lbl">Discover My Story</span></a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="portrait-frame">
          <div className="portrait-shadow" />
          <div className="portrait-inner">
            <img src={shilpaImg} alt="Dr. Shilpa Kotla" />
            <div className="portrait-overlay">
              <div className="portrait-name">Dr. Shilpa Kotla</div>
              <div className="portrait-role-txt">She / Her &nbsp;·&nbsp; Hyderabad, India</div>
            </div>
          </div>
        </div>

        <div className="stats-row">
          <div className="stat">
            <div className="stat-num">4+</div>
            <div className="stat-label">Years as Principal</div>
          </div>
          <div className="stat">
            <div className="stat-num">MBA</div>
            <div className="stat-label">Post-Graduate</div>
          </div>
          <div className="stat">
            <div className="stat-num">2</div>
            <div className="stat-label">Schools Led</div>
          </div>
        </div>
      </div>
    </section>
  )
}
