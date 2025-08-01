// app/not-found.tsx
'use client'

import Link from 'next/link'
import './home.css'

export default function NotFoundPage() {
  return (
    <div className="main-content" style={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <div className="outer-box" style={{ textAlign: 'center', padding: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>Looks like you&apos;re lost in the grid.</p>
        <Link href="/" className="contact-btn" style={{ marginTop: '2rem', display: 'inline-block' }}>
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  )
}
