import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
        <a className="nav-logo" href="#">Dr. Shilpa Kotla</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#people">Community</a></li>
          <li><a href="#vision">Vision</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#people" onClick={closeMenu}>Community</a>
        <a href="#vision" onClick={closeMenu}>Vision</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </>
  )
}
