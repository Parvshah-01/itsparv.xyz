'use client'

import Image from 'next/image'
import './Footer.css'

export default function Footer() {
  return (  
    <footer className="footer">
      <div className="socials">
        <a href="https://github.com/Parvshah-01" target="_blank" rel="noopener noreferrer" aria-label="GitHub" onContextMenu={(e) => e.preventDefault()}>
          <Image src="/github.svg" alt="GitHub" width={24} height={24} />
        </a>
        <a href="https://t.me/parv_shah01" target="_blank" rel="noopener noreferrer" aria-label="Telegram" onContextMenu={(e) => e.preventDefault()}>
          <Image src="/telegram.svg" alt="Telegram" width={24} height={24} />
        </a>
        <a href="https://www.linkedin.com/in/Parvshah01" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onContextMenu={(e) => e.preventDefault()}>
          <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        </a>
        <a href="https://instagram.com/Parv_shah01" target="_blank" rel="noopener noreferrer" aria-label="Instagram" onContextMenu={(e) => e.preventDefault()} >
          <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
        </a>
      </div>
      <p className='love-by-parv'>Made with ♡ by Parv</p>
    </footer>
  )
}
