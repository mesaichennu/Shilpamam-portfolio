const experiences = [
  {
    period: 'October 2021 — Present',
    role: 'Principal',
    org: 'EuroKids International Pre-School & Day Care, Lohegaon / Wagholi Road, Pune — Hyderabad, Telangana',
    desc: 'Leading daily operations, pedagogy, and team management at EuroKids International Pre-School & Day Care. Championing a child-centered culture that prioritises joyful learning, parental engagement, and holistic early childhood development.',
  },
  {
    period: 'Up to October 2024',
    role: 'Center Head',
    org: 'EuroKids Pre-School & Day Care Bopodi — Hyderabad, Telangana',
    desc: 'Managed centre operations and academic programmes, building a cohesive team dedicated to high-quality early childhood education and community trust.',
  },
  {
    period: 'July 2021 — October 2024',
    role: 'School Principal',
    org: 'Lighthouse Learning Group — Hyderabad, Telangana',
    desc: 'Served as School Principal at Lighthouse Learning Group for over three years, overseeing curriculum, staff development, and institutional growth across early childhood programmes.',
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="sec-hdr reveal">
        <span className="sec-num">03</span>
        <h2>Experience</h2>
        <div className="sec-rule" />
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div className={`titem reveal d${i + 1}`} key={i}>
            <div className="tdot" />
            <div className="tperiod">{exp.period}</div>
            <div className="trole">{exp.role}</div>
            <div className="torg">{exp.org}</div>
            <p className="tdesc">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
