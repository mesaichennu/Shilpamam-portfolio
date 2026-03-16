const testimonials = [
  { src: '/awards/1.jpeg', name: 'Ananya Pillai',    role: 'Class XII Graduate',       quote: '"CGR gave me wings to think beyond textbooks."',           av: 'av1' },
  { src: '/carousel/2.jpeg',name: 'Madhusudhan Reddy',role: 'Qlearn(L&D)',         quote: '"My child grew not just academically, but as a person."',   av: 'av2' },
  { src: 'PM',             name: 'Priya Menon',      role: 'Science Teacher',          quote: '"A leader who inspires every teacher in the room."',        av: 'av3' },
  { src: 'KY',             name: 'Kenji Yamamoto',   role: 'Exchange Student · Japan', quote: '"She made learning English feel like home."',               av: 'av4' },
  { src: 'SM',             name: 'Sunita Mehta',     role: 'Co-founder, PTA',          quote: '"Vision, warmth and relentless dedication."',               av: 'av5' },
  { src: 'AK',             name: 'Arjun Kumar',      role: 'Alumnus · Batch 2022',     quote: '"Debate club changed how I see the world."',                av: 'av6' },
  { src: 'DL',             name: 'Da-eun Lee',       role: 'Student · South Korea',    quote: '"She saw my potential before I could."',                    av: 'av7' },
  { src: 'NR',             name: 'Nalini Rao',       role: 'English Faculty',          quote: '"Working here is a masterclass in purposeful education."',  av: 'av8' },
  { src: 'VB',             name: 'Vikram Bose',      role: 'Parent · 5 Years',         quote: '"The school feels like one big, caring family."',           av: 'av1' },
  { src: 'IG',             name: 'Ishita Gupta',     role: 'Class X Student',          quote: '"Ma\'am always says — your voice matters."',               av: 'av3' },
]

const allCards = [...testimonials, ...testimonials]

// If src starts with '/' or '.', it's an image path — otherwise it's initials
const isImage = (src) => src.startsWith('/') || src.startsWith('.')

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

              {/* Avatar — image or initials fallback */}
              <div className={`pavatar ${card.av}`}>
                {isImage(card.src) ? (
                  <img
                    src={card.src}
                    alt={card.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      display: 'block',
                    }}
                  />
                ) : (
                  card.src
                )}
              </div>

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