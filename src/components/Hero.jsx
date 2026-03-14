// Place shilpa.jpeg in src/assets/ — update this path if your filename differs
// e.g. import shilpaImg from '../assets/shilpa.jpeg'
const shilpaImg = 'https://kalapeksha.vercel.app/shilpa.jpeg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">Transforming Education. &amp; Inspiring Minds. Building Confident Futures. </div>
        <h1>Dr. Shilpa <em>Kotla</em></h1>
        <p className="hero-tagline">
         Dr. Shilpa Kotla is an award-winning education leader, trainer, and mentor with over 15 years of experience in school leadership, teacher development, and personality transformation.
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
              <div className="portrait-role-txt">Hyderabad, India</div>
            </div>
          </div>
        </div>

        <div className="stats-row">
          <div className="stat">
            <div className="stat-num">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat">
            <div className="stat-num">Doctorate</div>
            <div className="stat-label">In Management</div>
          </div>
          <div className="stat">
            <div className="stat-num">16+</div>
            <div className="stat-label">Schools Led</div>
          </div>
        </div>
      </div>
    </section>
  )
}
