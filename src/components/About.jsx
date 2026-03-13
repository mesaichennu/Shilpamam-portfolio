export default function About() {
  return (
    <section id="about">
      <div className="sec-hdr reveal">
        <span className="sec-num">01</span>
        <h2>About Me</h2>
        <div className="sec-rule" />
      </div>

      <div className="about-grid">
        <div className="about-text reveal-left">
          <p>
            With a deep passion for early childhood education and school leadership, I've dedicated
            my career to creating nurturing, joyful learning environments where every young child is
            empowered to thrive. My journey spans leading pre-schools and day care centres across
            Pune and Hyderabad.
          </p>
          <p>
            As Principal at EuroKids International Pre-School &amp; Day Care, I have built and guided
            high-performing teams, championed child-centered pedagogy, and ensured that every family
            feels a warm sense of community from day one.
          </p>
          <p>
            Prior to my current role, I served as Center Head at EuroKids Pre-School &amp; Day Care
            Bopodi, and before that as School Principal at Lighthouse Learning Group — giving me
            broad experience across early childhood institutions and diverse learning communities
            in Hyderabad.
          </p>
          <p>
            I hold an MBA in Business Administration and Management. Beyond academics, my key
            expertise lies in Corporate Management and building collaborative, motivated school
            communities.
          </p>
        </div>

        <div className="about-aside reveal-right">
          <div className="aside-card reveal d1">
            <div className="aside-lbl">Current Role</div>
            <div className="aside-val">Principal<br />EuroKids International Pre-School &amp; Day Care</div>
          </div>
          <div className="aside-card reveal d2">
            <div className="aside-lbl">Education</div>
            <div className="aside-val">MBA · Business Administration<br />Gauthami Public School</div>
          </div>
          <div className="aside-card reveal d3">
            <div className="aside-lbl">Based in</div>
            <div className="aside-val">Hyderabad, Telangana, India</div>
          </div>
          <div className="aside-card reveal d4">
            <div className="aside-lbl">Core Belief</div>
            <div className="aside-val">"The bond between a teacher and student is the cornerstone of lifelong learning."</div>
          </div>
        </div>
      </div>
    </section>
  )
}
