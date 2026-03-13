const testimonials = [
  { initials: 'AP', name: 'Ananya Pillai',    role: 'Class XII Graduate',       quote: '"CGR gave me wings to think beyond textbooks."',           av: 'av1' },
  { initials: 'RS', name: 'Rajan Sharma',     role: 'Parent · 3 Years',         quote: '"My child grew not just academically, but as a person."',   av: 'av2' },
  { initials: 'PM', name: 'Priya Menon',      role: 'Science Teacher',          quote: '"A leader who inspires every teacher in the room."',        av: 'av3' },
  { initials: 'KY', name: 'Kenji Yamamoto',   role: 'Exchange Student · Japan', quote: '"She made learning English feel like home."',               av: 'av4' },
  { initials: 'SM', name: 'Sunita Mehta',     role: 'Co-founder, PTA',          quote: '"Vision, warmth and relentless dedication."',               av: 'av5' },
  { initials: 'AK', name: 'Arjun Kumar',      role: 'Alumnus · Batch 2022',     quote: '"Debate club changed how I see the world."',                av: 'av6' },
  { initials: 'DL', name: 'Da-eun Lee',       role: 'Student · South Korea',    quote: '"She saw my potential before I could."',                    av: 'av7' },
  { initials: 'NR', name: 'Nalini Rao',       role: 'English Faculty',          quote: '"Working here is a masterclass in purposeful education."',  av: 'av8' },
  { initials: 'VB', name: 'Vikram Bose',      role: 'Parent · 5 Years',         quote: '"The school feels like one big, caring family."',           av: 'av1' },
  { initials: 'IG', name: 'Ishita Gupta',     role: 'Class X Student',          quote: '"Ma\'am always says — your voice matters."',               av: 'av3' },
]

// Duplicate for seamless infinite loop
const allCards = [...testimonials, ...testimonials]

export default function Carousel() {
  return (
    <section id="people" style={{ padding: '5rem 0' }}>
      <div className="people-hdr reveal">
        <div className="sec-hdr" style={{ justifyContent: 'center', marginBottom: '0.3rem' }}>
          <span className="sec-num" style={{ color: 'var(--gold-light)' }}>✦</span>
          <h2 style={{ color: 'var(--cream)' }}>Voices from the Community</h2>
        </div>
        <p className="people-sub">Educators, students &amp; families who've been part of this journey</p>
      </div>

      <div className="track-wrap" style={{ marginTop: '2.5rem' }}>
        <div className="carousel-track">
          {allCards.map((card, i) => (
            <div className="pcard" key={i}>
              <div className={`pavatar ${card.av}`}>{card.initials}</div>
              <div className="pname">{card.name}</div>
              <div className="prole">{card.role}</div>
              <div className="pquote">{card.quote}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
