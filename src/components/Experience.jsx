const experiences = [
  {
   
    role: 'EuroKids, Turkayamjal',
    org: 'Nurturing Curiosity in the Early Years',
    desc: 'Supported the development and strengthening of early childhood learning practices at EuroKids, Turkayamjal, focusing on creating engaging and nurturing learning environments. Contributed to implementing child-centered teaching approaches, structured activity-based learning, and teacher guidance that encourages curiosity, creativity, and joyful exploration during the foundational years of education.',
  },
  {
    role: 'My Alphabets',
    org: 'Building Strong Foundations for Lifelong Learning',
    desc: 'Worked closely with the institution to help shape a learning environment that emphasizes early literacy, creativity, and confidence among young learners. Guidance included structuring engaging learning activities, supporting educators with effective teaching strategies, and ensuring that foundational skills are developed in a joyful and supportive atmosphere.',
  },
  {
    
    role: 'Little Hive',
    org: 'A Space Where Young Minds Blossom',
    desc: 'Contributed to the development of a warm and stimulating early learning space where children are encouraged to explore, imagine, and grow. Provided insights on creating interactive learning environments, supporting educators, and nurturing the social, emotional, and cognitive development of young learners.',
  },
  {
    role: 'Aranya – The School',
    org: 'Holistic Learning Inspired by Nature and Curiosity',
    desc: 'Supported the institution in strengthening its approach to holistic education by encouraging learning experiences that connect academics with creativity, exploration, and real-world understanding. Guidance focused on creating balanced learning environments that nurture curiosity, critical thinking, and character development.',},
  {
    role: 'Abhayas',
    org: 'Empowering Students Through Meaningful Education',
    desc: 'Worked with the school to help enhance learning structures and educational practices that support student growth and confidence. Focus areas included developing engaging teaching methods, strengthening academic frameworks, and encouraging a learning culture that values both knowledge and character development.',
  }
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="sec-hdr reveal">
        <span className="sec-num">03</span>
        <h2>Our Journey</h2>
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
