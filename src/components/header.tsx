'use client' // Enable client-side rendering (Next.js)

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import './Header.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const slideMenuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (slideMenuRef.current && !slideMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* ========================
          🧭 Navbar
      ========================= */}
      <header className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Link href="/">&gt;_parv$</Link>
          </div>

          <nav className="nav-links">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          </nav>

          <div className="contact-btn desktop-only">
            <Link href="/contact">GET IN TOUCH</Link>
          </div>

          <button
            className={`hamburger mobile-only ${mobileMenuOpen ? 'hidden-hamburger' : ''}`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>

        </div>
      </header>
      {/* ========================
          📱 Mobile Slide Menu
      ========================= */}
      <div
        ref={slideMenuRef}
        className={`slide-menu ${mobileMenuOpen ? 'open' : ''}`}
      >
        <button
          className="close-btn"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>GET IN TOUCH</Link>
      </div>

        </>
    )
}